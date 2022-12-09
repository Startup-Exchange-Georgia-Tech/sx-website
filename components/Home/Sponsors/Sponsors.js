import styles from './Sponsors.module.css'
import Image from 'next/image';
import SXsponsors from '../../../assets/images/SXsponsors.png'
import Link from 'next/link'
import arrow from '../../../assets/images/Arrow.png'

const Sponsors = () => {
    return (
        <div className={styles.Sponsors}>
            <div className={styles.SponsorsText}>OUR SPONSORS</div>
            <div className={styles.SponsorsHeading}>We're backed by the best.</div> 
            <Image src={SXsponsors} layout="responsive"></Image>
            <Link href="#Join">
                    <div className={styles.eventLink}>
                        <span className={styles.arrowContainer}>
                            <Image src={arrow}></Image>
                        </span>
                        JOIN US
                    </div>
                </Link>
        </div>
    )
}

export default Sponsors;