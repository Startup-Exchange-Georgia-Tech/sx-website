import Header from "../components/Hero/Header/Header"
import Head from 'next/head'
import Footer from "../components/Footer/Footer"
import Alumni from "../components/Join/Alumni/Alumni"

export default function AlumniJoin() {
    return (
        <div>
            <Head>
                <title>Georgia Tech Startup Exchange | Contact Us</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header></Header>
            <Alumni></Alumni>
            <Footer></Footer>
        </div>
    )
}