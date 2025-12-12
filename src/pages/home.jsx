import Hero from '../components/hero.jsx'
import Navbar from '../components/navbar.jsx'
import BenefitsBar from '../components/BenefitsBar.jsx'
import EmblaCarousel from '../components/carousel.jsx'
import BestSeller from '../components/Best-seller.jsx'
import Social from '../components/social.jsx'
import Footer from '../components/footer.jsx'


function Layout() {

    return (
        <>
            <Navbar />
            <Hero />
            <BenefitsBar />
            <EmblaCarousel />
            <BestSeller />
            
            <Social />
            <Footer />
        </>
    )
}

export default Layout
