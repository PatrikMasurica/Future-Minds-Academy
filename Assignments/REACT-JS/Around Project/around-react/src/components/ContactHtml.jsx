import '../css/contact-us.css';

export default function ContactHtml() {
    return (
        <div>
            <div className="container-fixed container-res">
                <header className="row align-center">
                    <div className="col">
                        <nav className="navbar gap-2">
                            <img src="assets/images/logo.svg" alt="Around-Logo" className="navbar-logo" />
                            <ul className="navbar-menu remove-tablet">
                                <li><a href="/">Home</a></li>
                                <li><a href="/about">About us</a></li>
                                <li><a href="/services">Services</a></li>
                                <li><a href="/portfolio">Portfolio</a></li>
                                <li><a href="/blog">Blog</a></li>
                                <li><a href="/blog-details">Blog Details</a></li>
                                <li><a href="/contact" className="active">Contact us</a></li>
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
                </header>
            </div>

            <div className="sidebar" id="sidebar">
                <div className="navbar-vertical">
                    <div>
                        <img src="assets/images/logo.svg" alt="Around-Logo" className="sidebar-logo" />
                        <ul className="sidebar-menu">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about-us.html" className="active">About us</a></li>
                            <li><a href="services.html">Services</a></li>
                            <li><a href="portfolio.html">Portfolio</a></li>
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="blog-details.html">Blog Details</a></li>
                            <li><a href="contact-us.html">Contact us</a></li>
                        </ul>
                    </div>
                    <div className="sidebar-toogle">
                        <img src="assets/images/sun.png" />
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider"></span>
                        </label>
                        <img src="assets/images/moon.png" />
                    </div>
                    <button className="sidebar-btn nav-btn">Contact us</button>
                </div>
            </div>

            <div className="container-fixed container-res gap-4">
                <div className="links">
                    <span>Homepage</span><span></span><span className="active">Contacts</span>
                </div>
                <div className="row contact-form gap-3">
                    <div className="contactForm-content">
                        <h1>Contacts</h1>
                        <span>Get in touch with us by completing the below form or call us now</span>
                    </div>
                    <div className="row">
                        <form action="#" className="contact-form">
                            <div className="form-group">
                                <div className="row gap-2">
                                    <div className="col-1">
                                        <label for="name">Name</label>
                                        <input type="text" id="name" name="name" placeholder="Your Name" required />
                                    </div>
                                    <div className="col-1">
                                        <label for="email">Email</label>
                                        <input type="email" id="email" name="email" placeholder="Email Address" required />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row gap-2">
                                    <div className="col-1">
                                        <label for="phone">Phone</label>
                                        <input type="tel" id="phone" name="phone" placeholder="Phone Number" required />
                                    </div>
                                    <div className="col-1">
                                        <label for="location">Location</label>
                                        <select name="location">
                                            <option value="Locations">All locations</option>
                                            <option value="Kosovo">Kosovo</option>
                                            <option value="Italy">Italy</option>
                                            <option value="France">France</option>
                                            <option value="Germany">Germany</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-1">
                                    <div className="form-group">
                                        <label for="message">How can we help?</label>
                                        <textarea id="message" name="message" rows="4" placeholder="How can we help?" required></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label>
                                            <input type="checkbox" required />
                                            <span className="terms">I agree to the <u>Terms & Conditions</u></span>
                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="form-btn button-primary">Send a Request</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container-fixed container-res gap-2">
                <div className="row gap-3">
                    <footer className="footer">
                        <div className="footer-container">
                            <div className="col-1">
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