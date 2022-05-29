import React from 'react';
import shop from '../../assests/summary/shop.jpg'
import shipped from '../../assests/summary/shipped.jpg'
import review from '../../assests/summary/review.png'


const Stat = () => {
    return (
        <div>
            <h1 className='text-3xl text-primary m-4 font-bold'>Our Annual Summary</h1>
            <h3 className='text-2xl text-secondary mb-4 '>We run business on your trust</h3>
            <div className="stats shadow lg:grid-cols-1 grid-cols-3">

                <div className="stat">
                    <div className="stat-figure text-primary">
                        <div className="w-16 rounded-full">
                            <img src={shop} alt="" />
                        </div>
                    </div >
                    <div className="stat-title" > Total Shop</div >
                    <div className="stat-value text-primary" > 2.5k</div >
                    <div className="stat-desc" > 21 % more than last month</div >
                </div >

                <div className="stat" >
                    <div className="stat-figure text-secondary" >
                        <div className="w-16 rounded-full" >
                            <img src={shipped} alt="" />
                        </div >
                    </div >
                    <div className="stat-title" > Products Shipped</div >
                    <div className="stat-value text-secondary" > 23.6M +</div >
                    <div className="stat-desc" > 21 % more than last month</div >
                </div >

                <div className="stat" >
                    <div className="stat-figure text-secondary" >
                        <div className="avatar online" >
                            <div className="w-16 rounded-full" >
                                <img src={review} alt="" />
                            </div >
                        </div >
                    </div >
                    <div className="stat-value" > 86 %</div >
                    <div className="stat-title" > Tasks done</div >
                    <div className="stat-desc text-accent" > 31 tasks remaining</div >
                </div >

            </div >
        </div >
    );
};

export default Stat;