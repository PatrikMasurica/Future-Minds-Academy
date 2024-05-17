import appleIcon from '../assets/images/icone_apple.png';
import androidIcon from '../assets/images/icone_android.png';
import bgImage from '../assets/images/bg.png';
import phones from '../assets/images/phones.png';
import patterns from '../assets/images/pattern-bg.png';


export default function Hero(props) {
    return (
        <div className="hero row">
            <div className="col text-left p-5 m-5 intro">
                <button className="btn-primary speciale">{props.btnDscp}</button>
                <h1 className="display-1">{props.title}</h1>
                <h1 className="display-2"> {props.secondTitle}</h1>
                <p className="hero-paragraf">{props.subtitle} <br /> {props.subtitleConcat}</p>

                <div className="buttons">
                    <div className="button-container">
                        <img className="button-image" src={appleIcon} alt="Apple" />
                        <span className="seperator"></span>
                        <div className="button-text">
                            <span className="button-download">{props.firstBtnTxt}</span>
                            <span className="bold-text">{props.firstBtnStore}</span>
                        </div>
                    </div>
                    <div className="button-container">
                        <img className="button-image" src={androidIcon} alt="Android " />
                        <span className="seperator"></span>
                        <div className="button-text">
                            <span className="button-download">{props.secondBtnTxt}</span>
                            <span className="bold-text">{props.secondBtnStore}</span>
                        </div>
                    </div>
                </div>
            </div>
            <img src={bgImage} alt="Background " className="bg-img" />
            <div className="col pictures">
                <img src={phones} alt="Phones " className="img-fluid" />
                <img src={patterns} alt="pattern" className="pattern-img" />
            </div>
        </div>
    )
}