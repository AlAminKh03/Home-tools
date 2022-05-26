import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data)
            })
    }, [])
    // const { data: products, isLoading } = useQuery('products', () => {
    //     fetch('http://localhost:5000/products')
    //         .then(res => res.json())
    // })

    // if (isLoading) {
    //     return <Loading></Loading>
    // }
    return (
        <div>
            <h1 className='text-3xl font-bold'>Our Tools</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5" >

                {products?.map(product => <Product
                    key={product._id}
                    product={product}
                >

                </Product>)}
            </div>
        </div>

    );
};

export default Products;