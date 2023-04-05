import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useProducts from "../../Hooks/useProducts";
import Product from "./Product";

const Products = () => {
  const [products] = useProducts();

  // const { data: products, isLoading } = useQuery('products', () => {
  //     fetch('https://home-tools-server-qeek.vercel.app/products')
  //         .then(res => res.json())
  // })

  // if (isLoading) {
  //     return <Loading></Loading>
  // }

  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold ">Our Tools</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mx-[20px] lg:mx-[170px]">
        {products?.map((product, i) => (
          <Product key={product._id} product={product} i={i}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
