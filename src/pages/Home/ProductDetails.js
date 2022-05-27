import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import UseProductdetail from '../../Hooks/UseProductdetail';
import Loading from '../Shared/Loading';

const ProductDetails = () => {
    const { productId } = useParams()

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [user, loading, error] = useAuthState(auth);
    const [product, setProduct] = UseProductdetail(productId)

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 mb-10'>
            <div className='items-center mt-16'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img className='w-56' src={product.img} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            {product.name}

                        </h2>
                        <p>{product.description}</p>
                        <div class="card-actions justify-end">
                            <div class="badge badge-outline">Price:{product.price}</div>
                            <div class="badge badge-outline">Available:{product.available}</div>
                        </div>
                    </div>
                </div>
            </div>
            <form>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>

                    </label>
                    <input type="name" value={user.displayName}
                        className="input input-bordered w-full max-w-xs"
                    // {...register("name")} 
                    />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>

                    </label>
                    <input type="name" value={user.email}
                        className="input input-bordered w-full max-w-xs"
                    // {...register("name")} 
                    />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product Quantity</span>

                    </label>
                    <input type="number"
                        className="input input-bordered w-full max-w-xs"
                        {...register("number",

                            {
                                required: {
                                    value: true,
                                    message: 'quantity is required'
                                },
                                minLength: {
                                    value: 3,
                                    message: 'minimum order quantity 100'
                                }
                            })} />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Phone Number</span>
                    </label>
                    <input type='number' className="input input-bordered w-full max-w-xs" {...register("phone number", { required: true })} />
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Location</span>

                    </label>
                    <input type='text' className="input input-bordered w-full max-w-xs" {...register("phone number", { required: true })} />
                </div>

                <div className='form-control w-full max-w-xs mt-5'> <input className='btn w-50 max-w-xs' type="submit"
                    value='Purchase' /></div>
            </form>


        </div>
    );
};

export default ProductDetails;