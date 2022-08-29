import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero/Hero'
import AboutUs from '../components/AboutUs/AboutUs'
import WhatsHappening from '../components/WhatsHappening/WhatsHappening'
import Joining from '../components/Joining/Joining'
import Events from '../components/Events/Events'
import Alumni from '../components/Alumni/Alumni'
import ExecBoard from '../components/ExecBoard/ExecBoard'
// import Instagram from '../components/Instagram/Instagram'
import Sponsors from '../components/Sponsors/Sponsors'
import MailingList from '../components/MailingList/MailingList'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <div className="Home">
      <Head>
        <title>Startup Exchange at Georgia Tech | Connect, Collaborate, and Innovate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero></Hero>
      <AboutUs></AboutUs>
      <WhatsHappening></WhatsHappening>
      <Joining></Joining>
      <Events></Events>
      <Alumni></Alumni>
      <ExecBoard></ExecBoard>
      {/* <Instagram></Instagram> */}
      <Sponsors></Sponsors>
      <MailingList></MailingList>
      <Footer></Footer>
    </div>
  )
}
