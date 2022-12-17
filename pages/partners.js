import Header from "../components/Hero/Header/Header"
import Head from 'next/head'
import Footer from "../components/Footer/Footer"
import Partnering from "../components/Join/Partnering/Partnering"
import CurrentPartners from "../components/Join/CurrentPartners/CurrentPartners"

export default function Partners() {
    return (
        <div>
            <Head>
                <title>Georgia Tech Startup Exchange | Contact Us</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header></Header>
            <Partnering></Partnering>
            <CurrentPartners></CurrentPartners>
            <Footer></Footer>
        </div>
    )
}