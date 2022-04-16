import { useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import { useState } from 'react';
import Button from '../Button';

function ProductDetail() { 
    let params = useParams();
    const [state, setState] = useState()
    useEffect(() =>  {
        fetch('http://127.0.0.1:8000/product/'+params.id+'/',  {
            "method": "GET"
        })
        .then(response => response.json())
        .then(response => {
            setState(response)
            console.log("Finishing fetching product details")
        })
    }, []);

    return (
        <div className='product-details'>
            <img 
                src="https://via.placeholder.com/300" 
                alt="placeholder"
            />
            <div className='product-detail-text'>
                <p>{state?.['name']}</p>
                <p>{state?.['description']}</p>
                <p>R${state?.['price']}</p>
                <button className='add-to-cart'>Adicionar ao<br />Carrinho</button>
            </div>
        </div>
    );
}
 
export default ProductDetail;
