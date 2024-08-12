import Button from './components/Button.jsx'; // Make sure this path is correct
import ButtonGradient  from './assets/svg/ButtonGradient'
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Benefits from './components/Benefits.jsx';
import Services from './components/Services.jsx';
import Pricing from './components/Pricing.jsx';
import Footer from './components/Footer.jsx';
const App = () => {
  return (
    <>
      
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
       <Header/>
       <Hero/>
       <Benefits/>
       <Services/>
       <Pricing/>
       <Footer/>
      </div>
      <ButtonGradient />

    </>
  );
};

export default App;
