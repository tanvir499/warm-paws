import React from 'react';
import Slider from '../Component/Slider';
import PopularSection from '../Component/PopularSection';
import MeetOurVet from '../Component/MeetOurVet';
import WinterCareTips from '../Component/WinterCareTips';

const Home = () => {
    return (
        <div>
           <Slider></Slider>
           <PopularSection></PopularSection>
           <MeetOurVet></MeetOurVet>
           <WinterCareTips></WinterCareTips>
        </div>
    );
};

export default Home;