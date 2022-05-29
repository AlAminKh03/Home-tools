import React, { useEffect, useState } from 'react';

const UseProductdetail = (productId) => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        const url = `https://nameless-bayou-10593.herokuapp.com/product/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return [product, setProduct]
};

export default UseProductdetail;