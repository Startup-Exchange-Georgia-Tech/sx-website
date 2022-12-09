import Header from "../components/Hero/Header/Header"
import Head from 'next/head'
import Footer from "../components/Footer/Footer"
import ContactHero from "../components/About/ContactHero/ContactHero"
import FAQ from "../components/About/FAQ/FAQ"
import Partnering from "../components/Partnering/Partnering"
import CurrentPartners from "../components/CurrentPartners/CurrentPartners"

export default function Partners() {
    return (
        <div>
            <Head>
                <title>Startup Exchange at Georgia Tech | Contact Us</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header></Header>
            <Partnering></Partnering>
            <CurrentPartners></CurrentPartners>
            <Footer></Footer>
        </div>
    )
}