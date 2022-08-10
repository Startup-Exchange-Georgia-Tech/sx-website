import './Hero.module.css'
import Header from './Header/Header'
import styles from './Hero.module.css'
import Image from 'next/image'
import heroimage from '../../assets/images/heroimage.png'
import circlelogo from '../../assets/images/sxcirclelogo.png'
import arrow from '../../assets/images/Arrow.png'

export default function Hero() {
    return (
        <div className={styles.Hero}>
            <Header></Header>
            {/* <div className={styles.heroImageContainer}>
                <Image src={heroimage} layout="responsive"></Image>
            </div> */}
            <div className={styles.HeroContentContainer}>
                <div className={styles.HeroHeadingsContainer}>
                    <div className={styles.HeroHeading}><span className={styles.HeroHeadingStartup}>STARTUP</span><br></br>EXCHANGE</div>
                    <div className={styles.HeroSubHeading}>AT THE GEORGIA INSTITUTE OF TECHNOLOGY</div>
                </div>
                <div className={styles.HeroBody}>With Startup Exchange, find community as you take your idea from concept to prototype,  or as you learn how to brainstorm a startup in the first place.</div>
                <div className={styles.eventLink}><span className={styles.HeroArrow}><Image src={arrow}></Image></span>OUR PROGRAMS</div>
            </div>
            
        </div>
    )
}
