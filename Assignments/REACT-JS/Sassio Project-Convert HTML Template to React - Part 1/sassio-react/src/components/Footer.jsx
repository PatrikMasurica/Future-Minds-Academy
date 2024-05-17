import fb from '../assets/images/fb.png';
import tw from '../assets/images/tw.png';
import insta from '../assets/images/insta.png';
import ln from '../assets/images/ln.png';


export default function Footer() {
    return (
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
    )
}