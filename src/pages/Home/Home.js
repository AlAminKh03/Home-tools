import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Extra from './Extra';
import Products from './Products';
import Reviews from './Reviews';
import Stat from './Stat';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <Extra></Extra>
            <Stat></Stat>
            <Contact></Contact>
        </div>
    );
};

export default Home;