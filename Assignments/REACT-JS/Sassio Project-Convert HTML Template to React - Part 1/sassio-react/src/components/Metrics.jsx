export default function Metrics(props) {
    return (
        <div className="row metrics">
            <div className="col components">
                <h1>{props.components}</h1>
                <p>Components</p>
            </div>
            <div className="col downloads">
                <h1>{props.downloads}</h1>
                <p>Downloads</p>
            </div>
            <div className="col followers">
                <h1>{props.followers}</h1>
                <p>Followers</p>
            </div>
            <div className="col users">
                <h1>{props.newUsers}</h1>
                <p>New User</p>
            </div>
        </div>
    )
}