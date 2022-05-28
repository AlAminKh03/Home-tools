import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const myOrders = () => {
    const [orders, setOrders] = useState([])
    const [user] = useAuthState(auth)
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`)
    }, [])
    return (
        <div>
            <h1>this is my order</h1>
        </div>
    );
};

export default myOrders;