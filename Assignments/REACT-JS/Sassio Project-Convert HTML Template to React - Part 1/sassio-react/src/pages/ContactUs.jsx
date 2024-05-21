
import FaqSection from '../components/FaqSection';
import DownApp from '../components/DownApp';


export default function ContacUs() {
    return (
        <div className="App">
            <div className='container-fixed'>


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

            </div>
        </div>

    )
}
