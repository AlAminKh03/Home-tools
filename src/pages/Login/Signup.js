import React, { useEffect } from 'react';
import { useSignInWithGoogle, useSignInWithEmailAndPassword, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import auth from '../../firebase.init';

const Signup = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    let signInErrorMessage;
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || '/'

    // const [token] = useToken(user || gUser)
    // console.log('this is user', user)
    // useEffect(() => {
    //     if (token) {
    //         navigate(from, { replace: true })
    //     }

    // }, [token, from, navigate])


    if (loading || gLoading) {
        return <Loading></Loading>
    }
    if (error || gError) {
        signInErrorMessage = <p className='text-red-500'>{error?.message || gError?.message || updateError?.message}</p>
    }
    if (user || gUser) {
        console.log(user || gUser)
    }
    const onSubmit = async data => {

        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });
        // navigate('/appointments')
        console.log("updated")
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Please Sign Up</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* for email  */}


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>

                            </label>
                            <input
                                type="name"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    }
                                })} />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label text alt text-red-500">{errors.name.message}</span>}

                            </label>
                            <label className="label">
                                <span className="label-text">Email</span>

                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'email is required'
                                    }
                                })} />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label text alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label text alt text-red-500">{errors.email.message}</span>}
                            </label>


                            {/* for password */}

                            <label className="label">
                                <span className="label-text">Password</span>

                            </label>
                            <input
                                type="password"
                                placeholder="Your password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'must be 6 characters or longer'
                                    }
                                })} />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label text alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label text alt text-red-500">{errors.password.message}</span>}

                            </label>
                        </div>
                        <p>{signInErrorMessage}</p>


                        <input className='btn w-full max-w-xs' type="submit"
                            value='signup' />
                    </form>

                    <p>Already have an account?? <Link className='text-primary' to='/login'>Login</Link> </p>

                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline btn-info"
                    >Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;