import React from 'react';
import ProductItem from './ProductItem';
import './styles.css';
 
interface Props {

}
 
interface State {
    products: []
}

class Products extends React.Component<Props, State> {
    constructor(props: Props | Readonly<Props>) {
        super(props);
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        console.log("Start fetching products")
        fetch("http://127.0.0.1:8000/product/",  {
            "method": "GET"
        })
        .then(response => response.json())
        .then(response => {
            this.setState({
                products: response
            })
            console.log("Finishing fetching products")
        })
        .catch(err => {console.log(err);
        });
    }

    render() { 
        return (  
            <div>
                <header className="products-header">
                    <h1>Produtos</h1>
                    <p>Alugue para a sua festa</p>
                </header>
                <div className="products-grid">
                    {this.state.products.map((product, index) => {
                        return <div key={index}>
                            <ProductItem
                                id={product['url'].split('/')[4]}
                                title={product['name']}
                                value={product['price']}
                            />
                        </div>
                    })}
                </div>
            </div>
        );
    }
}
 
export default Products;
