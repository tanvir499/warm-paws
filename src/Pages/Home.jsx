import React from 'react';
import Slider from '../Component/Slider';
import PopularSection from '../Component/PopularSection';
import MeetOurVet from '../Component/MeetOurVet';

const Home = () => {
    return (
        <div>
           <Slider></Slider>
           <PopularSection></PopularSection>
           <MeetOurVet></MeetOurVet>
        </div>
    );
};

export default Home;