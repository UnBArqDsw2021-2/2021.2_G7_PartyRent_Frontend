import React from 'react';
import { NavItem } from 'react-bootstrap';
import CartItem from './CartItem';
import './style.css';

interface Props {

}

interface State {
    cartItems: []
    products: []
}


class ShoppingCart extends React.Component<Props, State>  {
    constructor(props: Props | Readonly<Props>) {
        super(props);
        this.state = {
            cartItems: [],
            products: []
        };
    }

    componentDidMount() {
        console.log("Start fetching items")
        fetch("http://127.0.0.1:8000/cartitem/",  {
            "method": "GET"
        })
        .then(response => response.json())
        .then(response => {
            this.setState({
                cartItems: response
            })
            console.log("Finishing fetching items")

        })
        .catch(err => {console.log(err);
        });
    }
    
    render() { 
        return (
            <div>
                <header className="cart-header">
                    <h1>Seu Carrinho</h1>
                </header>
                <div className='shopping-cart'>
                    {this.state.cartItems.map((item, index) => {
                        return <div key={index}>
                            <CartItem 
                                quantity={item.quantity}
                                product_url={item.product_id}
                                id={item.url.split('/')[4]}
                            />
                        </div>
                    })}
                    
                </div>
            </div>
        );
    }
}
 
export default ShoppingCart;