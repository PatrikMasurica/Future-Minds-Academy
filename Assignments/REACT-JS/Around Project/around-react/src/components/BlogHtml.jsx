import '../css/blog.css'

export default function BlogHtml() {
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
                                <li><a href="/blog" className="active">Blog</a></li>
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
                                <button className="normal-btn nav-btn">Contact us</button>
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
                            <li><a href="about-us.html">About us</a></li>
                            <li><a href="services.html">Services</a></li>
                            <li><a href="portfolio.html">Portfolio</a></li>
                            <li><a href="blog.html" className="active">Blog</a></li>
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
                <div className="row-direction">
                    <div className="links">
                        <span>Homepage</span><span></span><span className="active">Blog</span>
                    </div>
                </div>
                <div className="col">
                    <div className="blog-section-header">
                        <h1 className="section-title">Blog grid</h1>
                        <div className="controls">
                            <select id="category-select">
                                <option value="">All categories</option>
                                <option value="category1">Brand strategy</option>
                                <option value="category2">Books</option>
                                <option value="category3">Inspiration</option>
                                <option value="category4">Ecommerce</option>
                                <option value="category4">Marketing</option>
                                <option value="category4">Travel</option>
                            </select>
                            <div className="search-bar">
                                <input type="text" id="search-input" placeholder="Enter keyword" />
                            </div>
                        </div>
                    </div>
                    <div className="blog-container">
                        <div className="blog">
                            <div className="blog-card">
                                <div className="card-content">
                                    <div className="dateAndType">
                                        <span>9 hours ago</span><span className="seperator">|</span><button>Brand strategy</button>
                                    </div>
                                    <h1>Business strategy for a brand of vintage bags</h1>
                                    <p>Pharetra in morbi quis is massa maecenas arcu vulputate pulvinar elit non nullage a, duis
                                        tortor mi massa ipsum in eu eu eget libero pulvinar elit vulputate...
                                    </p>
                                </div>
                                <div className="profile-container">
                                    <div className="profile">
                                        <img src="assets/images/blog-profile-1.png" alt="" />
                                        <span>Darlene Robertson</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blog">
                            <img src="assets/images/blog-card-image.png" alt="" />
                            <div className="blog-card">
                                <div className="dateAndType">
                                    <span>12 hours ago</span><span className="seperator">|</span><button>Books</button>
                                </div>
                                <h1>Top books for inspiration</h1>
                                <p>Vulputate auctor lacus imperdiet facilisi tristique nisl pulvinar porta diam duis odio
                                </p>
                                <div className="profile-container">
                                    <div className="profile">
                                        <img src="assets/images/blog-profile-2.png" alt="" />
                                        <span>Jenny Wilson</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blog">
                            <div className="blog-card">
                                <div className="dateAndType">
                                    <span>13 hours ago</span><span className="seperator">|</span><button>Inspiration</button>
                                </div>
                                <h1>The fashion for eco bags with vintage prints</h1>
                                <p>Non purus odio venenatis velit sed tellus sed ultrices neque adipiscing sit turpis vel
                                    nisl lacus, aenean sed luctus adipiscing ut orci molestie arcu, sapien sed felis...
                                </p>
                                <div className="profile-container">
                                    <div className="profile">
                                        <img src="assets/images/blog-profile-3.png" alt="" />
                                        <span>Lillia Black</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blog">
                            <div className="blog-card">
                                <div className="dateAndType">
                                    <span>July 16, 2022</span><span className="seperator">|</span><button>Inspiration</button>
                                </div>
                                <h1>How to look for inspiration for new goals</h1>
                                <p>Pharetra in morbi quis is massa maecenas arcu vulputate pulvinar elit non nullage a, duis
                                    tortor mi massa ipsum in eu eu eget libero pulvinar elit vulputate...
                                </p>
                                <div className="profile-container">
                                    <div className="profile">
                                        <img src="assets/images/blog-profile-4.png" alt="" />
                                        <span>Guy Hawkins</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blog">
                            <div className="blog-card">
                                <div className="dateAndType">
                                    <span>June 10, 2022</span><span className="seperator">|</span><button>Ecommerce</button>
                                </div>
                                <h1>Sales on social networks for the eco cosmetics</h1>
                                <p>Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque proin
                                    lectus et massa fames ac scelerisque sit commodo dignissim...
                                </p>
                                <div className="profile-container">
                                    <div className="profile">
                                        <img src="assets/images/blog-profile-3.png" alt="" />
                                        <span>Lillia Black</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blog">
                            <div className="blog-card">
                                <div className="dateAndType">
                                    <span>May 12, 2022</span><span className="seperator">|</span><button>Marketing</button>
                                </div>
                                <h1>Promotion of an online store from scratch, first sales</h1>
                                <p>Sapien ultrices egestas at faucibus eu diam velit diam id amet nibh quam rutrum diam
                                    fermentum diam natoque scelerisque viverra molestie fames...
                                </p>
                                <div className="profile-container">
                                    <div className="profile">
                                        <img src="assets/images/blog-profile-5.png" alt="" />
                                        <span>David Bocous</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blog">
                            <img src="assets/images/blog-card-image-1.png" alt="" />
                            <div className="blog-card">
                                <div className="dateAndType">
                                    <span>January 9, 2022</span><span className="seperator">|</span><button>Travel</button>
                                </div>
                                <h1>Ways to travel in 2022 </h1>
                                <p>Duis consectetur quis enim iaculis eu sagittis posuere imperdiet scelerisque</p>
                                <div className="profile-container">
                                    <div className="profile">
                                        <img src="assets/images/blog-profile-1.png" alt="" />
                                        <span>Darlene Robertson</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blog">
                            <div className="blog-card">
                                <div className="dateAndType">
                                    <span> 9 hours ago</span><span className="seperator">|</span><button>Brand strategy</button>
                                </div>
                                <h1>Destinations to inspire and restore resources</h1>
                                <p>Non purus odio venenatis velit sed tellus sed ultrices neque adipiscing sit turpis vel
                                    nisl lacus, aenean sed luctus adipiscing ut orci molestie arcu, sapien sed felis...
                                </p>
                                <div className="profile-container">
                                    <div className="profile">
                                        <img src="assets/images/blog-profile-2.png" alt="" />
                                        <span>Jenny Wilson</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blog">
                            <img src="assets/images/blog-card-image-2.png" alt="" />
                            <div className="blog-card">
                                <div className="dateAndType">
                                    <span> 9 hours ago</span><span className="seperator">|</span><button>Brand strategy</button>
                                </div>
                                <h1>Guy Hawkins</h1>
                                <p>Nec in est vel ac et odio interdum risus maecenas pulvinar potenti gravida sed</p>
                                <div className="profile-container">
                                    <div className="profile">
                                        <img src="assets/images/blog-profile-4.png" alt="" />
                                        <span>Guy Hawkins</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="load-more">
                        <div className="show-more">
                            <span>Show <span>12</span><span className="material-icons">expand_more</span></span>
                        </div>
                        <button className="normal-btn button-primary">Load more posts</button>
                        <div className="load-more-numbers">
                            <span>1</span>
                            <span>2</span>
                            <span>3</span>
                            <span>4</span>
                            <span>5</span>
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
        </div >

    )
}