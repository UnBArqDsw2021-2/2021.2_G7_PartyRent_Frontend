import React from 'react';

interface Props {
    quantity: Number;
    product_url: string;
    id: number;
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

    deleteProduct(id) {
        fetch("http://127.0.0.1:8000/cartitem/"+id+'/', {
            "method": "DELETE"
        })
        .then(response => {
            window.location.reload(true);
        })
    }

    render() { 
        return(
            <>
                    <div className='container-fluid cart-item'>
                        <img
                            src="https://via.placeholder.com/100"
                            alt="placeholder"
                        />
                        <p>{this.state.product.name}</p>
                        <p className="fw-bold">R${this.state.product.price}</p>
                        <p>{this.props.quantity}</p>
                        <button className="btn btn-dark btn-card" onClick={()=>this.deleteProduct(this.props.id)}>DELETAR</button>
                    </div>
            </>

        ); 
    }
}
 
export default CartItem;