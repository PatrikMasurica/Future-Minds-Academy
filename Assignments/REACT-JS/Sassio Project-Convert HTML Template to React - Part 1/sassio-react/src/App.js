import './assets/css/fma-general.css';
import './assets/css/fma-responsive.css';
import './assets/css/style.css';
import './assets/css/style-responsive.css'
import Nav from './components/Nav';
import Hero from './components/Hero';
import Trusted from './components/Trusted';
import WrapperFull from './components/WrapperFull';
import PathToSucces from './components/PathToSucces';
import PowerfulFeatures from './components/PowerfulFeatures';
import CostumerSection from './components/CostumerSection';
import PhoneTablet from './components/PhoneTablet';
import AppScr from './components/AppScr';
import SimplePricing from './components/SimplePricing';
import Metrics from './components/Metrics';
import FaqSection from './components/FaqSection';
import DownApp from './components/DownApp';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Trusted />
      <WrapperFull />
      <PathToSucces />
      <PowerfulFeatures />
      <CostumerSection />
      <PhoneTablet />
      <Metrics />
      <AppScr />
      <SimplePricing />
      <FaqSection />
      <DownApp />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
