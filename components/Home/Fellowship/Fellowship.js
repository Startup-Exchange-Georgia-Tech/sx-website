import styles from './Fellowship.module.css'
import Image from 'next/image'
import arrow from '../../../assets/images/Arrow.png'
import Link from 'next/link'

export default function Fellowship() {
    return (
        <div className={styles.Fellowship} id="Fellowship">
            <div className={styles.FellowshipLeft}>
                <video className={styles.FellowshipVideo} autoPlay muted loop>
                    <source src="videos/square.mp4" type="video/mp4"/>
                </video>
            </div>
            <div className={styles.FellowshipRight}>
                <div className={styles.FellowshipText}>ACCELERATOR PROGRAM</div>
                <div className={styles.FellowshipHeading}>Take your idea to the next level with SX Fellowship.</div>
                <div className={styles.FellowshipBody}>Work alongside industry leaders in a team of 2-5 to take your idea to the next level. Pitch in front of VCs, notable founders, and industry experts at our flagship event, <u><Link href="https://summit.startup.exchange">SX Summit ATL</Link></u>.<br/><br/>
                    Our Fellowship enables student founders to continue to build their idea. We offer the community to empower and inspire founders, as well as a network of readily-available mentors and industry experts.
                    </div>
                <Link href="/alumni">
                    <div className={styles.eventLink}>
                        VIEW ALUMNI COMPANIES
                        <span className={styles.arrowContainer}>
                            <Image src={arrow}></Image>
                        </span>
                    </div>
                </Link>
                
            </div>


        </div>
    )
}