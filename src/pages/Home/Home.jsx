import { Cards, CarouselBanner, PaidBanner, NavBar, Footer } from '../../components'
import { REQUESTSTORE } from '../../utils/RequestStore'

function Home() {
    return (
        <>
            <NavBar />
            <CarouselBanner />
            <PaidBanner />
            <Cards requestStore={REQUESTSTORE} />
            <Footer />
        </>
    )
}

export default Home