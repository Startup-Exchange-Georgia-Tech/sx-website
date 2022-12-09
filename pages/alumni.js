import Header from "../components/Hero/Header/Header"
import Head from 'next/head'
import Footer from "../components/Footer/Footer"
import ContactHero from "../components/About/ContactHero/ContactHero"
import FAQ from "../components/About/FAQ/FAQ"
import ColumnText from "../components/Alumni/ColumnText/ColumnText"
import CompanyLogos from "../components/Alumni/CompanyLogos/CompanyLogos"

export default function Alumni() {
    return (
        <div>
            <Head>
                <title>Startup Exchange at Georgia Tech | Contact Us</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header></Header>
            <ColumnText></ColumnText>
            <CompanyLogos></CompanyLogos>
            <Footer></Footer>
        </div>
    )
}