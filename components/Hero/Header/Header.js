import Image from 'next/image'
import sxlogo from '../../../assets/images/SXprimaryLogo.png'
import styles from './Header.module.css'
import Link from 'next/link'
import hamburger from '../../../assets/images/hamburger.png'
import { useState } from 'react'
import ddClose from '../../../assets/images/ddClose.png'
import sxwhite from '../../../assets/images/SXlogowhite.png'

export default function Header() {

    const [dropdown, setDropdown] = useState(false)

    return (
        <div className={styles.HeaderContainer}>
            {
            dropdown? 
            <div className={styles.HeaderDropDown}>
                <div className={styles.ddClose} onClick={() => {
                    setDropdown(false)
                }}>
                    <Image src={ddClose}></Image>
                </div>
                <div className={styles.dropdownLogo}>
                    <Image src={sxwhite} ></Image>
                </div>
                <div className={styles.dropdownLinks}>
                    <div className={styles.ddLink}>Home</div>
                    <div className={styles.ddLink}>About</div>
                    <div className={styles.ddLink}>Events</div>
                    <div className={styles.ddLink}>Get Involved</div>
                    <div className={styles.ddLinkContact}>Contact Us</div>
                </div>
            </div>
            : 
            <div className={styles.Header}>
                <Link href="/">
                    <a className={styles.headerLogoContainer}>
                        <Image src={sxlogo} className={styles.HeaderLogo}></Image>
                    </a>
                </Link>
                
                <div className={styles.pagesContainerHeader}>
                    <a className={styles.headerPageLink}>ABOUT</a>
                    <a className={styles.headerPageLink}>JOIN</a>
                    <a className={styles.headerPageLink}>LEARN</a>
                    <Link href="/contact">
                        <a className={styles.headerPageLink}>CONTACT</a>
                    </Link>
                    <a className={styles.headerPageLink}><span className={styles.yellow}><u>SX TOOLBOX</u></span></a>
                </div>
                <div className={styles.pagesDropDown}>
                    <div className={styles.headerLogoContainer}>
                        <Image src={hamburger} onClick={() => {
                            setDropdown(true)
                        }}></Image>
                    </div>
                </div>
            </div>
            } 
        </div>
         
    )
}