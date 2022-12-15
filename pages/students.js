import Header from "../components/Hero/Header/Header"
import Head from 'next/head'
import Footer from "../components/Footer/Footer"
import StudentsInfo from "../components/Join/Students/StudentsInfo"
import CurrentPartners from "../components/Join/CurrentPartners/CurrentPartners"

export default function Students() {
    return (
        <div>
            <Head>
                <title>Georgia Tech Startup Exchange | Contact Us</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header></Header>
            <StudentsInfo></StudentsInfo>
            <CurrentPartners></CurrentPartners>
            <Footer></Footer>
        </div>
    )
}