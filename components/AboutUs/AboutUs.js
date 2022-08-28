import styles from './AboutUs.module.css'
import aboutusimage from '../../assets/images/aboutus.png'
import Image from 'next/image'
import arrow from '../../assets/images/Arrow.png'
import Link from 'next/link'

export default function AboutUs() {
    return (
        <div className={styles.AboutUs} id="AboutUs">
            <div className={styles.AboutUsLeft}>
                <div className={styles.AboutUsText}>ABOUT US</div>
                <div className={styles.AboutUsHeading}>From Concept to Prototype</div>
                <div className={styles.AboutUsBody}>Startup Exchange is the largest entrepreneurship community at Georgia Tech. Our mission is to build a passionate community of  Georgia Tech students interested in entrepreneurship by providing a hub for members to <u>connect, collaborate, and innovate</u>.<br></br><br></br>
Through shared experiences and collective learning, our professional network empowers students at all levels of entrepreneurship to develop the digital and financial literacy to become leaders in the venture management ecosystem.</div>
                <Link href="#Join">
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