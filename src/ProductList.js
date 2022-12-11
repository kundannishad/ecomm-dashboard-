import Header from "./Header"
import React, { useState, useEffect } from 'react';

import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";

function ProductList() {
    const [products, setProduct] = useState("");
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/products")
            .then(response => response.json())
            .then(products => setProduct(products.data))
           
    }, [])

    async function deleteOperation(id) {
        let result = await fetch("http://127.0.0.1:8000/api/product/"+id,{
            method:"DELETE"
         });
         result = await result.json();
         console.warn(result)
         getProducts()
    }

    function getProducts(){
        fetch("http://127.0.0.1:8000/api/products")
            .then(response => response.json())
            .then(products => setProduct(products.data))
    }
   
    return (
        <div>
            <Header />
            <h1> ProductList</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Title</th>
                        <th>Product Description</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Operations</th>

                    </tr>
                </thead>
                <tbody>

                    {
                        products.length ? products.map((product, id) =>
                            <tr key={product.id}>
                                <td>{id+1}</td>
                                <td>{product.title}</td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td><img alt={product.title} style={{width:190,height:100}}  src={product.image_url}/></td>
                                <td><span onClick={()=>{deleteOperation(product.id)}}>Delete</span>
                                    <Link to={"/update/"+product.id}><span> Edit</span></Link>
                                </td>

                            </tr>
                        ) : null
                    }



                </tbody>
            </Table>
        </div>
    )
}

export default ProductList