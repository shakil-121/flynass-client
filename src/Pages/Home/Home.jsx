import HeroSection from './HeroSection';
import WhatWeDo from './WhatWeDo/WhatWeDo';
import ChooseUs from './ChooseUs/ChooseUs';
import RequestAQuote from './RequestAQuote/RequestAQuote';

const Home = () => {
    return (
        <div>
           <HeroSection></HeroSection>
           <WhatWeDo/>
           <ChooseUs/>
           <RequestAQuote/>
        </div>
    );
};

export default Home;