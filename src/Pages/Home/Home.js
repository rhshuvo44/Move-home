import React from 'react';
import About from './About';
import Banner from './Banner';
import CallContact from './CallContact';
import Question from './Question';
import Service from './Service';

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Service/>
            <CallContact/>
            <Question/>
        </div>
    );
};

export default Home;