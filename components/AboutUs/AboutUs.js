import styles from './AboutUs.module.css'
import aboutusimage from '../../assets/images/aboutus.png'
import Image from 'next/image'
import arrow from '../../assets/images/Arrow.png'

export default function AboutUs() {
    return (
        <div className={styles.AboutUs}>
            <div className={styles.AboutUsLeft}>
                <div className={styles.AboutUsText}>ABOUT US</div>
                <div className={styles.AboutUsHeading}>From Concept to Prototype</div>
                <div className={styles.AboutUsBody}>Startup Exchange is the largest entrepreneurship community at Georgia Tech. Our mission is to build a passionate community of  Georgia Tech students interested in entrepreneurship by providing a hub for members to connect, collaborate, and innovate.<br></br><br></br>
Through shared experiences and collective learning, our professional network empowers students at all levels of entrepreneurship to develop the digital and financial literacy to become leaders in the venture management ecosystem.</div>
                <div className={styles.eventLinkContainer}>
                    <div className={styles.eventLink}>LEARN MORE</div>
                    <div className={styles.arrowContainer}>
                        <Image src={arrow}></Image>
                    </div>
                </div>
            </div>
            <div className={styles.AboutUsRight}>
                <Image src={aboutusimage} ></Image>
            </div>

        </div>
    )
}