import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import UseProductdetail from '../../Hooks/UseProductdetail';

const ProductDetails = () => {
    const { productId } = useParams()
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [product, setProduct] = UseProductdetail(productId)
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>

                    </label>
                    <input type="name" placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name")} />

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>

                        </label>
                        <input type="name" placeholder="Your Name"
                            className="input input-bordered w-full max-w-xs"
                            {...register("name")} />

                    </div>
            </form>
        </div>
    );
};

export default ProductDetails;