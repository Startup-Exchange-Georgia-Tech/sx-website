import styles from './Footer.module.css'
import Image from 'next/image'
import primaryLogo from '../../assets/images/SXprimaryLogo.png'
import locationIcon from '../../assets/images/locationIcon.png'

const Footer = () => {
    return (
        <div className={styles.Footer}>
            <div className={styles.FooterContent}>
                <div className={styles.FooterList}>
                    <Image src={primaryLogo}></Image>
                </div>
                
                <div className={styles.FooterList}>
                    <div className={styles.FooterListHeading}>ABOUT</div>
                    <div className={styles.FooterListItem}>Missions \& Values</div>
                    <div className={styles.FooterListItem}>Our Members</div>
                    <div className={styles.FooterListItem}>Our Executive Board</div>
                    <div className={styles.FooterListItem}>Alumni Network</div>
                </div>
                <div className={styles.FooterList}>
                    <div className={styles.FooterListHeading}>STUDENTS</div>
                    <div className={styles.FooterListItem}>Why SX?</div>
                    <div className={styles.FooterListItem}>Join US</div>
                    <div className={styles.FooterListItem}>Resources</div>
                    <div className={styles.FooterListItem}>Job Board</div>
                </div>
                <div className={styles.FooterList}>
                    <div className={styles.FooterListHeading}>EVENTS</div>
                    <div className={styles.FooterListItem}>Innovator's Forum</div>
                    <div className={styles.FooterListItem}>Startup Toolbox</div>
                    <div className={styles.FooterListItem}>Networking</div>
                    <div className={styles.FooterListItem}>Pitch Competitions</div>
                    <div className={styles.FooterListItem}>Year in Review 2020-21</div>
                </div>
                <div className={styles.FooterList}>
                    <div className={styles.FooterListHeading}>PODCAST</div>
                    <div className={styles.FooterListHeading}>BLOG</div>
                    <div className={styles.FooterListHeading}>PARTNERSHIP</div>
                    <div className={styles.FooterListHeading}>CONTACT</div>
                </div>

            </div>
            <div className={styles.FooterFooter}>
                <div className={styles.FooterFooterText}><span><Image src={locationIcon}></Image></span>STARTUP EXCHANGE| 848 SPRING STREET NW, ATLANTA, GEORGIA 30308</div>
                <div className={styles.FooterFooterText}>MADE BY OUR SX FAMILY.</div>
            </div>
        </div>
    )
}

export default Footer