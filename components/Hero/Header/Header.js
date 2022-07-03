import Image from 'next/image'
import sxlogo from '../../../assets/images/SXsecondaryLogo.png'
import styles from './Header.module.css'
import Link from 'next/link'

export default function Header() {
    return (
        <div className={styles.Header}>
            <Link href="/">
                <a className={styles.headerLogoContainer}>
                    <Image src={sxlogo}></Image>
                </a>
            </Link>
            
            <div className={styles.pagesContainerHeader}>
                <a className={styles.headerPageLink}>ABOUT</a>
                <a className={styles.headerPageLink}>JOIN</a>
                <a className={styles.headerPageLink}>LEARN</a>
                <Link href="/contact">
                    <a className={styles.headerPageLink}>CONTACT</a>
                </Link>
                <a className={styles.headerToolbox}>SX TOOLBOX</a>
            </div>
        </div>  
    )
}