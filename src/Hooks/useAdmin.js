import React, { useEffect, useState } from 'react';

const useAdmin = (user) => {
    const [admin, setAdmin] = useState()
    const [adminLoading, setAdminLoading] = useState(true)

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/user/admin/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    setAdmin(data.admin)
                    setAdminLoading(false)
                })
        }

    }, [user])
    return [admin, adminLoading]
};

export default useAdmin;