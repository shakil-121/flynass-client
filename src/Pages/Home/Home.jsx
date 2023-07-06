import HeroSection from './HeroSection';
import WhatWeDo from './WhatWeDo/WhatWeDo';
import ChooseUs from './ChooseUs/ChooseUs';
import RequestAQuote from './RequestAQuote/RequestAQuote';
import Estimation from './Estimation/Estimation';

const Home = () => {
    return (
        <div>
           <HeroSection></HeroSection>
           <WhatWeDo/>
           <ChooseUs/>
           <RequestAQuote/>
           <Estimation/>
        </div>
    );
};

export default Home;