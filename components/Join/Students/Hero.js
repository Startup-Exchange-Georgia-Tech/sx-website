import styles from './Hero.module.css'
import Image from 'next/image'
import partneringImage from '../../../assets/images/partneringImage.jpg'
import locIconYellow from '../../../assets/images/locIconYello.png'
import arrow from '../../../assets/images/Arrow.png'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className={styles.Hero}>
            <div className={styles.HeroLeft}>
                <a className={styles.HeroText}>STUDENTS</a>
                <div className={styles.HeroHeading}><span className={styles.HeroYellow}>Get Involved</span></div>
                <div className={styles.ContactHeroAddressContainer}>
                    <div className={styles.HeroBody}>Stay up-to-date on our student programs by following us
                    on social media. We share content highlighting members and showcasing our events!</div>
                </div>
                <Link href="https://www.instagram.com/gtstartupexchange/">
                    <button className={styles.PrimaryButton}>FOLLOW @gtstartupexchange<span className={styles.ContactHeroArrow}><Image src={arrow}></Image></span></button>
                </Link>
                
               
            </div>
            <Image src={partneringImage}></Image>
        </div>
    )
}

export default Hero;