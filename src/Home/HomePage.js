import React from 'react';
import About from './About/About';
import Footer from './Footer/Footer';
import Hero from './Hero/Hero';
import Packages from './Packages/Packages';

const HomePage = () => {
    return (
        <>
            <Hero/>
            <About/>
            <Packages/>
            <Footer/>
        </>
    );
};

export default HomePage;