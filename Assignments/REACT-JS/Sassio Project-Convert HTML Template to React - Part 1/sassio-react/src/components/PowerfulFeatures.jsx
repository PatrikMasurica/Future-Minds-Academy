import laptop from '../assets/images/laptop.png';
import pencil from '../assets/images/pencil.png';
import group from '../assets/images/group.png';
import mockup from '../assets/images/mockup.png';
import pattern from '../assets/images/pattern-bg.png';

export default function PowerfulFeatures(props) {
    return (
        <div className="powerful-features">
            <div className="col-1 p-2 text-center">
                <button className="speciale-1 just-start">{props.btnDscp}</button><br />
                <h1 className="dark title">{props.title}</h1>
                <br />
            </div>
            <div className="row features-info  align-center">
                <div className="col features">
                    <div className="row different">
                        <div className="col features-img">
                            <img src={laptop} alt="Laptop" />
                        </div>
                        <div className="col-4">
                            <h3 className="dark">{props.firstSubtitle}</h3><br />
                            <p>{props.firstDscp}</p>
                        </div>
                    </div>
                    <br />
                    <div className="row  different">
                        <div className="col features-img">
                            <img src={pencil} alt="" />
                        </div>
                        <div className="col-4">
                            <h3 className="dark">{props.secondSubtitle}</h3><br />
                            <p>{props.secondDscp}</p>
                        </div>
                    </div>
                    <br />
                    <div className="row different">
                        <div className="col features-img">
                            <img src={group} alt="" />
                        </div>
                        <div className="col-4">
                            <h3 className="dark">{props.thirdSubtitle}</h3><br />
                            <p>{props.thirdDscp}</p>
                        </div>
                    </div>
                </div>
                <div className="col-1 picture">
                    <img src={mockup} className="powerful-img" />
                    <img src={pattern} alt="pattern" className="pattern-img-power" />
                </div>
            </div>
        </div>
    )
}