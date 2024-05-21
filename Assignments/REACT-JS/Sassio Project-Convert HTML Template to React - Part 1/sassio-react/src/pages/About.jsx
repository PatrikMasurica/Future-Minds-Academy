import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Trusted from '../components/Trusted';
import WrapperFull from '../components/WrapperFull';

export default function About() {
    return (
        <div className="App">
            <div className='container-fixed'>
                <Nav />
                <Hero
                    btnDscp='On sale for a limited time'
                    title='About Startup & App'
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



            </div>
        </div>

    )

}