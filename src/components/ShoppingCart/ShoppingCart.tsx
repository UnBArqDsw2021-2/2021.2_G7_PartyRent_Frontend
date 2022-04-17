import React from 'react';
import CartItem from './CartItem';
import './styles.css';
 
class ShoppingCart extends React.Component<{}, {qtd: number}> {
    constructor(props: any){
        super(props);
        this.state = {
            qtd: 0
        };

    }

    add() {
        this.setState({
            qtd: this.state.qtd + 1
        });
    }

    remove() {
        this.setState({
           qtd: this.state.qtd - 1   
        });
    }
    
    render() { 
        return (
            <div>
                <header className="cart-header">
                    <h1>Seu Carrinho</h1>
                </header>
                <div className='shopping-cart'>
                    <CartItem name='Produto 1' value='20.00' quantity={1}/>
                    <CartItem name='Produto 2' value='10.00' quantity={2}/>
                    <CartItem name='Produto 3' value='30.00' quantity={1}/>
                </div>
            </div>
        );
    }
}
 
export default ShoppingCart;