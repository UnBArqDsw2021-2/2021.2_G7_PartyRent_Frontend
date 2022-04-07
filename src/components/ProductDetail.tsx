import React from 'react';
import { useParams } from 'react-router-dom'; 

function ProductDetail() { 
    let params = useParams();
    return (
        <div>
            <p>Product details</p>
            <p>ID: {params.id}</p>
        </div>
    );
}
 
export default ProductDetail;
