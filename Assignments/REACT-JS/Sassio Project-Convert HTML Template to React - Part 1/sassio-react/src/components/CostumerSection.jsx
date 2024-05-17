export default function CostumerSection(props) {
    return (
        <div className="row m-10 gap-9 costumer-section">
            <div className="col-1">
                <button className="speciale-1">{props.btnDscp}</button>
                <h2 className="costumer-header">{props.title}</h2>
            </div>
            <div className="col-1 info">
                <h4>{props.subtitle}</h4><br />
                <p>{props.description}
                </p><br />
                <h4>Devon Lane</h4>
                <p>Team Leader, Paypal</p>
            </div>
            <div className="col-1 info">
                <h4>{props.subtitle}</h4><br />
                <p>{props.description}
                </p><br />
                <h4>Theresa Webb</h4>
                <p>Softwer Tester, Envato</p>
            </div>
        </div>
    )
}