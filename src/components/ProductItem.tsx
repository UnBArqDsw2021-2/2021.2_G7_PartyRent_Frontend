import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import api from "../services/api";
import cadeira from "./images/cadeira.jpg"

 
function ProductItem() {
   
        const [product, setProduct] = useState();
        useEffect(() => {
          api
            .get("/product/")
            .then((response) => {
                console.log(response)
                setProduct(response.data)}) 
            .catch((err) => {
              console.error("ops! ocorreu um erro" + err);
            });
        }, []);
        
        return (
            <div className='card-container'>
               
            {product?.name}
            <br/>
            <img src={cadeira} />
            {product?.price}
            </div>
        );


}
 
export default ProductItem;