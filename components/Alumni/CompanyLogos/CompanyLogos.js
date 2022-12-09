import styles from './CompanyLogos.module.css'
import Image from 'next/image';
import partners from '../../../assets/images/SXsponsors.png'

const CompanyLogos = () => {
    return (
        <div className={styles.CurrentPartners}>
            <div className={styles.CurrentPartnersText}>A FAMILY OF SUCCESSFUL FOUNDERS</div>
        </div>
    )
}

export default CompanyLogos;