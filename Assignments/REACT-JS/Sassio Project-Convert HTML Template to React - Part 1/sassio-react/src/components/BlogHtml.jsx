import background from '../assets/images/bg.png';
import fb from '../assets/images/fb.png';
import tw from '../assets/images/tw.png';
import ln from '../assets/images/ln.png';
import insta from '../assets/images/insta.png';
import blog from '../assets/images/blog-logo.png';

export default function BlogHtml() {
    return (
        <div className="container-full">
            <div
                className="header blog row"
                id="top"
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="col logo-col">
                    <img src={blog} alt="Your Image" />
                </div>
                <button className="btn-white duplicate blog">Join</button>
                <div className="hamburger-blog" tabindex="0">
                    <span className="material-symbols-outlined">menu</span>
                    <div className="notification-down-blog">
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
                <div className="col navigation-col blog">
                    <a href="/">Home</a>
                    <a href="/about">About Us</a>
                    <a href="/services">Services</a>
                    <a href="/portofolio">Portfolio</a>
                    <a href="/contact">Contact Us</a>
                    <a href="/blog">Blog</a>
                </div>
                <div className="col btn-primary blog">
                    <button className="btn-white blog">Join</button>
                    <button className="btn-black blog">Get the App</button>
                </div>
                <div className=" row header-text blog">
                    <div className="col-6">
                        <h1>Blog Styles</h1>
                    </div>
                    <div className="col-6">
                        <p>With we want to optimize the customization process so your team can save time when building
                            websites.</p>
                    </div>

                </div>
            </div>
            <div className="wrapper-lg bloog blog-intro">
                <div className="row ">
                    <div className="col navigation-blog">
                        <a href="#">All Project</a>
                        <a href="#">E-commerce</a>
                        <a href="#">Digital Design</a>
                        <a href="#">Branding</a>
                        <a href="#">Web Design</a>
                    </div>
                </div>
                <div className="blog-cards-container">
                    <div className="row blog-card">
                        <div className="col-1 card all-shadow">
                            <div className="card-header">
                                <button className="btn-small">Web Design</button>
                            </div>
                            <div className="card-content">
                                <div className="card-info">
                                    <p>Ronald Tufan</p>
                                    <p className="info-right">&#9679; July 20, 2022 &#9679;</p>
                                    <span className="number"><span className="material-symbols-outlined">sms</span>22</span>
                                </div>
                                <h3 className="dark">Problems everyone has when working remotely</h3>
                                <p>Quickly drive clicks-and-mortar catalysts for change before vertical architectures.
                                    Credibly
                                    reintermediate backend ideas.</p>
                            </div>
                            <div className="card-footer">
                                <a href="#" className="read-more">Read More</a>
                            </div>
                        </div>
                        <div className="col-1 card all-shadow">
                            <div className="card-header">
                                <button className="btn-small">Web Design</button>
                            </div>
                            <div className="card-content">
                                <div className="card-info">
                                    <p>Ronald Tufan</p>
                                    <p className="info-right"> &#9679; July 20, 2022 &#9679;</p>
                                    <span className="number"><span className="material-symbols-outlined">sms</span>22</span>
                                </div>
                                <h3 className="dark">Problems everyone has when working remotely</h3>
                                <p>Quickly drive clicks-and-mortar catalysts for change before vertical architectures.
                                    Credibly
                                    reintermediate backend ideas.</p>
                            </div>
                            <div className="card-footer">
                                <a href="#" className="read-more">Read More</a>
                            </div>
                        </div>
                        <div className="col-1 card all-shadow change">
                            <div className="card-header">
                                <button className="btn-small">Web Design</button>
                            </div>
                            <div className="card-content">
                                <div className="card-info">
                                    <p>Ronald Tufan</p>
                                    <p className="info-right"> &#9679; July 20, 2022 &#9679;</p>
                                    <span className="number"><span className="material-symbols-outlined">sms</span>22</span>
                                </div>
                                <h3 className="dark">Problems everyone has when working remotely</h3>
                                <p>Quickly drive clicks-and-mortar catalysts for change before vertical architectures.
                                    Credibly
                                    reintermediate backend ideas.</p>
                            </div>
                            <div className="card-footer">
                                <a href="#" className="read-more">Read More</a>
                            </div>
                        </div>
                        <div className="row blog-card">
                            <div className="col-1 card all-shadow">
                                <div className="card-header">
                                    <button className="btn-small">Web Design</button>
                                </div>
                                <div className="card-content">
                                    <div className="card-info">
                                        <p>Ronald Tufan</p>
                                        <p className="info-right"> &#9679; July 20, 2022 &#9679;</p>
                                        <span className="number"><span className="material-symbols-outlined">sms</span>22</span>
                                    </div>
                                    <h3 className="dark">Problems everyone has when working remotely</h3>
                                    <p>Quickly drive clicks-and-mortar catalysts for change before vertical architectures.
                                        Credibly
                                        reintermediate backend ideas.</p>
                                </div>
                                <div className="card-footer">
                                    <a href="#" className="read-more">Read More</a>
                                </div>
                            </div>
                            <div className="col-1 card all-shadow">
                                <div className="card-header">
                                    <button className="btn-small">Web Design</button>
                                </div>
                                <div className="card-content">
                                    <div className="card-info">
                                        <p>Ronald Tufan</p>
                                        <p className="info-right"> &#9679; July 20, 2022 &#9679;</p>
                                        <span className="number"><span className="material-symbols-outlined">sms</span>22</span>
                                    </div>
                                    <h3 className="dark">Problems everyone has when working remotely</h3>
                                    <p>Quickly drive clicks-and-mortar catalysts for change before vertical architectures.
                                        Credibly
                                        reintermediate backend ideas.</p>
                                </div>
                                <div className="card-footer">
                                    <a href="#" className="read-more">Read More</a>
                                </div>
                            </div>
                            <div className="col-1 card all-shadow change">
                                <div className="card-header">
                                    <button className="btn-small">Web Design</button>
                                </div>
                                <div className="card-content">
                                    <div className="card-info">
                                        <p>Ronald Tufan</p>
                                        <p className="info-right"> &#9679; July 20, 2022 &#9679;</p>
                                        <span className="number"><span className="material-symbols-outlined">sms</span>22</span>
                                    </div>
                                    <h3 className="dark">Problems everyone has when working remotely</h3>
                                    <p>Quickly drive clicks-and-mortar catalysts for change before vertical architectures.
                                        Credibly
                                        reintermediate backend ideas.</p>
                                </div>
                                <div className="card-footer">
                                    <a href="#" className="read-more">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="row blog-card">
                            <div className="col-1 card all-shadow">
                                <div className="card-header">
                                    <button className="btn-small">Web Design</button>
                                </div>
                                <div className="card-content">
                                    <div className="card-info">
                                        <p>Ronald Tufan</p>
                                        <p className="info-right"> &#9679; July 20, 2022 &#9679;</p>
                                        <span className="number"><span className="material-symbols-outlined">sms</span>22</span>
                                    </div>
                                    <h3 className="dark">Problems everyone has when working remotely</h3>
                                    <p>Quickly drive clicks-and-mortar catalysts for change before vertical architectures.
                                        Credibly
                                        reintermediate backend ideas.</p>
                                </div>
                                <div className="card-footer">
                                    <a href="#" className="read-more">Read More</a>
                                </div>
                            </div>
                            <div className="col-1 card all-shadow">
                                <div className="card-header">
                                    <button className="btn-small">Web Design</button>
                                </div>
                                <div className="card-content">
                                    <div className="card-info">
                                        <p>Ronald Tufan</p>
                                        <p className="info-right"> &#9679; July 20, 2022 &#9679;</p>
                                        <span className="number"><span className="material-symbols-outlined">sms</span>22</span>
                                    </div>
                                    <h3 className="dark">Problems everyone has when working remotely</h3>
                                    <p>Quickly drive clicks-and-mortar catalysts for change before vertical architectures.
                                        Credibly
                                        reintermediate backend ideas.</p>
                                </div>
                                <div className="card-footer">
                                    <a href="#" className="read-more">Read More</a>
                                </div>
                            </div>
                            <div className="col-1 card all-shadow change">
                                <div className="card-header">
                                    <button className="btn-small">Web Design</button>
                                </div>
                                <div className="card-content">
                                    <div className="card-info">
                                        <p>Ronald Tufan</p>
                                        <p className="info-right"> &#9679; July 20, 2022 &#9679;</p>
                                        <span className="number"><span className="material-symbols-outlined">sms</span>22</span>
                                    </div>
                                    <h3 className="dark">Problems everyone has when working remotely</h3>
                                    <p>Quickly drive clicks-and-mortar catalysts for change before vertical architectures.
                                        Credibly
                                        reintermediate backend ideas.</p>
                                </div>
                                <div className="card-footer">
                                    <a href="#" className="read-more">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="blog-btn">LOAD MORE</button><br />
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
        </div >
    )
}