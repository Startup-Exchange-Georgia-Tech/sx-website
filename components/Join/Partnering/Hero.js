import styles from './Hero.module.css'
import Image from 'next/image'
import partnersHeroImage from '../../../assets/images/partnersHeroImage.jpg'
import locIconYellow from '../../../assets/images/locIconYello.png'
import arrow from '../../../assets/images/Arrow.png'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className={styles.Hero}>
            <div className={styles.HeroLeft}>
                <a className={styles.HeroText}>PARTNERS</a>
                <div className={styles.HeroHeading}><span className={styles.HeroYellow}>Get Involved</span></div>
                <div className={styles.ContactHeroAddressContainer}>
                    <div className={styles.HeroBody}>Interested in becoming a mentor for our Georgia Tech student founders, or
                    to host a guest lecture on entrepreneurship? Contact us below, and we'll get you involved!</div>
                </div>
                <Link href="http://mailto:partnerships@startup.exchange?subject=Partnering%20with%20Georgia%20Tech%20Startup%20Exchange">
                    <button className={styles.PrimaryButton}>CONTACT US<span className={styles.ContactHeroArrow}><Image src={arrow}></Image></span></button>
                </Link>
                
               
            </div>
            <div className={styles.HeroRight}>
                <div className={styles.HeroPic}>
                    <Image src={partnersHeroImage}></Image>
                </div>
            </div>
        </div>
    )
}

export default Hero;