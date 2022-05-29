import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth)

    const handleSubmitButton = e => {
        e.preventDefault()
        const name = e.target.name.value
        const rating = e.target.rating.value
        const review = e.target.description.value

        const comment = {
            name: name,
            rating: rating,
            review: review,
            img: 'https://api.lorem.space/image/face?hash=3174'
        }
        fetch('http://localhost:5000/reviews', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(comment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Comment Submitted')
            })
    }
    return (
        <div>
            <form onSubmit={handleSubmitButton} >
                <div className='m-6'>
                    <label className='px-6'>Name:</label>
                    <input className='input input-bordered input-md w-full max-w-xs' type="text" name='name' value={user.displayName} disabled />
                </div>
                <div className='m-6'>
                    <label className='px-6'>Rating:</label>
                    <select class="select w-full max-w-xs" name='rating'>
                        <option disabled selected>click to give rating</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div className='m-6'>
                    <label className='px-6'>Comment:</label>
                    <input name='description' className='input input-bordered input-md w-full max-w-xs' type="textarea" />
                </div>

                <div>
                    <button className='btn btn-primary' type='submit'>submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddReview;