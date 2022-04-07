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
                <p>{this.props.title}</p>
                <p>{this.props.value}</p>
            </Link>
        );
    }
}
 
export default ProductItem;