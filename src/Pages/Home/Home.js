import React from 'react';
import About from './About';
import Banner from './Banner';
import CallContact from './CallContact';
import Service from './Service';

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Service/>
            <CallContact/>
        </div>
    );
};

export default Home;