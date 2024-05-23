import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Trusted from '../components/Trusted';
import WrapperFull from '../components/WrapperFull';
import PathToSucces from '../components/PathToSucces';
import PowerfulFeatures from '../components/PowerfulFeatures';
import CostumerSection from '../components/CostumerSection';
import PhoneTablet from '../components/PhoneTablet';
import AppScr from '../components/AppScr';
import SimplePricing from '../components/SimplePricing';
import Metrics from '../components/Metrics';
import FaqSection from '../components/FaqSection';
import DownApp from '../components/DownApp';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';


export default function Portfolio() {
    return (
        <div className="App">
            <div className='container-fixed'>
                <Nav />
                <Hero
                    btnDscp='On sale for a limited time'
                    title='Portfolio Startup & App'
                    secondTitle='Landing Page'
                    subtitle='Besides its beautiful design. Sassio is an incredibly rich core'
                    subtitleConcat=' framework for you to showcase your App.'
                    firstBtnTxt='Download on the'
                    firstBtnStore='Apple Store'
                    secondBtnTxt='Get it on'
                    secondBtnStore='Google Play'
                />

                <Trusted
                    title='Trusted by the world’s best'
                />
                <WrapperFull
                    btnDscp='SAFETY FIRST'
                    title="You're in a secure company"
                    firstOption="Real time activity"
                    firstSubtitle="Get instant insight on what's happening in your business."
                    secondSubtitle='It uses a dictionary of the over 200 Latin words,'

                />
                <PathToSucces
                    btnDscp='WE ARE YOUR ONLY'
                    title='Path to Success'
                    firstSubtitle='Mail Management'
                    secondSubtitle='Customers Tracking'
                    thirdSubtitle='Advanced Reporting'
                    description='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                    dscpNewLine='Amet 
          aut autem eum laudantium quas
          recusandae.'
                />
                <PowerfulFeatures
                    btnDscp='OUR FEARURES'
                    title='Powerful Features'
                    firstSubtitle='Theme Made Easy'
                    firstDscp='Our astonishing style structure makes your customization process a breeze'
                    secondSubtitle='Powerful Design'
                    secondDscp="With ready-to-use content you'll deploy your implementation in no time"
                    thirdSubtitle='Creative Contents'
                    thirdDscp='Repetitive styles all across the web? Nevermind that! Shine with unique styles'
                />
                <CostumerSection
                    btnDscp='EXPLORE NEW PLACES'
                    title='What our costumer says'
                    subtitle='Design Quality'
                    description='The template is really nice and offers quite a large set of options. It’s beautiful and the coding is
          done quickly and seamlessly. Thank you!'
                />
                <PhoneTablet />
                <Metrics
                    components='773'
                    downloads='1254'
                    followers='14941'
                    newUsers='1254'
                />
                <AppScr
                    title='App ScreenShot'
                />
                <SimplePricing
                    title='Simple Pricing'
                />
                <FaqSection
                    title='Frequently asked questions.'
                    description='When you buy Sassio, you get all you see in the demo but the images. We include SASS files for
          styling, complete JS files with comments, all HTML variations. Besides, we include all mobile
          PSD
          mockups.'
                />
                <DownApp
                    title='Download the App'
                    description='New features. New appearance. No risk and credit card required.'
                />
                <Footer />
                <ScrollToTop />
            </div>
        </div>

    )
}