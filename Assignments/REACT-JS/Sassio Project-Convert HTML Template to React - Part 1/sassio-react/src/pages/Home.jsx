import Nav from '../components/Nav';
import Hero from '../components/Hero';


export default function Home() {
    return (
        <div className="App">
            <div className='container-fixed'>
                <Nav />
                <Hero
                    btnDscp='On sale for a limited time'
                    title='Premium Startup & App'
                    secondTitle='Landing Page'
                    subtitle='Besides its beautiful design. Sassio is an incredibly rich core'
                    subtitleConcat=' framework for you to showcase your App.'
                    firstBtnTxt='Download on the'
                    firstBtnStore='Apple Store'
                    secondBtnTxt='Get it on'
                    secondBtnStore='Google Play'
                />


            </div>
        </div>

    )
}
