import '../css/portfolio.css';

export default function PortfolioHtml() {
    return (
        <div className="container-fixed container-res">
            <header className="row align-center">
                <div className="col">
                    <nav className="navbar gap-2">
                        <img src="assets/images/logo.svg" alt="Around-Logo" className="navbar-logo" />
                        <ul className="navbar-menu remove-tablet">
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About us</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/portfolio" className="active">Portfolio</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/blog-details">Blog Details</a></li>
                            <li><a href="/contact">Contact us</a></li>
                        </ul>
                        <div className="navbar-button remove-tablet">
                            <img src="assets/images/sun.png" alt="" />
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>
                            </label>
                            <img src="assets/images/moon.png" alt="" />
                            <button className="normal-btn case-btn">Contact us</button>
                        </div>
                        <div className="nav-burger block-tablet">
                            <span className="material-icons" id="menu-icon">menu</span>
                        </div>

                    </nav>
                </div>
            </header >
            <div className="sidebar" id="sidebar">
                <div className="navbar-vertical">
                    <div>
                        <img src="assets/images/logo.svg" alt="Around-Logo" className="sidebar-logo" />
                        <ul className="sidebar-menu">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about-us.html">About us</a></li>
                            <li><a href="services.html">Services</a></li>
                            <li><a href="portfolio.html" className="active">Portfolio</a></li>
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="blog-details.html">Blog Details</a></li>
                            <li><a href="contact-us.html">Contact us</a></li>
                        </ul>
                    </div>
                    <div className="sidebar-toogle">
                        <img src="assets/images/sun.png" alt="" />
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider"></span>
                        </label>
                        <img src="assets/images/moon.png" alt="" />
                    </div>
                    <button className="sidebar-btn nav-btn">Contact us</button>
                </div>
            </div>
            <div className="container-fixed container-res">
                <div className="links">
                    <span>Homepage</span><span></span><span className="active">Portfolio</span>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="portfolio-content">
                            <div className="portfolio-section">
                                <div className="portfolio-card">
                                    <div className="section-logo">
                                        <img src="assets/images/portfolio-champion-logo-1.svg" alt="logo" />
                                    </div>
                                    <h1>An application for a national bank</h1>
                                    <p>Non purus odio venenatis velit sed tellus sed ultrices neque adipiscing sit turpis vel
                                        nisl lacus,
                                        aenean sed luctus adipiscing ut orci molestie arcu, sapien sed felis.
                                    </p>
                                    <hr />
                                </div>
                                <div className="card">
                                    <div className="card-items">
                                        <span className="card-item">100+</span>
                                        <span className="card-subtitle">leads for $ 2.1</span>
                                    </div>
                                    <div className="card-items">
                                        <span className="card-item">130%</span>
                                        <span className="card-subtitle">revenue increase</span>
                                    </div>
                                    <div className="card-items">
                                        <span className="card-item">13+</span>
                                        <span className="card-subtitle">sales channels</span>
                                    </div>
                                </div>
                                <div className="button-container txt-tablet-al-center">
                                    <button className="portfolio-btn">Read the full story</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="portfolio-img">
                            <img src="assets/images/portfolio-section-1.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="portfolio-content">
                            <div className="portfolio-section">
                                <div className="portfolio-card">
                                    <div className="section-logo">
                                        <img src="assets/images/portfolio-boost-logo.svg" alt="logo" />
                                    </div>
                                    <h1>Landing page for a marketing agency </h1>
                                    <p><img src="assets/images/checkmark-img.svg" />&nbsp;&nbsp;Faucibus sit est dui id gravida</p>
                                    <p><img src="assets/images/checkmark-img.svg" />&nbsp;&nbsp;Lectus in sem eu facilisis ornare</p>
                                    <p><img src="assets/images/checkmark-img.svg" />&nbsp;&nbsp;Massa maecenas cras vivamus</p>
                                    <hr />
                                </div>
                                <div className="card">
                                    <div className="card-items">
                                        <span className="card-item">1000+</span>
                                        <span className="card-subtitle">leads for $ 2.1</span>
                                    </div>
                                    <div className="card-items">
                                        <span className="card-item">160%</span>
                                        <span className="card-subtitle">revenue increase</span>
                                    </div>
                                    <div className="card-items">
                                        <span className="card-item">12+</span>
                                        <span className="card-subtitle">sales channels</span>
                                    </div>
                                </div>
                                <div className="button-container txt-tablet-al-center">
                                    <button className="portfolio-btn">Read the full story</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="portfolio-img">
                            <img src="assets/images/portfolio-section-2.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="portfolio-content">
                            <div className="portfolio-section">
                                <div className="portfolio-card">
                                    <div className="section-logo">
                                        <img src="assets/images/portfolio-foster-logo.svg" alt="logo" />
                                    </div>
                                    <h1>Design and dev of a dashboard </h1>
                                    <p>Non purus odio venenatis velit sed tellus sed ultrices neque adipiscing sit turpis vel
                                        nisl lacus, aenean sed luctus adipiscing ut orci molestie arcu, sapien sed felis.
                                    </p>
                                    <hr />
                                </div>
                                <div className="card">
                                    <div className="card-items">
                                        <span className="card-item">1000+</span>
                                        <span className="card-subtitle">leads for $ 2.1</span>
                                    </div>
                                    <div className="card-items">
                                        <span className="card-item">160%</span>
                                        <span className="card-subtitle">revenue increase</span>
                                    </div>
                                    <div className="card-items">
                                        <span className="card-item">12+</span>
                                        <span className="card-subtitle">sales channels</span>
                                    </div>
                                </div>
                                <div className="button-container txt-tablet-al-center">
                                    <button className="portfolio-btn">Read the full story</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="portfolio-img">
                            <img src="assets/images/portfolio-section-3.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="portfolio-content">
                            <div className="portfolio-section">
                                <div className="portfolio-card">
                                    <div className="section-logo">
                                        <img src="assets/images/portfolio-champion-logo-1.svg" alt="logo" />
                                    </div>
                                    <h1>Development of an application for a task tracker</h1>
                                    <p>Non purus odio venenatis velit sed tellus sed ultrices neque adipiscing sit turpis vel
                                        nisl lacus,
                                        aenean sed luctus adipiscing ut orci molestie arcu, sapien sed felis.
                                    </p>
                                    <hr />
                                </div>
                                <div className="card">
                                    <div className="card-items">
                                        <span className="card-item">1000+</span>
                                        <span className="card-subtitle">leads for $ 2.1</span>
                                    </div>
                                    <div className="card-items">
                                        <span className="card-item">160%</span>
                                        <span className="card-subtitle">revenue increase</span>
                                    </div>
                                    <div className="card-items">
                                        <span className="card-item">12+</span>
                                        <span className="card-subtitle">sales channels</span>
                                    </div>
                                </div>
                                <div className="button-container txt-tablet-al-center">
                                    <button className="portfolio-btn">Read the full story</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="portfolio-img">
                            <img src="assets/images/portfolio-section-4.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fixed container-res gap-2">
                <div className="row gap-3">
                    <footer className="footer">
                        <div className="footer-container">
                            <div className="col">
                                <div className="footer-box">
                                    <div className="copyright-desc">
                                        <img src="assets/images/logo-footer.svg" alt="Logo" />
                                        <p>Tellus non diam morbi quam vel venenatis proin sed</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="footer-box">
                                    <ul>
                                        <li><a href="#">Services</a></li>
                                        <li><a href="#">Industries</a></li>
                                        <li><a href="#">Reviews</a></li>
                                        <li><a href="#">Case studies</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="footer-box">
                                    <ul>
                                        <li><a href="#">Privacy policy</a></li>
                                        <li><a href="#">Help center</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="footer-box">
                                    <ul>
                                        <li><a href="#">Instagram</a></li>
                                        <li><a href="#">Facebook</a></li>
                                        <li><a href="#">Linkedin</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="footer-box">
                                    <ul>
                                        <li><a href="#">+ 1 526 220 0444</a></li>
                                        <li><a href="#">+ 1 526 220 0000</a></li>
                                        <li><a href="#" className="active-link">example@gmail.com</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="copyright">
                            <p>&copy; All rights reserved. <strong>Made by Createx Studio</strong></p>
                        </div>
                    </footer>
                </div>
            </div>
        </div>


    )
}