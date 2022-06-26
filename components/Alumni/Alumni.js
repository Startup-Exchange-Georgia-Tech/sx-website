import styles from './Alumni.module.css'
import arrow from '../../assets/images/Arrow.png'
import Image from 'next/image'
import alumniImage from '../../assets/images/alumniImage.png'
import alumniCompanies from '../../assets/images/alumnicompanies.png'

export default function Alumni() {
    return (
        <div className={styles.Alumni}>
            <div className={styles.AlumniText}>SX ALUMNI</div>
            <div className={styles.AlumniContainer}>
                <div className={styles.AlumniLeft}>
                    <div className={styles.AlumniHeading}>Alumni Project Spotlight</div>
                    <div className={styles.AlumniBody}>Sola uses 70 years of data to develop a proprietary model to help homeowners access financial support immediately following the devastation of a tornado.</div>
                    <div className={styles.checkoutContainer}>
                        <div className={styles.AlumniCheckout}>CHECK OUT SOLA</div>
                        <div className={styles.arrowContainer}>
                            <Image src={arrow}></Image>
                        </div>
                    </div>
                    <div className={styles.alumniImageContainer}>
                        <Image src={alumniImage} layout="responsive"></Image>
                    </div>
                </div>
                <div className={styles.AlumniRight}>
                    <div className={styles.AlumniCardHeading}>Alumni Employment</div>
                    <div className={styles.AlumniCompanyContainer}>
                        <Image src={alumniCompanies} layout="responsive"></Image>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}