import React from 'react';
import shop from '../../assests/summary/shop.jpg'
import shipped from '../../assests/summary/shipped.jpg'
import review from '../../assests/summary/review.png'


const Stat = () => {
    return (
        <div>
            <h1 className='text-3xl text-primary m-4 font-bold'>Our Annual Summary</h1>
            <h3 className='text-2xl text-secondary mb-4 '>We run business on your trust</h3>
            <div class="stats shadow">

                <div class="stat">
                    <div class="stat-figure text-primary">
                        <div class="w-16 rounded-full">
                            <img src={shop} alt="" />
                        </div>
                    </div>
                    <div class="stat-title">Total Shop</div>
                    <div class="stat-value text-primary">2.5k</div>
                    <div class="stat-desc">21% more than last month</div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-secondary">
                        <div class="w-16 rounded-full">
                            <img src={shipped} alt="" />
                        </div>
                    </div>
                    <div class="stat-title">Products Shipped</div>
                    <div class="stat-value text-secondary">23.6M+</div>
                    <div class="stat-desc">21% more than last month</div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-secondary">
                        <div class="avatar online">
                            <div class="w-16 rounded-full">
                                <img src={review} alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="stat-value">86%</div>
                    <div class="stat-title">Tasks done</div>
                    <div class="stat-desc text-accent">31 tasks remaining</div>
                </div>

            </div>
        </div>
    );
};

export default Stat;