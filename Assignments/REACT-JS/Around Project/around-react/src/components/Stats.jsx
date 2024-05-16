export default function Stats(props) {
    return (
        <div class="container-fixed container-res gap-4">
            <div class="wrapper-full">
                <div class="row">
                    <div class="col">
                        <div class="card">
                            <div class="card-inner">
                                <div class="card-items">
                                    <span class="card-item">{props.happyClients}+</span>
                                    <span class="card-subtitle">Happy clients</span>
                                </div>
                                <div class="card-items">
                                    <span class="card-item">{props.projectsCompleted}+</span>
                                    <span class="card-subtitle">Projects completed</span>
                                </div>
                                <div class="card-items">
                                    <span class="card-item">{props.ftSpecialists}+</span>
                                    <span class="card-subtitle">Full time specialists</span>
                                </div>
                                <div class="card-items">
                                    <span class="card-item">{props.awards}+</span>
                                    <span class="card-subtitle">Awards won</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}