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
                <div className={styles.heroLogoContainer}>
                    <Image src={circlelogo}></Image>
                </div>
                <div className={styles.HeroHeading}>Creating a hub for Yellow Jackets to connect, collaborate, and innovate.</div>
                <div className={styles.HeroBody}>Through Startup Exchange, find community as you take your startup idea from concept to prototype, 
or as you learn how to brainstorm a startup in the first place.</div>
                <div className={styles.eventLinkContainer}>
                    <div className={styles.eventLink}>OUR EVENTS</div>
                    <div className={styles.arrowContainer}>
                        <Image src={arrow}></Image>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}
