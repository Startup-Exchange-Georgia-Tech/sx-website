import styles from './ContactHero.module.css'
import Image from 'next/image'
import contactHeroImage from '../../assets/images/contactheroimage.png'
import locIconYellow from '../../assets/images/locIconYello.png'
import arrow from '../../assets/images/Arrow.png'
import Link from 'next/link'

const ContactHero = () => {
    return (
        <div className={styles.ContactHero}>
            <div className={styles.ContactHeroLeft}>
                <div className={styles.ContactHeroHeading}>ATL<span><Image src={locIconYellow}></Image></span> | TECH SQUARE</div>
                <a className={styles.ContactHeroEmail}><u>hello@startup.exchange</u></a>
                <div className={styles.ContactHeroAddressContainer}>
                    <div className={styles.ContactHeroSubHeading}>TECH SQUARE ATL SOCIAL CLUB</div>
                    <div className={styles.ContactHeroAddress}>848 SPRING STREET NW</div>
                    <div className={styles.ContactHeroAddress}>ATLANTA, GA 30308</div>
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