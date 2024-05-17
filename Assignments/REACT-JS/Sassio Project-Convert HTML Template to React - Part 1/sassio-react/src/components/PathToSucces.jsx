import trending from '../assets/images/trending.png';
import letter from '../assets/images/letter.png';
import pckgDelivery from '../assets/images/package-delivery.png';
import reporting from '../assets/images/reporting.png';


export default function PathToSucces(props) {
    return (
        <div className="row path-succes">
            <div className="col-2">
                <img src={trending} className="path-img" />
            </div>
            <div className="path-succes">
                <div className="col-2 gap-2">
                    <button className="speciale-1 just-start">{props.btnDscp}</button><br />
                    <h1 className="dark title">{props.title}</h1>
                    <br />
                    <div className="row gap-2 m-3 align-start">
                        <div className="col-2">
                            <div className="back-hover">
                                <img src={letter} alt="letter" />
                            </div>
                        </div>
                        <div className="col-5">
                            <h3 className="dark">{props.firstSubtitle}</h3><br />
                            <p>{props.description} <br /> {props.dscpNewLine}</p>
                        </div>
                    </div>
                    <br /><br />
                    <div className="row gap-2">
                        <div className="col-2">
                            <div className="back-hover">
                                <img src={pckgDelivery} alt="package-delivery" />
                            </div>
                        </div>
                        <div className="col-5">
                            <h3 className="dark">{props.secondSubtitle}</h3><br />
                            <p>{props.description} <br /> {props.dscpNewLine}</p>
                        </div>
                    </div>
                    <br /><br />
                    <div className="row gap-2">
                        <div className="col-2">
                            <div className="back-hover"><img src={reporting} alt="Reporting/" />
                            </div>
                        </div>
                        <div className="col-5">
                            <h3 className="dark">{props.thirdSubtitle}</h3><br />
                            <p>{props.description} <br /> {props.dscpNewLine}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}