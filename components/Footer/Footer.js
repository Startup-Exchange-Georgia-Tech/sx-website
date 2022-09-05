import styles from './Footer.module.css'
import Image from 'next/image'
import secondaryLogo from '../../assets/images/SXsecondaryLogo.png'
import locationIcon from '../../assets/images/locationIcon.png'
import smallArrow from '../../assets/images/smallArrow.png'
import arrowUp from '../../assets/images/arrowUp.png'
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
                        <Image src={secondaryLogo}></Image>
                    </div>
                    <Link href="mailto:hello@startup.exchange">
                        <div className={styles.helloSX}>
                            <Image src={smallArrow}></Image>
                            <div className={styles.helloText}><u>hello@startupexchange.com</u></div>
                        </div>
                    </Link>
                    
                </div>
                <div className={styles.FooterRight}>
                    <div className={styles.FooterList}>
                        <Link href="#Hero">
                            <div className={styles.helloSX}>
                                <div className={styles.FooterListHeading}>HOME</div>
                                <Image src={smallArrow} className={styles.reverseArrow}></Image>
                            </div>
                        </Link>
                        <Link href="https://startupexchange.notion.site/SX-Toolbox-658b9ef658da4ba7bb8d4cbdc470a387">
                            <div className={styles.FooterListItem}>SX TOOLBOX</div>
                        </Link>
                        <Link href="https://startup.exchange/contact">
                            <div className={styles.FooterListItem}>CONTACT</div>
                        </Link>
                        
                    </div>
                    <div className={styles.FooterList}>
                        <div className={styles.FooterListHeading}>FOLLOW US</div>
                        <div className={styles.SocialIcons}>
                            <Link href="https://www.instagram.com/gtstartupexchange/">
                                <div className={styles.socialIcon}>Ig</div>
                            </Link>
                            <Link href="https://www.linkedin.com/company/gtstartupexchange/">
                                <div className={styles.socialIcon}>Li</div>
                            </Link>
                            <Link href="https://www.facebook.com/groups/startupexchange">
                                <div className={styles.socialIcon}>Fb</div>
                            </Link>
                            <Link href="https://twitter.com/startupxchange">
                                <div className={styles.socialIcon}>Tw</div>
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
                            <div className={styles.FooterListLink}>JOIN</div>
                        </Link>
                        <Link href="#Events">
                            <div className={styles.FooterListLink}>EVENTS</div>
                        </Link>
                        <Link href="#Alumni">
                            <div className={styles.FooterListLink}>ALUMNI</div>
                        </Link>
                        <Link href="#Exec">
                            <div className={styles.FooterListLink}>EXEC</div>
                        </Link>
                    </div>
                </div>
                
            </div>
            <div className={styles.FooterFooter}>
                <div className={styles.FooterFooterText}>MADE BY OUR SX FAMILY.</div>

                <div className={styles.FooterFooterTop} onClick={scrollToTop}>
                    <div>TOP</div>
                    <Image src={arrowUp} className={styles.topSmallArrow}></Image>
                </div>
                
            </div>
        </div>
    )
}

export default Footer