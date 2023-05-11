import Image from "next/image";
import sxlogo from "../../../assets/images/SXprimarylogo.png";
import sxlogo2 from "../../../assets/images/SXsecondarylogoW.png";
import styles from "./Header.module.css";
import Link from "next/link";
import hamburger from "../../../assets/images/hamburger.png";
import { useState } from "react";
import ddClose from "../../../assets/images/ddClose.png";

export default function Header() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className={styles.HeaderContainer}>
      {dropdown ? (
        <div className={styles.HeaderDropDown}>
          <div
            className={styles.ddClose}
            onClick={() => {
              setDropdown(false);
            }}
          >
            <Image src={ddClose}></Image>
          </div>
          <div className={styles.dropdownLogo}>
            <Image src={sxlogo2}></Image>
          </div>
          <div className={styles.dropdownLinks}>
            <Link href="/">
              <div className={styles.ddLink}>Home</div>
            </Link>
            <Link href="/about">
              <div className={styles.ddLink}>About</div>
            </Link>
            <Link href="/students">
              <div className={styles.ddLink}>Join Us</div>
            </Link>
            <Link href="/alumni">
              <div className={styles.ddLink}>Alumni</div>
            </Link>
            <Link href="/initiatives">
              <div className={styles.ddLink}>Initiatives</div>
            </Link>
            <Link href="https://startupexchange.notion.site/Georgia-Tech-s-Entrepreneurship-Ecosystem-658b9ef658da4ba7bb8d4cbdc470a387">
              <div className={styles.ddLink}>Ecosystem</div>
            </Link>
            <Link href="https://summit.startup.exchange">
              <div className={styles.ddLink}>Conference</div>
            </Link>
          </div>
        </div>
      ) : (
        <div className={styles.Header}>
          <Link href="/">
            <a className={styles.headerLogoContainer}>
              <Image src={sxlogo} className={styles.HeaderLogo}></Image>
            </a>
          </Link>

          <div className={styles.pagesContainerHeader}>
            <Link href="/about">
              <a className={styles.headerPageLink}>ABOUT</a>
            </Link>
            <Link href="/students">
              <a className={styles.headerPageLink}>JOIN US</a>
            </Link>

            <Link href="/alumni">
              <a className={styles.headerPageLink}>ALUMNI</a>
            </Link>
            <Link href="/initiatives">
              <a className={styles.headerPageLink}>INITIATIVES</a>
            </Link>
            <Link href="https://startupexchange.notion.site/Georgia-Tech-s-Entrepreneurship-Ecosystem-658b9ef658da4ba7bb8d4cbdc470a387">
              <a className={styles.headerPageLink}>ECOSYSTEM</a>
            </Link>
            <Link href="https://summit.startup.exchange">
              <a className={styles.headerPageLink}>
                CONFERENCE
              </a>
            </Link>
          </div>
          <div className={styles.pagesDropDown}>
            <div className={styles.headerLogoContainer}>
              <Image
                src={hamburger}
                onClick={() => {
                  setDropdown(true);
                }}
              ></Image>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
