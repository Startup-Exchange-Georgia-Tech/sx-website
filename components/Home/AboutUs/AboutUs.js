import styles from './AboutUs.module.css'
import aboutusimage from '../../../assets/images/aboutus.png'
import Image from 'next/image'
import arrow from '../../../assets/images/Arrow.png'
import Link from 'next/link'

export default function AboutUs() {
    return (
        <div className={styles.AboutUs} id="AboutUs">
            <div className={styles.AboutUsLeft}>
                <div className={styles.AboutUsText}>ABOUT US</div>
                <div className={styles.AboutUsHeading}>Students helping students on their entrepreneurship journeys.</div>
                <div className={styles.AboutUsBody}>Georgia Tech Startup Exchange cultivates a close-knit community of student entrepreneurs 
                    at GT by connecting members with our robust network of mentors, investors, and industry experts. 
                    Our mission is to inspire the development of ventures by cultivating a hub for members to <u> connect</u>, <u>collaborate</u>, and <u>innovate</u>.<br></br><br></br>
                    Through our student accelerator program, mentorship program, and our founder membership, SX empowers students at all levels of entrepreneurship 
                    to develop the literacy to build their own ventures.</div>
                <Link href="/about">
                    <div className={styles.eventLink}>
                        <span className={styles.arrowContainer}>
                            <Image src={arrow}></Image>
                        </span>
                        LEARN MORE
                    </div>
                </Link>
                
            </div>
            <div className={styles.AboutUsRight}>
                <video className={styles.AboutUsVideo} autoPlay muted loop>
                    <source src="videos/square.mp4" type="video/mp4"/>
                </video>
            </div>

        </div>
    )
}