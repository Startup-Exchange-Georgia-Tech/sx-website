import styles from './CompanyLogos.module.css'
import Image from 'next/image';
import partners from '../../../assets/images/SXsponsors.png'

const CompanyLogos = () => {
    return (
        <div className={styles.CurrentPartners}>
            <div className={styles.CurrentPartnersText}>A FAMILY OF SUCCESSFUL FOUNDERS</div>
            <div className={styles.YearText}>2022</div>
            <div className={styles.YearText}>2021</div>
            <div className={styles.YearText}>2020</div>
            <div className={styles.YearText}>2019</div>
            <div className={styles.YearText}>2018</div>

            <div className={styles.YearText}>PRE-2018</div>
        </div>
    )
}

export default CompanyLogos;