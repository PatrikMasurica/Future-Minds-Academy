import amazon from '../assets/images/amazon.png';
import amd from '../assets/images/amd.png';
import cisco from '../assets/images/cisco.png';
import dropcam from '../assets/images/dropcam.png';
import logitech from '../assets/images/logitech.png';
import spotify from '../assets/images/spotify.png';

export default function Trusted(props) {
    return (
        <div className="trusted-by text-center p-4">
            <p>{props.title}</p>
            <div className="row">
                <div className="col m-5">
                    <img src={amazon} />
                </div>
                <div className="col m-5">
                    <img src={amd} />
                </div>
                <div className="col m-5">
                    <img src={cisco} />
                </div>
                <div className="col m-5">
                    <img src={dropcam} />
                </div>
                <div className="col m-5">
                    <img src={logitech} />
                </div>
                <div className="col m-5">
                    <img src={spotify} />
                </div>
            </div>
        </div>
    )
}