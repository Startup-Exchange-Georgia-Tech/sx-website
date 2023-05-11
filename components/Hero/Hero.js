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
                    {/* <div className={styles.HeroSubHeading}>THE GEORGIA INSTITUTE OF TECHNOLOGY</div> */}
                    <div className={styles.HeroHeading}>Where builders create epic ideas.</div>
                    {/* <div className={styles.HeroHeading}><span className={styles.HeroHeadingExchange}>EXCHANGE</span></div> */}
                </div>
                <div className={styles.HeroBody}>We  enable the underrepresented, and empower bold technologists to explore emerging tech and build daring, innovative companies.</div>
                <Link href="#Join">
                    {/* <button className={`${styles.eventLink} ${styles.eventLinkGradient}`}>OUR PROGRAMS<span className={styles.HeroArrow}><Image src={arrow}></Image></span></button> */}
                    <button className={styles.eventLink}>OUR PROGRAMS<span className={styles.HeroArrow}><Image src={arrow}></Image></span></button>
                </Link>
                <Link href="/about">
                    <button className={styles.eventLinkWhite}>ABOUT US<span className={styles.HeroArrow}><Image src={arrow}></Image></span></button>
                </Link>
                
            </div>
            
        </div>
    )
}
