import Nav from "../components/Nav"
import Hero from "../components/Hero"
import Footer from "../components/Footer"

export default function Summer() {
    return (
        <div className="container-fixed">
            <Nav />
            <Hero
                title='Summer'
                photo='summer.png'
            />
            <Footer />
        </div>
    )
}