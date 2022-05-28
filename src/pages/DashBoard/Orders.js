import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const Orders = () => {
    const [orders, setOrders] = useState([])
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    useEffect(() => {
        if (user) {
            console.log(user)
            const email = user.email
            console.log(email)
            fetch(`http://localhost:5000/orders/${email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res)
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth)
                        localStorage.removeItem('accessToken')
                        navigate('/')
                    }
                    return res.json()
                })
                .then(data => {
                    setOrders(data)
                })
        }
    }, [user, navigate])
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
                    {orders?.map((a, index) => <tr
                        key={a._id}>
                        <th>{index + 1}</th>
                        <td>{a.name}</td>
                        <td>{a.totalPrice}</td>
                        <td>{a.quantity}</td>
                    </tr>)}

                </tbody>
            </table>
        </div>
    );
};

export default Orders;