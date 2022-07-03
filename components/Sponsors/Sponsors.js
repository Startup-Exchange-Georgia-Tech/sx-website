import styles from './Sponsors.module.css'
import Image from 'next/image';
import SXsponsors from '../../assets/images/SXsponsors.png'

const Sponsors = () => {
    return (
        <div className={styles.Sponsors}>
            <div className={styles.SponsorsText}>OUR SPONSORS</div>
            <Image src={SXsponsors} layout="responsive"></Image>
        </div>
    )
}

export default Sponsors;