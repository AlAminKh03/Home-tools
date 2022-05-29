import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Product = ({ product }) => {

    const { _id, name, price, description, available, img } = product
    // console.log(_id)
    // const navigate = useNavigate()

    // const navigateToProductdetail = (id) => {
    //     // navigate(`/product/${id}`)

    // }
    return (

        <div className="card w-auto bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                </h2>
                <p className='text-justify'>{description}</p>
                <div className="card-actions justify-center">
                    <div className="badge badge-outline bg-accent text-white font-bold">Price: ${price}</div>
                    <div className="badge badge-outline bg-neutral text-white font-bold">Available: {available}</div>
                </div>
                <div className="card-actions justify-center">

                    <Link to={`/product/${_id}`}><button className="btn btn-primary">Buy Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Product;