import styles from './Alumni.module.css'
import Image from 'next/image'
import contactHeroImage from '../../../assets/images/contactheroimage.png'
import locIconYellow from '../../../assets/images/locIconYello.png'
import arrow from '../../../assets/images/Arrow.png'
import Link from 'next/link'

const Alumni = () => {
    return (
        <div className={styles.Hero}>
            <div className={styles.HeroLeft}>
                <div className={styles.HeroHeading}>ATL, GA<span><Image src={locIconYellow}></Image></span> | TECH SQUARE</div>
                <a className={styles.HeroEmail}><u>hello@startup.exchange</u></a>
                <div className={styles.HeroAddressContainer}>
                    <div className={styles.HeroSubHeading}>TECH SQUARE ATL SOCIAL CLUB</div>
                    <div className={styles.HeroAddress}>848 SPRING STREET NW</div>
                    <div className={styles.HeroAddress}>ATLANTA, GA 30308</div>
                </div>
                <Link href="https://g.page/techsquareatl?share">
                    <a className={styles.ContactHeroView}>VIEW IN MAPS<span className={styles.ContactHeroArrow}><Image src={arrow}></Image></span></a>
                </Link>
                
               
            </div>
            <Image src={contactHeroImage}></Image>
        </div>
    )
}

export default ContactHero;