import React from 'react';
import About from './About/About';

import Footer from './Footer/Footer';

import Packages from './Packages/Packages';

import Achievements from './Achievements/Achievements';
import Hero from './Hero/Hero';
import StayRunning from './StayRunning/StayRunning';


const HomePage = () => {
    return (
        <>
            <Hero/>
            <About/>

            <Packages/>
            <Footer/>

            <StayRunning></StayRunning>
            <Achievements></Achievements>

        </>
    );
};

export default HomePage;