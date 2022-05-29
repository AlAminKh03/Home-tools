import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const DashBoard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    // console.log(admin)
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <h2 className='text-3xl font-bold'>Dashboard</h2>
                <Outlet></Outlet>


            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">Profile</Link></li>

                    {admin ? <>
                        <li><Link to="/dashboard/makeadmin">Make admin</Link></li>
                        <li><Link to="/dashboard/manageorder">Manage Orders</Link></li>
                        <li><Link to="/dashboard/addproduct">Add Product</Link></li>
                        <li><Link to="/dashboard/manageProduct">Manage Product</Link></li>

                    </> :
                        <>
                            <li><Link to="/dashboard/orders">Orders</Link></li>
                            <li><Link to="/dashboard/review">Add a review</Link></li></>
                    }
                </ul>

            </div>
        </div >
    );
};

export default DashBoard;