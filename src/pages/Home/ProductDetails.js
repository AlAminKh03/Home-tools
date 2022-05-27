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
        <div>
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
            </form>
            <div>
                {product.name}
            </div>

        </div>
    );
};

export default ProductDetails;