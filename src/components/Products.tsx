import React, { useEffect, useState} from 'react';
import cadeira from "./images/cadeira.jpg"

import './style.css'
import {NavLink} from "react-router-dom";
import * as url from "url";

 function Products() {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

        useEffect(() => {
           const getProducts = async () => {
               setLoading(true);
               const response = await fetch("http://localhost:8000/product/");
               console.log('entrou')
               console.log(response)
               if (componentMounted) {

                   setData(await response.clone().json())
                   setFilter(await response.json());
                   setLoading(false);
                   console.log(filter)
               }
               return () => {
                   componentMounted = false;

               }
           }
               getProducts();
        }, []);

     const Loading = () => {
         return (
             <>

             </>
         );
     };


     const ShowProducts = () => {
         return (
             <>
                 <header className="products-header">
                     <h1>Produtos</h1>
                     <p>Alugue para a sua festa</p>
                 </header>

                 <div className="d-flex justify-content-center pb-5 p">
                 </div>
                 {filter.map((product) => {
                     return (
                         <>
                             <div className="col-md-3 mb-4">
                                 <div class="card h-100 text-center p-4" key={product.url}>
                                     <img src={cadeira} class="card-img-top" alt={product.name} height="200px" />
                                     <div class="card-body">
                                         <h5 class="card-title mb-0">{product.name}</h5>
                                         <p class="card-text lead fw-bold">
                                             R${product.price}
                                         </p>
                                         <NavLink to={`/product/${product.id}`} className="btn btn-outline-dark w-auto" >
                                             Alugar agora
                                         </NavLink>
                                     </div>
                                 </div>
                             </div>
                         </>
                     );
                 })}
             </>
         );
     };
     return (
         <div>
             <div className="container-sm my-5 py-5">
                 <div className="">

                 </div>
                 <div className="row ">
                     {loading ? <Loading /> : <ShowProducts />}
                 </div>
             </div>
         </div>
     );
 };
 
export default Products;