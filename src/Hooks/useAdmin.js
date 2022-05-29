import React, { useEffect, useState } from 'react';

const useAdmin = (user) => {
    const [admin, setAdmin] = useState()
    const [adminLoading, setAdminLoading] = useState(true)

    useEffect(() => {
        if (user) {
            fetch(`https://nameless-bayou-10593.herokuapp.com/user/admin/${user.email}`)
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