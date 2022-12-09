import Header from "../components/Hero/Header/Header"
import Head from 'next/head'
import Footer from "../components/Footer/Footer"
import ContactHero from "../components/ContactHero/ContactHero"
import FAQ from "../components/FAQ/FAQ"
import Partnering from "../components/Partnering/Partnering"
import CurrentPartners from "../components/CurrentPartners/CurrentPartners"

export default function About() {
    return (
        <div>
            <Head>
                <title>
                    Georgia Tech Startup Exchange | About Us
                </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header></Header>
            <FAQ></FAQ>
            <ContactHero></ContactHero>

            <Footer></Footer>
        </div>
    )
}