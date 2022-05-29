import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useProducts from '../../Hooks/useProducts';
import Product from './Product';

const Products = () => {
    const [products] = useProducts()

    // const { data: products, isLoading } = useQuery('products', () => {
    //     fetch('https://nameless-bayou-10593.herokuapp.com/products')
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