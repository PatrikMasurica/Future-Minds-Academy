import appleIcon from '../assets/images/icone_apple.png';
import androidIcon from '../assets/images/icone_android.png'
import logo from '../assets/images/logo.png';
import phone from '../assets/images/phones.png';
import pattern from '../assets/images/pattern-bg.png'
import background from '../assets/images/bg.png';
import amazon from '../assets/images/amazon.png';
import amd from '../assets/images/amd.png';
import cisco from '../assets/images/cisco.png';
import logitech from '../assets/images/logitech.png';
import spotify from '../assets/images/spotify.png';
import dropcam from '../assets/images/dropcam.png';

export default function HomePage() {
    return (
        <div className="container-fixed">
            <header className="header row" id="top">
                <div className="col logo-col">
                    <img src={logo} alt="Your Image" />
                </div>
                <button className="btn-white duplicate">Join</button>
                <div className="hamburger" tabindex="0">
                    <span className="material-symbols-outlined">menu</span>
                    <div className="notification-down">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/portfolio">Portfolio</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li className="button"><a href="index.html">Get the App</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col navigation-col">
                    <a href="index.html">Home</a>
                    <a href="about.html">About Us</a>
                    <a href="services.html">Services</a>
                    <a href="portofolio.html">Portfolio</a>
                    <a href="contact.html">Contact Us</a>
                    <a href="blog.html">Blog</a>
                </div>
                <div className="col btn-primary">
                    <button className="btn-white">Join</button>
                    <button className="btn-black">Get the App</button>
                </div>
            </header>
            <div className="hero row">
                <div className="col text-left p-5 m-5 intro">
                    <button className="btn-primary speciale">On sale for a limited time</button>
                    <h1 className="display-1">Premium Startup & App</h1>
                    <h1 className="display-2"> Landing Page</h1>
                    <p className="hero-paragraf">Besides its beautiful design. Sassio is an incredibly rich core<br /> framework for
                        you to showcase your
                        App.
                    </p>

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
                <img src={background} alt="Background Image" className="bg-img" />
                <div className="col pictures">
                    <img src={phone} alt="Phones Image" className="img-fluid" />
                    <img src={pattern} alt="pattern" className="pattern-img" />
                </div>
            </div>
            <div className="trusted-by text-center p-4">
                <p>Trusted by the world’s best</p>
                <div className="row">
                    <div className="col m-5">
                        <img src={amazon} />
                    </div>
                    <div className="col m-5">
                        <img src={amd} />
                    </div>
                    <div className="col m-5">
                        <img src={cisco} />
                    </div>
                    <div className="col m-5">
                        <img src={dropcam} />
                    </div>
                    <div className="col m-5">
                        <img src={logitech} />
                    </div>
                    <div className="col m-5">
                        <img src={spotify} />
                    </div>
                </div>
            </div>

        </div>
    )
}