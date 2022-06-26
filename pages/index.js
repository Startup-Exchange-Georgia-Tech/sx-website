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

export default function Home() {
  return (
    <div className="Home">
      <Hero></Hero>
      <AboutUs></AboutUs>
      <WhatsHappening></WhatsHappening>
      <Joining></Joining>
      <Events></Events>
      <Alumni></Alumni>
      <ExecBoard></ExecBoard>
    </div>
  )
}
