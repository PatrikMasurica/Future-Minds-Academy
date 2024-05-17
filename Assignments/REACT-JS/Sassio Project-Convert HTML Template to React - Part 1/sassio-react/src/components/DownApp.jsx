import appleIcon from '../assets/images/icone_apple.png'
import androidIcon from '../assets/images/icone_android.png'
import twoPhones from '../assets/images/two-phones-bg.png'

export default function DownApp() {
    return (
        <div className="row down-app">
            <div className="col-1 text-left p-5 m-5">
                <button className="btn-primary speciale-1">START TODAY</button>
                <h1 className="display-4">Download the App</h1>
                <p className="paragraf-app">New features. New appearance. No risk and credit card required.</p>
                <div className="img-fixed">
                    <img src={appleIcon} alt="apple" className="apple" />
                </div>
                <div className="buttons">
                    <div className="button-container">
                        <img className="button-image" src={appleIcon} alt="Apple Image" />
                        <span className="seperator"></span>
                        <div className="button-text">
                            <span className="button-download">Download on the</span>
                            <span className="bold-text">Apple Store</span>
                        </div>
                    </div>
                    <div className="button-container">
                        <img className="button-image" src={androidIcon} alt="Apple Image" />
                        <span className="seperator"></span>
                        <div className="button-text">
                            <span className="button-download">Get it on</span>
                            <span className="bold-text">Google Play</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-1">
                <img src={twoPhones} className="img-end" />
            </div>
        </div>
    )
}