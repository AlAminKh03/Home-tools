import React, { useEffect, useState } from 'react';

const UseProductdetail = (productId) => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return [product, setProduct]
};

export default UseProductdetail;