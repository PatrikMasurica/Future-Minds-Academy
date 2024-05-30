import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

export default function Spring() {
    return (
        <div className='container-fixed'>
            <Nav />
            <Hero
                title='Spring'
                photo='spring.png'
            />
            <Footer />
        </div>
    )

}