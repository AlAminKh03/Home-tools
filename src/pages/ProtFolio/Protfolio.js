import React from 'react';
import me from '../../assests/banner/20210211_1331544 (2).jpg'
const Protfolio = () => {

    return (
        <div className="card w-96 bg-base-100 shadow-xl flex justify-center">
            <figure className="px-10 pt-10">
                <img src={me} alt='Al Amin Khan ' className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Al Amin Khan</h2>
                <p>Front-end developer</p>
                <p>khanal6203@gmail.com</p>
                <p className='text-xl font-bold'>Eductaion:</p>
                <span>Bsc in ECE at Ahsanullah Institute of information and communication technology</span>

                <p className='text-xl font-bold'>Skills on:</p>
                <span>Html , CSS , Java Script, React, Express JS, Node JS ,Mongodb</span>
                <span></span>
                <p className='text-xl font-bold'>Theres three project that i've done in a while:</p>
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