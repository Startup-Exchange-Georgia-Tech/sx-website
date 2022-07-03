import Image from 'next/image'
import sxlogo from '../../../assets/images/SXsecondaryLogo.png'
import styles from './Header.module.css'

export default function Header() {
    return (
        <div className={styles.Header}>
            <a className={styles.headerLogoContainer} href="/">
                <Image src={sxlogo}></Image>
            </a>
            <div className={styles.pagesContainerHeader}>
                <a className={styles.headerPageLink}>ABOUT</a>
                <a className={styles.headerPageLink}>JOIN</a>
                <a className={styles.headerPageLink}>LEARN</a>
                <a className={styles.headerPageLink} href="/contact">CONTACT</a>
                <a className={styles.headerToolbox}>SX TOOLBOX</a>
            </div>
        </div>  
    )
}