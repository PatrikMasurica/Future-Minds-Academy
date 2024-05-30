import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Allseasons() {
    return (
        <div className="container-fixed">
            <Nav />
            <Hero
                title='All Seasons'
                photo='fall.png'

            />
            <Footer />
        </div>
    )
}