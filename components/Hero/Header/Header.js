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
                    <Link href="https://startupexchange.notion.site/SX-Toolbox-658b9ef658da4ba7bb8d4cbdc470a387">
                        <div className={styles.ddLink}>Learn</div>
                    </Link>
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
                    <Link href="https://startupexchange.notion.site/SX-Toolbox-658b9ef658da4ba7bb8d4cbdc470a387">
                        <a className={styles.headerPageLink}>LEARN</a>
                    </Link>
                    <Link href="/contact">
                        <a className={styles.headerPageLink}>CONTACT</a>
                    </Link>
                    <Link href="https://www.google.com/search?q=coming+soon&rlz=1C1RXQR_enUS970US970&sxsrf=ALiCzsZfqKcJzQ7lZqpnXi44y7yB0Vmowg:1664940615514&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjLp9aPk8j6AhW5mGoFHWlxAAoQ_AUoAXoECAIQAw&biw=1920&bih=929&dpr=17">
                    <a className={styles.headerPageLink}><span className={styles.yellow}><u>MEMBERS ONLY Hub</u></span></a>
                    </Link>
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