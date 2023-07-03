import React from 'react';
import HeroSection from './HeroSection';
import WhatWeDo from './WhatWeDo/WhatWeDo';
import ChooseUs from './ChooseUs/ChooseUs';

const Home = () => {
    return (
        <div>
           <HeroSection></HeroSection>
           <WhatWeDo/>
           <ChooseUs/>
        </div>
    );
};

export default Home;