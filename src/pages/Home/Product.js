import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Product = ({ product, i }) => {
  const { _id, name, price, description, available, img } = product;
  console.log(i);
  return (
    <div
      className={`border-[3px] w-auto rounded-lg border-gray-700  border-b-gray-700 border-b-[12px] ${
        i % 2 ? " mt-0 lg:mt-20" : " mb-0 lg:mb-20"
      }`}
    >
      <figure className="flex items-center justify-center ">
        <img src={img} alt="Shoes" className="w-[150px] h-[150px] " />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-justify">{description}</p>
        <div className="card-actions justify-center">
          <div className="badge badge-outline bg-accent text-white font-bold">
            Price: ${price}
          </div>
          <div className="badge badge-outline bg-neutral text-white font-bold">
            Available: {available}
          </div>
        </div>
        <div className="card-actions justify-center">
          <Link to={`/product/${_id}`}>
            <button className="flex items-center justify-center border p-1 rounded-md bg-amber-600 font-semibold text-white border-black border-b-black border-b-4">
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
