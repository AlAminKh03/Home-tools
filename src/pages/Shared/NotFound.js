import React from 'react';
import waste from '../../assests/banner/waste-house.jpg'

const NotFound = () => {
    return (
        <div className='m-10 flex'>
            <div className=' justify-center'>
                <img className='w-96 justify-center' src={waste} alt="" />
            </div>
            <div className='items-center ml-20 mt-24'>
                <h1 className='text-3xl font-bold'>404!! </h1>
                <p>Opps Looks like you path has gone wrong</p></div>
        </div>
    );
};

export default NotFound;