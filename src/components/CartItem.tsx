import React from 'react';

interface Props {
    quantity: Number;
    product_url: string;
}
 
interface State {
    product: any
}
 
class CartItem extends React.Component<Props, State> {
    constructor(props: Props | Readonly<Props>) {
        super(props);
        this.state = {
            product: {}
        };
    }

    componentDidMount() {
        console.log("Start fetching items")
        fetch(this.props.product_url,  {
            "method": "GET"
        })
        .then(response => response.json())
        .then(response => {
            this.setState({
                product: response
            })
            console.log("Finishing fetching items")

        })
        .catch(err => {console.log(err);
        });
    }

    render() { 
        return(
            <div className='cart-item'>
                <img 
                    src="https://via.placeholder.com/100" 
                    alt="placeholder"
                />
                <p>{this.state.product.name}</p>
                <p>R${this.state.product.price}</p>
                <p>{this.props.quantity}</p>
            </div> 
        ); 
    }
}
 
export default CartItem;