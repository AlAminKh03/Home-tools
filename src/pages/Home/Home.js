import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Products from './Products';
import Reviews from './Reviews';
import Stat from './Stat';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <Stat></Stat>
            <Contact></Contact>
        </div>
    );
};

export default Home;