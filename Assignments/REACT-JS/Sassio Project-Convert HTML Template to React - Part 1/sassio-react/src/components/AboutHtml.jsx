import sketch from '../assets/images/sketch.png';
import logo from '../assets/images/logo.png';
import background from '../assets/images/bg.png';
import color from '../assets/images/color.png';
import double from '../assets/images/double.png';
import timer from '../assets/images/timer.png';
import cloudStorage from '../assets/images/cloud-storage.png';
import touch from '../assets/images/touch.png';
import pen from '../assets/images/pen-tool.png'
import person from '../assets/images/person.png';
import amazon from '../assets/images/amazon.png';
import amd from '../assets/images/amd.png';
import cisco from '../assets/images/cisco.png';
import logitech from '../assets/images/logitech.png';
import spotify from '../assets/images/spotify.png';
import dropcam from '../assets/images/dropcam.png';
import fb from '../assets/images/fb.png';
import tw from '../assets/images/tw.png';
import ln from '../assets/images/ln.png';
import insta from '../assets/images/insta.png';

export default function AboutHtml() {
    return (
        <div className="container-fluid wrapper-full about">
            <header className="header wrapper-xl row" id="top">
                <div className="col logo-col">
                    <img src={logo} alt="Your" />
                </div>
                <button className="btn-white duplicate">Join</button>
                <div className="hamburger-about" tabindex="0">
                    <span className="material-symbols-outlined">menu</span>
                    <div className="notification-down-about">
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
                    <a href="/">Home</a>
                    <a href="/about">About Us</a>
                    <a href="/services">Services</a>
                    <a href="/portofolio">Portfolio</a>
                    <a href="/contact">Contact Us</a>
                    <a href="/blog">Blog</a>
                </div>
                <div className="col btn-primary">
                    <button className="btn-white">Join</button>
                    <button className="btn-black">Get the App</button>
                </div>
            </header>
            <div className="wrapper-xl text-center">
                <div className="about-section">
                    <img src={background} alt="Background Image" className="bg-img about" />
                    <h1 className="dark">About us</h1>
                    <br />
                    <p>
                        With we want to optimize the customization process so your team
                        <br />
                        save time when building websites.
                    </p>
                </div>
            </div>
            <div className="wrapper-md text-center">
                <div className="row">
                    <div className="col-1 company-section about">
                        <button className="speciale btn-classic">ABOUT COMPANY</button>
                        <h1 className="display-1 company-info title">All services for your online presence</h1>
                        <p className="company-info">
                            Since 2017, we have led innovation and new product delivery <br /> in
                            business startup services delivered online.
                        </p>
                        <div className="row">
                            <div className="col-5 m-1">
                                <div className="back-pink p-1">
                                    <img src={sketch} alt="sketch" />
                                </div>
                            </div>
                            <div className="col-5 missions">
                                <h3 className="dark">Our Mission</h3>
                                <p className="company-paragraf">We have all the business products in one place so <br /> you can focus on
                                    what you do best.</p>
                            </div>
                        </div><br />
                        <div className="row">
                            <div className="col-5 m-1">
                                <div className="back-blue p-1">
                                    <img src={color} alt="sketch" />
                                </div>
                            </div>
                            <div className="col-5 missions">
                                <h3 className="dark">Our Vission</h3>
                                <p className="company-paragraf">We have all the business products in one place so <br /> you can focus on
                                    what you do best.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <img src={double} alt="images of missions" className="img-missions" />
                    </div>
                </div>
            </div>

            <div className="wrapper-md metrics-section about">
                <div className="row metrics m-3">
                    <div className="col components">
                        <h1>773</h1>
                        <p>Components</p>
                    </div>
                    <div className="col downloads">
                        <h1>1254</h1>
                        <p>Downloads</p>
                    </div>
                    <div className="col followers">
                        <h1>14941</h1>
                        <p>Followers</p>
                    </div>
                    <div className="col users">
                        <h1>1254</h1>
                        <p>New User</p>
                    </div>
                </div>
            </div>
            <div className="wrapper-xl development-section about">
                <button className="speciale-1 head-tag">WHAT WE DO</button>
                <h1 className="text-center">We develop & create digital future.</h1><br />
                <div className="secure-section">
                    <div className="row all-shadow development-info">
                        <div className="col-5 m-2 p-2">
                            <img src={timer} alt="timer-picture" />
                        </div>
                        <span className="col-5 m-1 text-left">
                            <h3 className="dark">Real time activity</h3><br />
                            <p>
                                Get instant insight on what's happening in your business.<br /> It uses a dictionary of the over 200
                                Latin words,
                            </p>
                        </span>
                    </div>
                    <div className="row all-shadow development-info">
                        <div className="col-5  m-2 p-2">
                            <img src={cloudStorage} alt="cloud-storage" />
                        </div>
                        <span className="col-5 m-1 text-left">
                            <h3 className="dark">Instant deploy</h3><br />
                            <p>
                                Deploy your project in a fraction of a second, no time!<br /> It uses a dictionary of the over 200
                                Latin
                                words,
                            </p>
                        </span>
                    </div>
                    <div className="row all-shadow development-info">
                        <div className="col-5  m-2 p-2">
                            <img src={touch} alt="touch-screen" />
                        </div>
                        <span className="col-5 m-1 text-left">
                            <h3 className="dark">Easy integrations</h3><br />
                            <p>
                                Integrate our solution with other tech leaders in the<br /> industry. It uses a dictionary of the
                                over
                                200 Latin words,.
                            </p>
                        </span>
                    </div>
                    <div className="row all-shadow development-info">
                        <div className="col-5  m-2 p-2">
                            <img src={pen} alt="pen-tool" />
                        </div>
                        <span className="col-5 m-1 text-left">
                            <h3 className="dark">Perfect UI/UX</h3><br />
                            <p>
                                Get instant insight on what's happening in your business.<br /> It uses a dictionary of the over 200
                                Latin words,
                            </p>
                        </span>
                    </div>
                </div>
            </div>
            <div className="wrapper-md about-costumer">
                <div className="row m-10 gap-9 costumer-section about">
                    <div className="col-1 inside">
                        <button className="speciale-1">EXPLORE NEW PLACES</button>
                        <h2 className="costumer-header">What our costumer says</h2>
                    </div>
                    <div className="col-1 info">
                        <h4>Design Quality</h4><br />
                        <p>The template is really nice and offers quite a large set of options. It’s beautiful and the coding is
                            done quickly and seamlessly. Thank you!
                        </p><br />
                        <h4>Devon Lane</h4>
                        <p>Team Leader, Paypal</p>
                    </div>
                    <div className="col-1 info">
                        <h4>Design Quality</h4><br />
                        <p>The template is really nice and offers quite a large set of options. It’s beautiful and the coding is
                            done quickly and seamlessly. Thank you!
                        </p><br />
                        <h4>Theresa Webb</h4>
                        <p>Softwer Tester, Envato</p>
                    </div>
                </div>
                <div className="row m-5">
                    <div className="arrows about">
                        <span className="material-symbols-outlined arrow west">west</span>
                        <span className="material-symbols-outlined arrow east">east</span>
                    </div>
                </div>
            </div>
            <div className="wrapper-lg creative">
                <button className="speciale-1 team-tag">TEAM</button>
                <h1 className="creative-header">We develop & create digital future.</h1><br />
                <div className="row middle">
                    <div className="creative-section">
                        <div className=" persons-info">
                            <div className="persons-img">
                                <img src={person} />
                            </div>
                            <div className="person-details">
                                <p className="dark">Albert Flores</p>
                                <p>President of Sales</p>
                            </div>
                        </div>
                        <div className=" persons-info">
                            <div className="persons-img">
                                <img src={person} />
                            </div>
                            <div className="person-details">
                                <p className="dark">Albert Flores</p>
                                <p>President of Sales</p>
                            </div>
                        </div>
                        <div className=" persons-info">
                            <div className="persons-img">
                                <img src={person} />
                            </div>
                            <div className="person-details">
                                <p className="dark">Albert Flores</p>
                                <p>President of Sales</p>
                            </div>
                        </div>
                        <div className=" persons-info">
                            <div className="persons-img">
                                <img src={person} />
                            </div>
                            <div className="person-details">
                                <p className="dark">Albert Flores</p>
                                <p>President of Sales</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bullet-container">
                    <div className="bullet"></div>
                    <div className="bullet"></div>
                    <div className="bullet"></div>
                    <div className="bullet"></div>
                    <div className="bullet"></div>
                </div>
            </div>
            <div className="wrapper-lg brands-section about">
                <button className="speciale-1 team-tag">PARTNERS</button>
                <h1 className="creative-header">We work with the best brands</h1><br />
                <div className="row brands">
                    <div className="col-end m-5">
                        <img src={amazon} />
                    </div>
                    <div className="col-end m-5">
                        <img src={amd} />
                    </div>
                    <div className="col-end m-5">
                        <img src={cisco} />
                    </div>
                    <div className="col-end m-5">
                        <img src={dropcam} />
                    </div>
                    <div className="col-end m-5">
                        <img src={logitech} />
                    </div>
                    <div className="col-end m-5">
                        <img src={spotify} />
                    </div>
                </div>
            </div>
            <div className="wrapper-lg">

                <footer className="footer-info-protofolio ">
                    <div className="row">
                        <span className="left-side">
                            <p>Privacy & Cookie Policy | Terms of Service</p>
                        </span>
                        <span className="middle-side">
                            <p>© Copyright 2021. Sassio</p>
                        </span>
                        <span className="right-side">
                            <img src={fb} alt="" />
                            <img src={tw} alt="" />
                            <img src={insta} alt="" />
                            <img src={ln} alt="" />
                        </span>
                    </div>
                </footer>
            </div>


        </div>
    )
}