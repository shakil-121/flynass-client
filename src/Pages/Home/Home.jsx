import HeroSection from './HeroSection';
import WhatWeDo from './WhatWeDo/WhatWeDo';
import ChooseUs from './ChooseUs/ChooseUs';
import RequestAQuote from './RequestAQuote/RequestAQuote';
import Estimation from './Estimation/Estimation';
import Respect from './Respect/Respect';
import Support from './RequestAQuote/Support';
import CompanyApproch from './CompanyApproch/CompanyApproch';

const Home = () => {
    return (
        <div>
           <HeroSection></HeroSection>
           <WhatWeDo/>
           <ChooseUs/>  
           <Support></Support>
           <ChooseUs/> 
           {/* <Support></Support> */}
           <RequestAQuote/>
           <Estimation/>
           <Respect/>
           <CompanyApproch/>
        </div>
    );
};

export default Home;