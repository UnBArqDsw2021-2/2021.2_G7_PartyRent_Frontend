import React from 'react';
 
class Products extends React.Component {
    render() { 
        return (  
            <div>
                <header className="products-header">
                    <h1>Produtos</h1>
                    <p>Alugue para a sua festa</p>
                </header>
                <div className="products-grid">
                    <div>Product Item 1</div>
                    <div>Product Item 2</div>
                    <div>Product Item 3</div>
                    <div>Product Item 4</div>
                    <div>Product Item 5</div>
                    <div>Product Item 6</div>
                </div>
            </div>
        );
    }
}
 
export default Products;