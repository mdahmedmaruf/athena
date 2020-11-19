import React from 'react';
import About from './About/About';
import Hero from './Hero/Hero';
import StayRunning from './StayRunning/StayRunning';

const HomePage = () => {
    return (
        <> 
            <Hero/>
            <StayRunning></StayRunning>
            <About/>
        </>
    );
};

export default HomePage;