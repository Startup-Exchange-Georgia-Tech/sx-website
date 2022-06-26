import Image from 'next/image'
import sxlogo from '../../../assets/images/SXsecondaryLogo.png'
import styles from './Header.module.css'

export default function Header() {
    return (
        <div className={styles.Header}>
            <div className={styles.headerLogoContainer}>
                <Image src={sxlogo}></Image>
            </div>
            <div className={styles.pagesContainerHeader}>
                <div className={styles.headerPageLink}>ABOUT</div>
                <div className={styles.headerPageLink}>JOIN</div>
                <div className={styles.headerPageLink}>LEARN</div>
                <div className={styles.headerPageLink}>CONTACT</div>
                <div className={styles.headerToolbox}>SX TOOLBOX</div>
            </div>
        </div>  
    )
}