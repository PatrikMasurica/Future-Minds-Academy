import logo from '../assets/images/logo.png';
import portofolioImg from '../assets/images/portofolio-img.png';
import fb from '../assets/images/fb.png';
import tw from '../assets/images/tw.png';
import ln from '../assets/images/ln.png';
import insta from '../assets/images/insta.png';

export default function PortfolioHtml() {
    return (
        <div className="container-fixed">
            <header className="header row" id="top">
                <div className="col logo-col">
                    <img src={logo} alt="Your Image" />
                </div>
                <button className="btn-white duplicate protofolio">Join</button>
                <div className="hamburger-portofolio" tabindex="0">
                    <span className="material-symbols-outlined">menu</span>
                    <div className="notification-down-portofolio">
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
            <div className="wrapper-md">
                <div className="row portofolio-intro">
                    <div className="col-1 text-center portofolio-info">
                        <h1 className="dark portofolio">Portfolio Showcase</h1>
                        <p className="portofolio-paragraf">With we want to optimize the customization process so your
                            team<br />can
                            save time when building websites.
                        </p>
                    </div>
                </div>
                <div className="row ">
                    <div className="col navigation-protofolio">
                        <a href="#">All Project</a>
                        <a href="#">E-commerce</a>
                        <a href="#">Digital Design</a>
                        <a href="#">Branding</a>
                        <a href="#">Web Design</a>
                    </div>
                </div>
                <div className="services-protofolio">
                    <div className="row protofolio">
                        <div className="col services-protofolio-info">
                            <img src={portofolioImg} alt="Project 1" />
                            <p>#marketing #design #development</p>
                            <h3>Billboard</h3>
                        </div>
                        <div className="col services-protofolio-info">
                            <img src={portofolioImg} alt="Project 1" />
                            <p>#marketing #design #development</p>
                            <h3>Creative Science</h3>
                        </div>
                        <div className="col services-protofolio-info">
                            <img src={portofolioImg} alt="Project 1" />
                            <p>#marketing #design #development</p>
                            <h3>Air Plane</h3>
                        </div>
                    </div>
                    <div className="row protofolio">
                        <div className="col services-protofolio-info">
                            <img src={portofolioImg} alt="Project 1" />
                            <p>#marketing #design #development</p>
                            <h3>Lewis Baker</h3>
                        </div>
                        <div className="col services-protofolio-info">
                            <img src={portofolioImg} alt="Project 1" />
                            <p>#marketing #design #development</p>
                            <h3>AG. Avent</h3>
                        </div>
                        <div className="col services-protofolio-info">
                            <img src={portofolioImg} alt="Project 1" />
                            <p>#marketing #design #development</p>
                            <h3>Virtual Payment</h3>
                        </div>
                    </div>
                    <div className="row protofolio">
                        <div className="col services-protofolio-info">
                            <img src={portofolioImg} alt="Project 1" />
                            <p>#marketing #design #development</p>
                            <h3>Fortune Art</h3>
                        </div>
                        <div className="col services-protofolio-info">
                            <img src={portofolioImg} alt="Project 1" />
                            <p>#marketing #design #development</p>
                            <h3>Good Food</h3>
                        </div>
                        <div className="col services-protofolio-info">
                            <img src={portofolioImg} alt="Project 1" />
                            <p>#marketing #design #development</p>
                            <h3>Enterprice Silver</h3>
                        </div>
                    </div>
                </div>
                <div className="launch-section-protofolio text-center">
                    <h1 className="display-1"> We help startups launch and succeed very fast</h1>
                    <p className="launch-text-protofolio">We appreciate your trust greatly! Our clients choose us and our
                        products because
                        they<br /> know we’re the
                        best.
                    </p>
                    <button className="pro-btn">GET STARTED</button><br />
                </div>
            </div>
            <footer className="footer-info-protofolio ">
                <div className="row">
                    <span className="left-side"> <p>Privacy & Cookie Policy | Terms of Service</p></span>
                    <span className="middle-side"> <p>© Copyright 2021. Sassio</p></span>
                    <span className="right-side">
                        <img src={fb} alt="" />
                        <img src={tw} alt="" />
                        <img src={insta} alt="" />
                        <img src={ln} alt="" />
                    </span>
                </div>
            </footer>
        </div>
    )
}