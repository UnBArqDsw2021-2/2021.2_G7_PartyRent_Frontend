import React, {useEffect, useState} from 'react';
import {NavLink, useParams} from 'react-router-dom';
import cadeira from "./images/cadeira.jpg"


function ProductDetail() {
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log('useEffect')
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`http://localhost:8000/product/${id}/`);
            console.log(response)
            console.log('passou')
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, []);

    const addProduct = (product) => {
        console.log(product.id)
        fetch("http://localhost:8000/cartitem/", {
            "method": "POST",
            "headers": {
                "accept": "application/json",
                "Content-Type": "application/json"
            },
            "body": JSON.stringify({
                quantity: 1,
                product_id: "http://127.0.0.1:8000/product/"+product.id+'/',
                cart_id: "http://127.0.0.1:8000/cart/1/"
            })
        })
    }

    const ShowProduct = () => {
        return(
            <>
                <div className="col-md-6">
                    <h1 className="display-8">{product.name}</h1>
                    <p className="display-8">{product.description}</p>
                    <h5 className="mb-0">
                        Peso: {product.weight}Kg

                    </h5>
                    <h3 className="display-8 fw-bold my-4">
                        R$ {product.price}
                    </h3>
                    <button className="btn btn-outline-dark" onClick={()=>addProduct(product)}>
                        Adicionar ao carrinho
                    </button>
                  
                    <NavLink to="/cart">
                    <button className="btn btn-outline-dark mt-2" >
                        Ir para o carrinho
                    </button>
                    </NavLink>
                   
                </div>
                <div className="col-md-6">
                    <img src={cadeira} alt={product.name} height="300px" width="350px" />
                </div>
            </>

        )
    }

    return (
        <div>
            <div className="container-sm my-5 py-5">
                <div className="row">
                    {<ShowProduct/>}
                </div>
            </div>
        </div>
    );
}
 
export default ProductDetail;
