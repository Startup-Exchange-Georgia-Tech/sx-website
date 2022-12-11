import styles from './Footer.module.css'
import Image from 'next/image'
import secondaryLogo from '../../assets/images/SXsecondaryLogo.png'
import locationIcon from '../../assets/images/locationIcon.png'
import smallArrow from '../../assets/images/smallArrow.png'
import arrowUp from '../../assets/images/arrowUp.png'
import instagram from '../../assets/images/social/instagram.png'
import linkedin from '../../assets/images/social/linkedin.png'
import twitter from '../../assets/images/social/twitter.png'
import linktree from '../../assets/images/social/linktree.png'
import Link from 'next/link'

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }
    
    return (
        <div className={styles.Footer}>
            <div className={styles.FooterContent}>
                <div className={styles.FooterListLeft}>
                    <div className={styles.FooterLogo}>
                        <Link href="/">
                            <Image src={secondaryLogo}></Image>
                        </Link>
                    </div>
                    <Link href="mailto:hello@startup.exchange">
                        <div className={styles.helloSX}>
                            CONTACT
                            <Image src={smallArrow}></Image>
                            <div className={styles.helloText}><u>hello@startupexchange.com</u></div>
                        </div>
                    </Link>
                    
                </div>
                <div className={styles.FooterRight}>
                    <div className={styles.FooterList}>
                        <div className={styles.helloSX}>
                            <div className={styles.FooterListHeading}>GET INVOLVED</div>
                        </div>
                        <Link href="#">
                            <div className={styles.FooterListItem}>MENTORSHIP</div>
                        </Link>
                        <Link href="#">
                            <div className={styles.FooterListItem}>ACCELERATOR</div>
                        </Link>
                        <Link href="#">
                            <div className={styles.FooterListItem}>MEMBERSHIP</div>
                        </Link>
                        <Link href="https://summit.startup.exchange/">
                            <div className={styles.FooterListItem}>SX SUMMIT ATL</div>
                        </Link>
                        
                    </div>
                    <div className={styles.FooterList}>
                        <div className={styles.FooterListHeading}>FOLLOW US</div>
                        <div className={styles.SocialIcons}>
                            <Link href="https://twitter.com/startupxchange">
                                <div className={styles.socialIcon}><Image src={twitter}></Image></div>
                            </Link>
                            <Link href="https://www.instagram.com/gtstartupexchange/">
                                <div className={styles.socialIcon}><Image src={instagram}></Image></div>
                            </Link>
                            <Link href="https://www.linkedin.com/company/gtstartupexchange/">
                                <div className={styles.socialIcon}><Image src={linkedin}></Image></div>
                            </Link>
                            <Link href="https://www.linktr.ee/startupexchange">
                                <div className={styles.socialIcon}><Image src={linktree}></Image></div>
                            </Link>


                        </div>
                        <Link href="https://www.gatech.edu/">
                            <div className={styles.helloSX}>
                                <Image src={smallArrow}></Image>
                                <div className={styles.FooterListItem}>gatech</div>
                                
                            </div>
                        </Link>
                        <Link href="https://create-x.gatech.edu/">
                            <div className={styles.helloSX}>
                                <Image src={smallArrow}></Image>
                                <div className={styles.FooterListItem}>create-x</div>
                            </div>
                        </Link>
                        
                    </div>
                    <div className={styles.FooterList}>
                        <Link href="#AboutUs">
                            <div className={styles.FooterListLink}>ABOUT</div>
                        </Link>
                        <Link href="#Join">
                            <div className={styles.FooterListLink}>JOIN US</div>
                        </Link>
                        <Link href="/initiatives">
                            <div className={styles.FooterListLink}>INITIATIVES</div>
                        </Link>
                        <Link href="/alumni">
                            <div className={styles.FooterListLink}>ALUMNI</div>
                        </Link>
                        <Link href="https://startupexchange.notion.site/Georgia-Tech-s-Entrepreneurship-Ecosystem-658b9ef658da4ba7bb8d4cbdc470a387">
                            <div className={styles.FooterListLink}>ECOSYSTEM</div>
                        </Link>
                    </div>
                </div>
                
            </div>
            <div className={styles.FooterFooter}>
                <div className={styles.FooterFooterText}>MADE BY OUR SX FAMILY.</div>

                <div className={styles.FooterFooterTop} onClick={scrollToTop}>
                    <div>TOP </div>
                    <Image src={arrowUp} className={styles.topSmallArrow}></Image>
                </div>
                
            </div>
        </div>
    )
}

export default Footer