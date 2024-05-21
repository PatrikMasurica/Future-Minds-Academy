import '../css/about-us.css';

export default function AboutHtml(props) {
    return (
        <div>
            <div className="container-fixed gap-7 container-res">
                <header className="row align-center">
                    <div className="col">
                        <nav className="navbar gap-2">
                            <img src="assets/images/logo.svg" alt="Around-Logo" className="navbar-logo" />
                            <ul className="navbar-menu remove-tablet">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="about-us.html" className="active">About us</a></li>
                                <li><a href="services.html">Services</a></li>
                                <li><a href="portfolio.html">Portfolio</a></li>
                                <li><a href="blog.html">Blog</a></li>
                                <li><a href="blog-details.html">Blog Details</a></li>
                                <li><a href="contact-us.html">Contact us</a></li>
                            </ul>
                            <div className="navbar-button remove-tablet">
                                <img src="assets/images/sun.png" alt="" />
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider"></span>
                                </label>
                                <img src="assets/images/moon.png" alt="" />
                                <button className="normal-btn button-primary">Contact us</button>
                            </div>
                            <div className="nav-burger block-tablet">
                                <span className="material-icons" id="menu-icon">menu</span>
                            </div>
                        </nav>
                    </div>
                </header>
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
                <div className="row hero gap-3">
                    <div className="wrapper-lg">
                        <div className="col-2">
                            <div className="hero-content">
                                <h1>The effective solutions for your business</h1>
                                <span>We are a team who creates marketing strategies for B2B and B2C companies</span>
                                <div className="send-btn">
                                    <form>
                                        <input type="text" placeholder="&#128231 Enter your email" />
                                        <button className="normal-btn btn-primary button-primary">Book a call</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col img-fixed">
                        <img src="assets/images/header-img.png" className="img-xxl" />
                    </div>
                </div>
                <div className="row-direction gap-3">
                    <div className="col">
                        <div className="card-header">
                            <span className="section-subtitle">Our Mission</span>
                            <h1 className="section-title">Professional approach </h1>
                        </div>
                    </div>
                    <div className="col">
                        <div className="services-container">
                            <div className="services">
                                <div className="service-card">
                                    <div className="icon">
                                        <img src="assets/images/services-icon-1.svg" alt="Icon" />
                                    </div>
                                    <h3>Advertising communications</h3>
                                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint velit officia
                                        consequat duis enim velit mollit.
                                    </p>
                                </div>
                            </div>
                            <div className="services">
                                <div className="service-card">
                                    <div className="icon">
                                        <img src="assets/images/services-icon-2.svg" alt="Icon" />
                                    </div>
                                    <h3>Marketing and branding</h3>
                                    <p>Find aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                        nulla pariatur neque congue.
                                    </p>
                                </div>
                            </div>
                            <div className="services">
                                <div className="service-card">
                                    <div className="icon">
                                        <img src="assets/images/services-icon-2.svg" alt="Icon" />
                                    </div>
                                    <h3>Marketing and branding</h3>
                                    <p>Find aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                        nulla pariatur neque congue.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="how-we-work-container">
                                <div className="how-we-work-img just-tablet-center">
                                    <div className="how-we-work-text">
                                        <span>How we work</span>
                                        <h1>The key to success</h1>
                                    </div>
                                    <img src="assets/images/image.png" alt="" />
                                </div>
                                <div className="how-we-work-cards">
                                    <div className="card-processInsights p-4">
                                        <div className="processInsights-number p-1">01</div>
                                        <div>
                                            <h2>Formulation of the problem</h2>
                                            <span>Find aute irure dolor in reprehenderi voluptate velit esse cillum dolore eu fugiat
                                                nulla
                                                pariatur am luctus </span>
                                        </div>
                                    </div>
                                    <div className="card-processInsights p-4">
                                        <div className="processInsights-number p-1">02</div>
                                        <div>
                                            <h2>Assessment of the current state</h2>
                                            <span>Risus quam quis at euismod vitae dui elementu eu in diam malesuada mattis ut urna
                                                integer
                                                erat nisi, nibh </span>
                                        </div>
                                    </div>
                                    <div className="card-processInsights p-4">
                                        <div className="processInsights-number p-1">03</div>
                                        <div>
                                            <h2>Business plan creation</h2>
                                            <span>A sagittis morbi massa venenatis, egestas viverra ac elit nibh tellus nisi in nec
                                                tellus
                                                mauris feugiat gravida </span>
                                        </div>
                                    </div>
                                    <div className="card-processInsights p-4">
                                        <div className="processInsights-number p-1">04</div>
                                        <div>
                                            <h2>Strategy implementation</h2>
                                            <span>Elementum purus, nisl ipsum sit. Amet sit praesent proin sit cras. Leo sed
                                                praesent nunc
                                                vel nec risus</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row-direction gap-3">
                        <div className="col">
                            <div className="card-header">
                                <span className="section-subtitle">Our Team</span>
                                <h1 className="section-title">Team of professionals</h1>
                            </div>
                        </div>
                        <div className="col">
                            <div className="team-members-container">
                                <div className="members-card">
                                    <img src="assets/images/team-member-1.png" alt="" />
                                    <div className="member-info">
                                        <div className="member-name">Alice Patel</div>
                                        <div className="role">Software Engineer</div>
                                        <div className="social-icons">
                                            <a href="#" className="fab fa-instagram social-icon"></a>
                                            <a href="#" className="fab fa-facebook-f social-icon"></a>
                                            <a href="#" className="fab fa-linkedin-in"></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="members-card">
                                    <img src="assets/images/team-member-2.png" alt="" />
                                    <div className="member-info">
                                        <div className="member-name">Daniel Garcia</div>
                                        <div className="role">Network Engineer</div>
                                        <div className="social-icons">
                                            <a href="#" className="fab fa-instagram social-icon"></a>
                                            <a href="#" className="fab fa-facebook-f social-icon"></a>
                                            <a href="#" className="fab fa-linkedin-in"></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="members-card">
                                    <img src="assets/images/team-member-3.png" alt="" />
                                    <div className="member-info">
                                        <div className="member-name">Marta Black</div>
                                        <div className="role">Web Dev</div>
                                        <div className="social-icons">
                                            <a href="#" className="fab fa-instagram social-icon"></a>
                                            <a href="#" className="fab fa-facebook-f social-icon"></a>
                                            <a href="#" className="fab fa-linkedin-in"></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="members-card">
                                    <img src="assets/images/team-member-4.png" alt="" />
                                    <div className="member-info">
                                        <div className="member-name">Ethan Parker</div>
                                        <div className="role"> Database Administrator</div>
                                        <div className="social-icons">
                                            <a href="#" className="fab fa-instagram social-icon"></a>
                                            <a href="#" className="fab fa-facebook-f social-icon"></a>
                                            <a href="#" className="fab fa-linkedin-in"></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="members-card">
                                    <img src="assets/images/team-member-5.png" alt="" />
                                    <div className="member-info">
                                        <div className="member-name">Emily Chen</div>
                                        <div className="role">Data Scientist</div>
                                        <div className="social-icons">
                                            <a href="#" className="fab fa-instagram social-icon"></a>
                                            <a href="#" className="fab fa-facebook-f social-icon"></a>
                                            <a href="#" className="fab fa-linkedin-in"></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="members-card">
                                    <img src="assets/images/team-member-6.png" alt="" />
                                    <div className="member-info">
                                        <div className="member-name">James Lee</div>
                                        <div className="role">Cybersecurity Analyst</div>
                                        <div className="social-icons">
                                            <a href="#" className="fab fa-instagram social-icon"></a>
                                            <a href="#" className="fab fa-facebook-f social-icon"></a>
                                            <a href="#" className="fab fa-linkedin-in"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row-direction">
                        <div className="col">
                            <div className="card-header">
                                <span className="section-subtitle">Testimonials</span>
                                <h1>What our clients say</h1>
                            </div>
                        </div>
                        <div className="col">
                            <div className="testimonials-container">
                                <div className="profile">
                                    <img src="assets/images/aboutUs-avatar.png" alt="" className="client-picture" />
                                    <div className="username">
                                        <span>Lilian Bocouse</span>
                                        <span className="role">Head of Marketing</span>
                                    </div>
                                </div>
                                <div className="testimonials">
                                    <p>“Around provides us with the detailed and accurate data we need to make strategic
                                        decisions. All
                                        tools are constantly being improved and contain a lot of useful and interesting
                                        information. Thanks
                                        to Around, we can constantly analyze our big data quickly and efficiently.”
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="slider-container">
                                <div className="slide"></div>
                                <div className="slide"></div>
                                <div className="slide"></div>
                                <div className="slide"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row-direction">
                    <div className="col">
                        <div className="locations-header">
                            <div>
                                <span className="section-subtitle">Where</span>
                                <h1 className="section-title">We are located in London</h1>
                            </div>
                            <div className="button-container gap-1">
                                <button className="round-button">&leftarrow;</button>
                                <button className="round-button">&rightarrow;</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="locations-container gap-3">
                            <div className="image">
                                <img src="assets/images/Location-1.png" alt="" />
                                <div className="overlay">
                                    <span className="material-icons zoom-in">zoom_in</span>
                                </div>
                            </div>
                            <div className="image">
                                <img src="assets/images/Location-2.png" alt="" />
                                <div className="overlay">
                                    <span className="material-icons zoom-in">zoom_in</span>
                                </div>
                            </div>
                            <div className="image">
                                <img src="assets/images/Location-3.png" alt="" />
                                <div className="overlay">
                                    <span className="material-icons zoom-in">zoom_in</span>
                                </div>
                            </div>
                            <div className="image">
                                <img src="assets/images/Location-4.png" alt="" />
                                <div className="overlay">
                                    <span className="material-icons zoom-in">zoom_in</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row-direction gap-3">
                    <div className="col">
                        <div className="card-header">
                            <h1 className="section-title">Our Services</h1>
                        </div>
                    </div>
                    <div className="col">
                        <div className="services-container">
                            <div className="services">
                                <div className="service-card">
                                    <div className="icon">
                                        <img src="assets/images/services-icon-1.svg" alt="Icon" />
                                    </div>
                                    <h3>Advertising communications</h3>
                                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint velit officia
                                        consequat duis enim velit mollit.
                                    </p>
                                </div>
                                <div className="button-container">
                                    <button className="round-button">&rightarrow;</button>
                                </div>
                            </div>
                            <div className="services">
                                <div className="service-card">
                                    <div className="icon">
                                        <img src="assets/images/services-icon-2.svg" alt="Icon" />
                                    </div>
                                    <h3>Marketing and branding</h3>
                                    <p>Find aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                        nulla pariatur neque congue.
                                    </p>
                                </div>
                                <div className="button-container">
                                    <button className="round-button">&rightarrow;</button>
                                </div>
                            </div>
                            <div className="services">
                                <div className="service-card">
                                    <div className="icon">
                                        <img src="assets/images/services-icon-3.svg" alt="Icon" />
                                    </div>
                                    <h3>Strategy development </h3>
                                    <p>Hac erat leo proin odio est sed sit felis facilisi integer sed congue neque turpis
                                        dictumst sit sed volutpat aliquet tortor non.
                                    </p>
                                </div>
                                <div className="button-container">
                                    <button className="round-button">&rightarrow;</button>
                                </div>
                            </div>
                            <div className="services">
                                <div className="service-card">
                                    <div className="icon">
                                        <img src="assets/images/services-icon-4.svg" alt="Icon" />
                                    </div>
                                    <h3>Email marketing</h3>
                                    <p>Adipiscing posuere dui, amet, augue nisl dictum justo, enim. Sed neque congue non quam
                                        ultrices interdum vitae vestibulum.
                                    </p>
                                </div>
                                <div className="button-container">
                                    <button className="round-button">&rightarrow;</button>
                                </div>
                            </div>
                            <div className="services">
                                <div className="service-card">
                                    <div className="icon">
                                        <img src="assets/images/services-icon-5.svg" alt="Icon" />
                                    </div>
                                    <h3>Working on communication</h3>
                                    <p>Molestie enim tempus egestas a at enim. Velit hendrerit nibh eget porta pretium. Ipsum
                                        orci habitasse eget malesuada platea.
                                    </p>
                                </div>
                                <div className="button-container">
                                    <button className="round-button">&rightarrow;</button>
                                </div>
                            </div>
                            <div className="services">
                                <div className="service-card">
                                    <div className="icon">
                                        <img src="assets/images/services-icon-6.svg" alt="Icon" />
                                    </div>
                                    <h3>Business copywriting</h3>
                                    <p>Massa donec quam orci feugiat. Quis iaculis facilisi ornare aenean lorem enim purus in
                                        lacus in ullamcorper diam consequat.
                                    </p>
                                </div>
                                <div className="button-container">
                                    <button className="round-button">&rightarrow;</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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