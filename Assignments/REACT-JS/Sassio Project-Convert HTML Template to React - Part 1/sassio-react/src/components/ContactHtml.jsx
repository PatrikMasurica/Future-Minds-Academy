import logo from '../assets/images/logo.png';
import background from '../assets/images/bg.png';
import contact from '../assets/images/contact-llpt-pic.png';
import fb from '../assets/images/fb.png';
import tw from '../assets/images/tw.png';
import ln from '../assets/images/ln.png';
import insta from '../assets/images/insta.png';

export default function ContactHtml() {
    return (
        <div className="container-fixed wrapper-full  contact-page">
            <div className="contact-us">
                <header className="header wrapper-lg row contact" id="top">
                    <div className="col logo-col">
                        <img src={logo} alt="Your Image" className="img-logo" />
                    </div>
                    <button className="btn-white duplicate contact">Join</button>
                    <div className="hamburger-contact" tabindex="0">
                        <span className="material-symbols-outlined">menu</span>
                        <div className="notification-down-contact">
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
                        <a href="/portfolio">Portfolio</a>
                        <a href="/contact">Contact Us</a>
                        <a href="/blog">Blog</a>
                    </div>
                    <div className="col btn-primary">
                        <button className="btn-white">Join</button>
                        <button className="btn-black">Get the App</button>
                    </div>
                </header>
                <div className="wrapper-lg text-center hero-contact">
                    <div className="contact-section">
                        <img src={background} alt="Background Image" className="bg-img contact" />
                        <h1 className="dark contact">Contact us</h1>
                        <br />
                        <p className="contact-text">
                            With we want to optimize the customization process so your team can save time<br /> when building
                            websites.
                        </p>
                    </div>
                </div>
                <div className="contact wrapper-md">
                    <div className="row contact-intro text-center">
                        <div className="col-1 contact-info">
                            <h3>London</h3>
                            <p>328 Queensberry Street, North Melbourne VIC 3051, Australia.</p>
                            <p className="dark">+(1) 123 456 7890</p>
                            <p>hi@sassio.com</p>
                            <a href="">
                                <p>Open Google Map</p>
                            </a>
                        </div>
                        <div className="divider"></div>
                        <div className="col-1 contact-info">
                            <h3>New York</h3>
                            <p>328 Queensberry Street, North Melbourne VIC 3051, Australia.</p>
                            <p className="dark"> +(1) 123 456 7890</p>
                            <p>hi@sassio.com</p>
                            <a href="">
                                <p>Open Google Map</p>
                            </a>
                        </div>
                        <div className="divider"></div>
                        <div className="col-1 contact-info">
                            <h3>Istanbul</h3>
                            <p>328 Queensberry Street, North Melbourne VIC 3051, Australia.</p>
                            <p className="dark">+(1) 123 456 7890</p>
                            <p>hi@sassio.com</p>
                            <a href="">
                                <p>Open Google Map</p>
                            </a>
                        </div>
                    </div>
                    <div className="contact-form">
                        <div className="text-contact text-center">
                            <button className="speciale contact-us">Message</button>
                            <h1 className="dark">Tell us about yourself</h1>
                        </div>
                        <div className="container">
                            <form action="#">
                                <div className="form-row">
                                    <div className="input-data">
                                        <input type="text" required />
                                        <div className="underline"></div>
                                        <label for="">Full Name</label>
                                    </div>
                                    <div className="input-data">
                                        <input type="text" required />
                                        <div className="underline"></div>
                                        <label for="">Your Email Adress</label>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="input-data">
                                        <input type="text" required />
                                        <div className="underline"></div>
                                        <label for="">Your Subject</label>
                                    </div>
                                    <div className="input-data">
                                        <input type="text" required />
                                        <div className="underline"></div>
                                        <label for="">Phone Number</label>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="input-data textarea">
                                        <textarea rows="20" cols="180" required></textarea>
                                        <br />
                                        <div className="underline"></div>
                                        <label for="">Message</label>
                                        <br />
                                    </div>
                                </div>
                                <div className="bottom-part">
                                    <div className="input-check">
                                        <input type="checkbox" name="" id="" />
                                        <label>I am bound by the terms of the Service I accept Privacy Policy.</label>
                                    </div>
                                    <button className="pro-btn contact-us">Send your message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3 map-pic">
                            <iframe
                                className="iframe-map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46940.16392808568!2d21.11752767997125!3d42.66643583189325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549ee605110927%3A0x9365bfdf385eb95a!2sPristina!5e0!3m2!1sen!2s!4v1711409851264!5m2!1sen!2s"
                                style={{ border: 'none' }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>

                    <div className="row end">
                        <div className="col-1 text-center">
                            <img src={contact} />
                            <h3 className="dark">Sales Suport</h3>
                            <p>
                                Looking for a custom quote? need to tell us more about your project? or want a
                                demonstration?
                                drop us a line to <a href="contact@sassio.com">contact@sassio.com</a>
                            </p>
                        </div>
                        <div className="divider"></div>
                        <div className="col-1 text-center">
                            <img src={contact} />
                            <h3 className="dark">Technical Support</h3>
                            <p>
                                Looking for a custom quote? need to tell us more about your project? or want a
                                demonstration?
                                drop us a line to <a href="contact@sassio.com">contact@sassio.com</a>
                            </p>
                        </div>
                    </div>
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
        </div>
    )
}