import React from 'react';
import kitchen from '../../assests/banner/kitchen.jpg'
const Extra = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={kitchen} alt="" class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">Chance to customise your kitchen</h1>
                    <p class="py-6">Buy more than $3000 and get a coupon to win a free installation and customization for your kitchen</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Extra;