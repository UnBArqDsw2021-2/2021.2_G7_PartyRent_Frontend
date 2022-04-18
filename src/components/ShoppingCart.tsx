import React, {Props, } from 'react';
import CartItem from './CartItem';
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

'@fortawesome/react-fontawesome'

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
        var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
        var alertTrigger = document.getElementById('liveAlertBtn')

        function alert(message, type) {
            var wrapper = document.createElement('div')
            wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

            alertPlaceholder.append(wrapper)
        }

        if (alertTrigger) {
            alertTrigger.addEventListener('click', function () {
                alert('Sucesso ao alugar os produtos!', 'success')
            })
        }

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
            <div className="container-main">

                <div className="container mt-5 mb-5 card-teste" >
                    <header className="cart-header mt-5">
                        <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                        <h1>Seu Carrinho</h1>
                    </header>

                    <div className='mt-5'>
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
                    <div className="row-cols-2 products">
                        <div id="liveAlertPlaceholder"></div>
                        <a href="/" type="button" className="btn btn-dark card-alugue" id="liveAlertBtn">Finalizar aluguel</a>
                    </div>
                </div>

            </div>

        );
    }
}
 
export default ShoppingCart;