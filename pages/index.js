import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero/Hero";
import WhatsHappening from "../components/Home/WhatsHappening/WhatsHappening";
import AboutUs from "../components/Home/AboutUs/AboutUs";
import Fellowship from "../components/Home/Fellowship/Fellowship";
import Mentorship from "../components/Home/Mentorship/Mentorship";
import Membership from "../components/Home/Membership/Membership";
import Joining from "../components/Home/Joining/Joining";
import Benefits from "../components/Home/Benefits/Benefits";
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
      <WhatsHappening></WhatsHappening>
      <AboutUs></AboutUs>
      <Joining></Joining>
      <Mentorship></Mentorship>
      <Fellowship></Fellowship>
      <Membership></Membership>
      <Benefits></Benefits>
      <Alumni></Alumni>
      <Sponsors></Sponsors>
      <MailingList></MailingList>
      <Footer></Footer>
    </div>
  );
}
