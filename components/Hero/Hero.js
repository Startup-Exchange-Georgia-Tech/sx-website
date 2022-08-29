import './Hero.module.css'
import Header from './Header/Header'
import styles from './Hero.module.css'
import Image from 'next/image'
import heroimage from '../../assets/images/heroimage.png'
import circlelogo from '../../assets/images/sxcirclelogo.png'
import arrow from '../../assets/images/Arrow.png'
import Link from 'next/link'

export default function Hero() {
    return (
        <div className={styles.Hero} id="hero">
            <Header></Header>
            {/* <div className={styles.heroImageContainer}>
                <Image src={heroimage} layout="responsive"></Image>
            </div> */}
            <div className={styles.HeroContentContainer}>
                <div className={styles.HeroHeadingsContainer}>
                    <div className={styles.HeroHeading}><span className={styles.HeroHeadingStartup}>STARTUP</span><br></br></div>
                    <div className={styles.HeroHeading}><span className={styles.HeroHeadingExchange}>EXCHANGE</span></div>
                    <div className={styles.HeroSubHeading}>AT THE GEORGIA INSTITUTE OF TECHNOLOGY</div>
                </div>
                <div className={styles.HeroBody}>With Startup Exchange, find community as you take your idea from concept to prototype, <br />or as you learn how to brainstorm a startup in the first place.</div>
                <Link href="#Join">
                    <div className={styles.eventLink}><span className={styles.HeroArrow}><Image src={arrow}></Image></span>OUR PROGRAMS</div>
                </Link>
                
            </div>
            
        </div>
    )
}
