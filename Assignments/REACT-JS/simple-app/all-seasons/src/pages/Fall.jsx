import Nav from "../components/Nav"
import Hero from "../components/Hero"
import Footer from "../components/Footer"

export default function Fall() {
    return (
        <div className="container-fixed">
            <Nav />
            <Hero
                title='Fall'
                photo='fall.png'
            />
            <Footer />
        </div>
    )
}