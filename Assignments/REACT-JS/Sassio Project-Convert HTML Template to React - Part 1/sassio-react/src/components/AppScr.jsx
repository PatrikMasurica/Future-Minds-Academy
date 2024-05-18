import market from '../assets/images/market.png';
import portfolio from '../assets/images/protofolio.png';
import trading from '../assets/images/trading.png';

export default function AppScr(props) {
    return (
        <div className="row p-2">
            <div className="app-screnshot m-5 p-8">
                <div className="col text-center">
                    <button className="speciale-1 appsc">EXPLORE NEW PLACES</button><br />
                    <h1 className="display-3">{props.title}</h1>
                    <br />
                </div>
                <div className="col-1 apps">
                    <img src={market} alt="" className="screen market" />
                    <img src={portfolio} alt="" className="screen pro" />
                    <img src={trading} alt="" className="screen trading" />
                </div>
                <div className="bullet-container">
                    <div className="bullet"></div>
                    <div className="bullet"></div>
                    <div className="bullet"></div>
                    <div className="bullet"></div>
                    <div className="bullet"></div>
                </div>
            </div>
        </div>
    )
}