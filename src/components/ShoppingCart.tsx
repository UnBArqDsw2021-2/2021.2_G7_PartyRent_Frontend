import React from 'react';

 
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
                Shopping Cart Screen
            </div>
        );
    }
}
 
export default ShoppingCart;