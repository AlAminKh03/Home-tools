import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const AddProduct = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)
        const url = 'https://nameless-bayou-10593.herokuapp.com/products'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                toast.success('Product added successfully')
            })
    }
    return (

        <div>
            <h2 className='text-2xl text-primary'>Please add a tool</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div>
                    <input placeholder=' Name' className='input input-bordered input-md w-full max-w-xs' {...register("name", { required: true, maxLength: 20 })} />
                </div>
                <div>
                    <input placeholder=' Price' className='input input-bordered input-md w-full max-w-xs' type="number" {...register("price", { required: true })} />
                </div>
                <div>
                    <input placeholder=' Minimum order' className='input input-bordered input-md w-full max-w-xs' type="number" {...register("minimumOrder")} />
                </div>
                <div>
                    <input placeholder=' Available' className='input input-bordered input-md w-full max-w-xs' type="number" {...register("available")} />
                </div>

                <div>
                    <textarea placeholder=' Description' className='input input-bordered input-md w-full max-w-xs' {...register("description")} />
                </div>
                <div>
                    <input placeholder=' Photo Url' className='input input-bordered input-md w-full max-w-xs' type="text" {...register("img")} />
                </div>
                <input className='btn w-full max-w-xs' type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddProduct;