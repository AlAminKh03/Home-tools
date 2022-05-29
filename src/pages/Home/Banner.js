import React from 'react';
import home from '../../assests/banner/home-tools.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-white">
            < div className="hero-content flex-col lg:flex-row-reverse" >
                <img src={home} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-3xl font-bold">Deal your Home depot business!!</h1>
                    <p className="py-6" > Build your business from here, Most Authentic and Original tools provider, Running this city since 2011</p >
                    <button className="btn btn-primary" > Get Started</button >
                </div >
            </div >
        </div >
    );
};

export default Banner;