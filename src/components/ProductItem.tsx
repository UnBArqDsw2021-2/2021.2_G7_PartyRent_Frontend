import React from 'react';

interface Props {
    title: string;
    value: string;
}
 
interface State {
    
}
 
class ProductItem extends React.Component<Props, State> {
    render() { 
        return ( 
            <div>
                <p>{this.props.title}</p>
                <p>{this.props.value}</p>
            </div>
        );
    }
}
 
export default ProductItem;