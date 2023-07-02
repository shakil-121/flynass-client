import React from 'react';
import HomeBanner from './HomeBanner/HomeBanner';
import WhatWeDo from './WhatWeDo/WhatWeDo';
import ChooseUs from './ChooseUs/ChooseUs';

const Home = () => {
    return (
        <div>
            <HomeBanner/>
            <WhatWeDo/>
            <ChooseUs/>
        </div>
    );
};

export default Home;