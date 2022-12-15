import styles from './CurrentPartners.module.css'
import Image from 'next/image';
import partners from '../../../assets/images/SXsponsors.png'

const CurrentPartners = () => {
    return (
        <div className={styles.CurrentPartners}>
            <div className={styles.CurrentPartnersText}>OUR CURRENT PARTNERS</div>
            <Image src={partners}></Image>
        </div>
    )
}

export default CurrentPartners;