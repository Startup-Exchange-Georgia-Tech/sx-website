import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero/Hero";
import AboutUs from "../components/Home/AboutUs/AboutUs";
import WhatsHappening from "../components/Home/WhatsHappening/WhatsHappening";
import Joining from "../components/Home/Joining/Joining";
import Events from "../components/Home/Events/Events";
import Alumni from "../components/Home/Alumni/Alumni";
import Sponsors from "../components/Home/Sponsors/Sponsors";
import MailingList from "../components/Home/MailingList/MailingList";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div className="Home">
      <Head>
        <title>
          Georgia Tech Startup Exchange | Connect, Collaborate, and Innovate
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero></Hero>
      <AboutUs></AboutUs>
      <WhatsHappening></WhatsHappening>
      <Joining></Joining>
      <Events></Events>
      <Alumni></Alumni>
      <Sponsors></Sponsors>
      <MailingList></MailingList>
      <Footer></Footer>
    </div>
  );
}
