import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Orders = () => {
    const [orders, setOrders] = useState([])
    const [user] = useAuthState(auth)
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/orders?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setOrders(data)
                })
        }
    }, [user])
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">

                <thead>
                    <tr>
                        <th>no</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Ordered(piece)</th>
                        <th>Transaction ID</th>
                        <th>Pay</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(a => <tr
                        key={a._id}>
                        <th>$</th>
                        <td>{a.name}</td>
                        <td></td>
                        <td>{a.quantity}</td>
                    </tr>)}

                </tbody>
            </table>
        </div>
    );
};

export default Orders;