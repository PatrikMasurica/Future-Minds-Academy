export default function FaqSection(props) {
    return (
        <div className="row faq-section m-10 gap-9">
            <div className="col-1">
                <button className="speciale-1">GET HELP (HELP CENTER)</button>
                <h2 className="faq">{props.title}</h2>
            </div>
            <div className="col-1">
                <div className="faq-item">
                    <span className="material-symbols-outlined">remove</span>
                    <span className="dark">What does the package include?</span>
                </div>
                <div className="faq-item-content">
                    <p>{props.description}</p>
                </div>
                <div className="faq-item">
                    <span className="material-symbols-outlined">add</span>
                    <span className="dark">How does the 14-day trial work?</span>
                </div>
                <div className="faq-item">
                    <span className="material-symbols-outlined">add</span>
                    <span className="dark">How do I pay for your service?</span>
                </div>
                <div className="faq-item">
                    <span className="material-symbols-outlined">add</span>
                    <span className="dark">Can I suggest a new feature?</span>
                </div>
            </div>
        </div>
    )
}