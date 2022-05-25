import React from 'react';
import home from '../../assests/banner/home-tools.jpg'

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-white">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={home} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 class="text-3xl font-bold">Deal your Home depot business!!</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;