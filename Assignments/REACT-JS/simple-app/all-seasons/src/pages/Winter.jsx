import Nav from "../components/Nav"
import Hero from "../components/Hero"
import Footer from "../components/Footer"

export default function Winter() {
    return (
        <div className="container-fixed">
            <Nav />
            <Hero
                title='Winter'
                photo='winter.png'
            />
            <Footer />
        </div>
    )
}