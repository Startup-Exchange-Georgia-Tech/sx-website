import styles from './Footer.module.css'
import Image from 'next/image'
import secondaryLogo from '../../assets/images/SXsecondaryLogo.png'
import locationIcon from '../../assets/images/locationIcon.png'
import smallArrow from '../../assets/images/smallArrow.png'

const Footer = () => {
    return (
        <div className={styles.Footer}>
            <div className={styles.FooterContent}>
                <div className={styles.FooterListLeft}>
                    <div className={styles.FooterLogo}>
                        <Image src={secondaryLogo}></Image>
                    </div>
                    <div className={styles.helloSX}>
                        <Image src={smallArrow}></Image>
                        <div className={styles.helloText}><u>hello@startupexchange.com</u></div>
                    </div>
                </div>
                <div className={styles.FooterRight}>
                    <div className={styles.FooterList}>
                        <div className={styles.helloSX}>
                            <div className={styles.FooterListHeading}>HOME</div>
                            <Image src={smallArrow} className={styles.reverseArrow}></Image>
                        </div>
                        
                        <div className={styles.FooterListItem}>SX TOOLBOX</div>
                        <div className={styles.FooterListItem}>CONTACT</div>
                    </div>
                    <div className={styles.FooterList}>
                        <div className={styles.FooterListHeading}>FOLLOW US</div>
                        <div className={styles.SocialIcons}>Ig   Li   Fb   Tw</div>
                        <div className={styles.helloSX}>
                            <Image src={smallArrow}></Image>
                            <div className={styles.FooterListItem}>gatech</div>
                            
                        </div>
                        <div className={styles.helloSX}>
                            <Image src={smallArrow}></Image>
                            <div className={styles.FooterListItem}>create-x</div>
                        </div>
                    </div>
                    <div className={styles.FooterList}>
                        <div className={styles.FooterListHeading}>ABOUT</div>
                        <div className={styles.FooterListHeading}>JOIN</div>
                        <div className={styles.FooterListHeading}>EVENTS</div>
                        <div className={styles.FooterListHeading}>ALUMNI</div>
                        <div className={styles.FooterListHeading}>EXEC</div>
                    </div>
                </div>
                
            </div>
            <div className={styles.FooterFooter}>
                <div className={styles.FooterFooterText}>MADE BY OUR SX FAMILY.</div>
                <div className={styles.FooterFooterText}>top</div>
            </div>
        </div>
    )
}

export default Footer