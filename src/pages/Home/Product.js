import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Product = ({ product }) => {

    const { _id, name, price, description, available, img } = product
    console.log(_id)
    // const navigate = useNavigate()

    // const navigateToProductdetail = (id) => {
    //     // navigate(`/product/${id}`)

    // }
    return (

        <div class="card w-auto bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">
                    {name}
                </h2>
                <p className='text-justify'>{description}</p>
                <div class="card-actions justify-center">
                    <div class="badge badge-outline bg-accent text-white font-bold">Price: ${price}</div>
                    <div class="badge badge-outline bg-neutral text-white font-bold">Available: {available}</div>
                </div>
                <div class="card-actions justify-center">

                    <Link to={`/product/${_id}`}><button class="btn btn-primary">Buy Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Product;