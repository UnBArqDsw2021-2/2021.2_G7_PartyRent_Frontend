import React from 'react';

interface Props {
    name: string;
    value: string;
    quantity: Number;
}
 
interface State {
    
}
 
class CartItem extends React.Component<Props, State> {
    render() { 
        return(
            <div className='cart-item'>
                <img 
                    src="https://via.placeholder.com/100" 
                    alt="placeholder"
                />
                <p>{this.props.name}</p>
                <p>R${this.props.value}</p>
            </div> 
        ); 
    }
}
 
export default CartItem;