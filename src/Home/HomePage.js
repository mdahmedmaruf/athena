import React from 'react';
import About from './About/About';
import Achievements from './Achievements/Achievements';
import Hero from './Hero/Hero';
import Packages from './Packages/Packages';
import StayRunning from './StayRunning/StayRunning';

const HomePage = () => {
    return (
        <>
            <Hero/>
            <About/>
            <StayRunning/>
            <Achievements/>
            <Packages/>
        </>
    );
};

export default HomePage;