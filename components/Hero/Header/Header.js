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
                    <Link href="/">
                        <div className={styles.ddLink}>Home</div>
                    </Link>
                    <Link href="/#AboutUs">
                        <div className={styles.ddLink}>About</div>
                    </Link>
                    <Link href="/#Join">
                        <div className={styles.ddLink}>Join</div>
                    </Link>
                    
                    <div className={styles.ddLink}>Learn</div>
                    <Link href="/contact">
                        <div className={styles.ddLinkContact}>Contact</div>
                    </Link>
                    
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
                    <Link href="/#AboutUs">
                        <a className={styles.headerPageLink}>ABOUT</a>
                    </Link>
                    <Link href="/#Join">
                        <a className={styles.headerPageLink}>JOIN</a>
                    </Link>
                    
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