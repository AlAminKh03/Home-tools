import React, { useEffect, useState } from 'react';

const MakeAdmin = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => {
                setUsers(data)
            })
    })
    const makeAdmin = email => {
        console.log(email)
        fetch(`http://localhost:5000/user/makeadmin/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">

                <thead>
                    <tr>
                        <th>no</th>
                        <th>Email</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {users?.map((user, index) => <tr
                        key={user._id}>
                        <th>{index + 1}</th>
                        <td>{user.email}</td>
                        <td>
                            <button onClick={() => makeAdmin(user.email)}>Make admin</button>
                        </td>

                    </tr>)}

                </tbody>
            </table>
        </div>
    );
};

export default MakeAdmin;