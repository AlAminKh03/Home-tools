import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <div>
                <label>Name:</label>
                <input type="text" />
            </div>
            <div>
                <label>Name:</label>
                <input type="text" />
            </div>
            <div>
                <label>Description:</label>
                <input type="text" />
            </div>
        </div>
    );
};

export default AddReview;