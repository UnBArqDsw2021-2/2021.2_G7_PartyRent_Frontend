import React from 'react';
import ProductItem from './ProductItem';
 
let productsPlaceholder = Array(10).fill(<ProductItem title='Product Item' value='$0,00'/>)

class Products extends React.Component {
    render() { 
        return (  
            <div>
                <header className="products-header">
                    <h1>Produtos</h1>
                    <p>Alugue para a sua festa</p>
                </header>
                <div className="products-grid">
                    {productsPlaceholder}
                </div>
            </div>
        );
    }
}
 
export default Products;