import React from 'react';

const Protfolio = () => {

    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">Al Amin Khan</h2>
                <p>Front-end developer</p>
                <p>khanal6203@gmail.com</p>
                <p>Edictaion:<span>Bsc in ECE at Ahsanullah Institute of information and communication technology</span></p>
                <p>Theres three project that i've done in a while:</p>
                <ul>
                    <li> https://sports-gear-11.web.app/</li>
                    <li>  https://sishir-bindu-travel.web.app/</li>
                    <li>  https://singular-cuchufli-ed3674.netlify.app/</li>
                </ul>
            </div>
        </div>
    );
};

export default Protfolio;