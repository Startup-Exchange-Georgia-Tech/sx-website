import Header from "../components/Hero/Header/Header"
import Head from 'next/head'
import Footer from "../components/Footer/Footer"
import AlumniNews from "../components/Alumni/AlumniNews/AlumniNews"
import CompanyLogos from "../components/Alumni/CompanyLogos/CompanyLogos"

export default function Alumni() {
    return (
        <div>
            <Head>
                <title>Startup Exchange at Georgia Tech | Contact Us</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header></Header>
            <AlumniNews></AlumniNews>
            <CompanyLogos></CompanyLogos>
            <Footer></Footer>
        </div>
    )
}