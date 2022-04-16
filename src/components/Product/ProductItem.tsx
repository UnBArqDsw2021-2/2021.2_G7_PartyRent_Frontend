import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
    id: string;
    title: string;
    value: string;
}
 
interface State {
    
}
 
class ProductItem extends React.Component<Props, State> {
    render() { 
        return (
            <Link to={this.props.id}>
                <button className="product-item">
                    <img 
                        src="https://via.placeholder.com/50" 
                        alt="placeholder"
                    /><br />
                    <p className='item-name'>{this.props.title}</p><br />
                    <p className='item-value'>R${this.props.value}</p>
                </button>
            </Link>
        );
    }
}
 
export default ProductItem;