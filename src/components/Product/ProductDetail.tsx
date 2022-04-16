import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import { useState } from 'react';

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
        <div>
            <p>Product details</p>
            <p>{state?.['name']}</p>
            <p>ID: {params.id}</p>
        </div>
    );
}
 
export default ProductDetail;
