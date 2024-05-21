export default function ServicesHtml() {
    return (

        <div className="container-fixed container-res">
            <header className="row align-center">
                <div className="col">
                    <nav className="navbar gap-2">
                        <img src="assets/images/logo.svg" alt="Around-Logo" className="navbar-logo" />
                        <ul className="navbar-menu remove-tablet">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about-us.html">About us</a></li>
                            <li><a href="services.html" className="active">Services</a></li>
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
                            <button className="normal-btn nav-btn">Contact us</button>

                            <div className="nav-burger block-tablet">
                                <span className="material-icons" id="menu-icon">menu</span>
                            </div>

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
                            <li><a href="about-us.html">About us</a></li>
                            <li><a href="services.html" className="active">Services</a></li>
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

                        <button className="sidebar-btn nav-btn">Contact us</button>
                    </div>
                </div>
                <div className="container-fixed container-res gap-4">
                    <div className="row-direction gap-3">
                        <div className="links">
                            <span>Homepage</span><span></span><span className="active">Services</span>
                        </div>
                        <div className="col text-center">
                            <div className="card-header">
                                <h1 className="section-title">Our Services</h1>
                                <p className="section-subtitle">We provide a wide range of consulting services</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="services-container">
                                <div className="services">
                                    <div className="service-card">
                                        <div className="icon">
                                            <img src="assets/images/google-ads-logo.svg" Icon />
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
                                            <img src="assets/images/services-illustration.svg" alt="Icon" />
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
                                            <img src="assets/images/services-illustration-2.svg" alt="Icon" />
                                        </div>
                                        <h3>Web and Internet marketing</h3>
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
                                            <img src="assets/images/services-illustration-3.svg" alt="Icon" />
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
                                            <img src="assets/images/services-illustration-4.svg" alt="Icon" />
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
                                            <img src="assets/images/services-illustration-5.svg" alt="Icon" />
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
                </div>
                <div className="container-fixed container-res gap-4">
                    <div className="row gap-6">
                        <div className="col">
                            <div>
                                <div className="benefits-img">
                                    <img src="assets/images/Services-working-with-us.png" alt="Client" />
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card-benefits-container">
                                <h1 className="card-benefits-title">Benefits <br /> of working with us</h1>
                                <div className="card-benefits p-2">
                                    <div className="processBenefits-number p-1">01</div>
                                    <div>
                                        <h2>Individual approach</h2>
                                        <span>Hac erat leo proin odio est sed sit felis facilisi integer sed congue neque turpis
                                            dictumst sit sed volutpat aliquet tortor non.</span>
                                    </div>
                                </div>
                                <div className="card-benefits p-2">
                                    <div className="processBenefits-number p-1">02</div>
                                    <div>
                                        <h2>Integrated analytics</h2>
                                        <span>Find aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                            fugiat
                                            nulla pariatur neque congue aliqua dolor do leo proin odio est sed sit felis facilisi
                                            integer</span>
                                    </div>
                                </div>
                                <div className="card-benefits p-2">
                                    <div className="processBenefits-number p-1">03</div>
                                    <div>
                                        <h2>Step by step work</h2>
                                        <span>More erat leo proin odio est sed sit felis facilisi integer sed congue neque
                                            turpis
                                            dictumst sit sed volutpat aliquet tortor non</span>
                                    </div>
                                </div>
                                <div className="card-benefits p-2">
                                    <div className="processBenefits-number p-1">04</div>
                                    <div>
                                        <h2>Full spectrum of services</h2>
                                        <span>Adipiscing posuere dui, amet, augue nisl dictum justo, enim sed neque congue non
                                            quam
                                            ultrices interdum vitae vestibulum. Hac erat leo proin odio est sed sit felis
                                            facilisi
                                            integer sed.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="testimonial-background">
                    <div className="container-fixed container-res gap-4">
                        <div className="row-direction gap-3">
                            <div className="col text-center">
                                <div className="card-header">
                                    <h1>Testimonials</h1>
                                </div>
                            </div>
                            <div className="col">
                                <div className="testimonials-container">
                                    <div className="testimonials p-4">
                                        <div className="profile">
                                            <img src="assets/images/avatar.png" alt="" />
                                            <div className="username">
                                                <span><strong>Jane Cooper</strong></span>
                                                <span className="role">Medical Assistant</span>
                                            </div>
                                        </div>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa error veritatis suscipit
                                            quos
                                            facere
                                            asperiores, deleniti dolores voluptate quia soluta. Tempore at nam quaerat asperiores
                                            adipisci
                                            delectus
                                            dolorem, aspernatur libero!
                                        </p>
                                    </div>
                                    <div className="testimonials p-4">
                                        <div className="profile">
                                            <img src="assets/images/avatar (1).png" alt="" />
                                            <div className="username">
                                                <span><strong>Wade Warren</strong></span>
                                                <span className="role">President of Sales</span>
                                            </div>
                                        </div>
                                        <p>Vitae tempor morbi tellus pulvinar. Ut iaculis sit tristique in turpis volutpat quam nec.
                                            Pretium
                                            eu
                                            nulla egestas ultrices. Donec in pulvinar ut fermentum a, nunc, aliquam. Integer dui dui
                                            ornare
                                            sed
                                            interdum. Enim.
                                        </p>
                                    </div>
                                    <div className="testimonials p-4">
                                        <div className="profile">
                                            <img src="assets/images/avatar (2).png" alt="" />
                                            <div className="username">
                                                <span><strong>Esther Howard</strong></span>
                                                <span className="role">CEO, Slack</span>
                                            </div>
                                        </div>
                                        <p>Ante turpis leo dictum adipiscing nisl magnis elementum eu. Integer consequat sed ipsum
                                            massa
                                            egestas
                                            integer proin id.
                                        </p>
                                    </div>
                                    <div className="testimonials p-4">
                                        <div className="profile">
                                            <img src="assets/images/avatar (3).png" alt="" />
                                            <div className="username">
                                                <span><strong>Cameron Williamson</strong></span>
                                                <span className="role">Marketing Coordinator</span>
                                            </div>
                                        </div>
                                        <p>Nam convallis maecenas leo sapien interdum id. Facilisi dictum lacinia in phasellus.
                                            Nullam
                                            id
                                            sed
                                            tempor, volutpat blandit urna sagittis, commodo vestibulum. Adipiscing dictumst nunc
                                            enim
                                            massa.
                                        </p>
                                    </div>
                                    <div className="testimonials p-4">
                                        <div className="profile">
                                            <img src="assets/images/avatar (4).png" alt="" />
                                            <div className="username">
                                                <span><strong>Leslie Alexander</strong></span>
                                                <span className="role">CEO, Divi</span>
                                            </div>
                                        </div>
                                        <p>Malesuada at ullamcorper adipiscing lobortis vestibulum. Aliquet lobortis justo arcu ut
                                            auctor
                                            porttitor
                                            amet, tortor. Justo.
                                        </p>
                                    </div>
                                    <div className="testimonials p-4">
                                        <div className="profile">
                                            <img src="assets/images/avatar (5).png" alt="" />
                                            <div className="username">
                                                <span><strong>Brooklyn Simmons</strong></span>
                                                <span className="role">Web Designer</span>
                                            </div>
                                        </div>
                                        <p>In quisque dolor, aliquam faucibus. Gravida diam ornare egestas proin quis odio
                                            suspendisse
                                            pellentesque.
                                            Condimentum risus, rutrum curabitur faucibus mi a turpis morbi. Nulla euismod dolor quis
                                            amet
                                            sed.
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
                </div>
                <div className="intro-container">
                    <div className="wrapper-full">
                        <div className="row intro-section">
                            <div className="col">
                                <div className="wrapper-md just-center align-center">
                                    <div className="hero-content">
                                        <h1>Ready to take your business to the next level? </h1>
                                    </div>
                                    <img src="assets/images/VectorIMG.png" alt="" className="img-position" />
                                </div>
                            </div>
                            <div className="wrapper-md">
                                <div className="col">
                                    <span className="contact-desc">Massa velitienes semper faucibus tristique id nibh elementum, id eu
                                        aliquamd diam mi
                                        tempus at
                                        laciniarty scelerisques augue at morbi. Arcu sit orcirs, risus mattissit laoreet </span>
                                </div>
                                <div className="col">
                                    <div className="send-btn">
                                        <input type="text" className="primary-color intro-placeholder"
                                            placeholder="&#128231 Enter your email" />
                                        <button className="normal-btn btn-primary button-secondary">Book a call</button>
                                    </div>
                                </div>
                            </div>
                        </div>
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