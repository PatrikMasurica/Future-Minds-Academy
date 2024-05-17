import timer from '../assets/images/timer.png';
import cloudStorage from '../assets/images/cloud-storage.png';
import touch from '../assets/images/touch.png';
import penTool from '../assets/images/pen-tool.png';
import benefit from '../assets/images/benefit.png'


export default function WrapperFull(props) {
    return (
        <div className="wrapper-full text-center">
            <button className="btn-primary speciale-1">{props.btnDscp}</button>
            <h1 className="text-center">{props.title}</h1><br />
            <div className="secure-section">
                <div className="row square all-shadow">
                    <div className="col-5 m-2 p-2">
                        <img src={timer} alt="timer-picture" />
                    </div>
                    <span className="col-5 m-1 text-left">
                        <h3 className="dark">{props.firstOption}</h3><br />
                        <p>{props.firstSubtitle}<br /> {props.secondSubtitle}</p>
                    </span>
                </div>
                <div className="row  square all-shadow">
                    <div className="col-5  m-2 p-2">
                        <img src={cloudStorage} alt="cloud-storage" />
                    </div>
                    <span className="col-5 m-1 text-left">
                        <h3 className="dark">{props.secondOption}</h3><br />
                        <p>{props.firstSubtitle}<br /> {props.secondSubtitle}</p>
                    </span>
                </div>
                <div className="row square all-shadow">
                    <div className="col-5  m-2 p-2">
                        <img src={touch} alt="touch-screen" />
                    </div>
                    <span className="col-5 m-1 text-left">
                        <h3 className="dark">{props.thirdOption}</h3><br />
                        <p>{props.firstSubtitle}<br /> {props.secondSubtitle}</p>
                    </span>
                </div>
                <div className="row square all-shadow">
                    <div className="col-5  m-2 p-2">
                        <img src={penTool} alt="pen-tool" />
                    </div>
                    <span className="col-5 m-1 text-left">
                        <h3 className="dark">{props.fourthOption}</h3><br />
                        <p>{props.firstSubtitle}<br /> {props.secondSubtitle}</p>
                    </span>
                </div>
            </div>
            <div className="benefit-section">
                <div className="row">
                    <div className="col-1 m-2 p-2 replacement">
                        <img src="assets/images/benefit.png" alt="benefits" />
                    </div>
                    <div className="col-1 m-3 p-3 benefit-info">
                        <div className="col benefit-header text-left ">
                            <button className="btn-primary speciale-1">{props.btnDscp}</button>
                            <h3 className="display-1">{props.benefitTitle}</h3>
                        </div>
                        <div className="benefits">
                            <ul>
                                <li>
                                    <div className="benefit-item">
                                        <div className="icon-container">
                                            <span className="material-symbols-outlined">check</span>
                                        </div>
                                        <span className="dark">{props.benefitFirstOp}</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="benefit-item">
                                        <div className="icon-container">
                                            <span className="material-symbols-outlined">check</span>
                                        </div>
                                        <span className="dark">{props.benefitSecondOp}</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="benefit-item">
                                        <div className="icon-container">
                                            <span className="material-symbols-outlined">check</span>
                                        </div>
                                        <span className="dark">{props.benefitThirdOp}</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="benefit-item">
                                        <div className="icon-container">
                                            <span className="material-symbols-outlined">check</span>
                                        </div>
                                        <span className="dark">{props.benefitFourthOp}</span>
                                    </div>
                                </li>
                            </ul>
                            <ul className="item-left">
                                <li>
                                    <div className="benefit-item">
                                        <div className="icon-container">
                                            <span className="material-symbols-outlined">check</span>
                                        </div>
                                        <span className="dark">{props.benefitFifthOp}</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="benefit-item">
                                        <div className="icon-container">
                                            <span className="material-symbols-outlined">check</span>
                                        </div>
                                        <span className="dark">{props.benefitSixthOp}</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="benefit-item">
                                        <div className="icon-container">
                                            <span className="material-symbols-outlined">check</span>
                                        </div>
                                        <span className="dark">{props.benefitSeventhOp}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <button className="btn-free just-start">{props.secondBtnDscp}</button>
                    </div>
                    <div className="col-1 m-2 p-2 benefit-img">
                        <img src={benefit} alt="benefits" className="benefit-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}