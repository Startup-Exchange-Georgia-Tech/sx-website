import styles from './Alumni.module.css'
import arrow from '../../assets/images/Arrow.png'
import Image from 'next/image'
import alumniImage from '../../assets/images/alumniImage.png'
import alumniCompanies from '../../assets/images/alumnicompanies.png'
import amazon from '../../assets/images/amazon.png'
import apple from '../../assets/images/apple.png'
import autodesk from '../../assets/images/autodesk.png'
import deloitte from '../../assets/images/deloitte.png'
import kliener from '../../assets/images/kliener.png'
import meta from '../../assets/images/meta.png'
import microsoft from '../../assets/images/microsoft.png'
import more from '../../assets/images/more.png'
import tesla from '../../assets/images/tesla.png'
import blackstone from '../../assets/images/blackstone-logo.png'
import google from '../../assets/images/google.png'
import jpmorgan from '../../assets/images/jpmorgan.png'
import Link from 'next/link'


export default function Alumni() {
    return (
        
        <div className={styles.Alumni} id="Alumni">
            <div className={styles.AlumniText}>SX ALUMNI</div>
            <div className={styles.AlumniContainer}>
                <div className={styles.AlumniLeft}>
                    <div className={styles.AlumniHeading}>Alumni Project Spotlight</div> 
                    <div className={styles.AlumniBody}>Sola uses 70 years of data to develop a proprietary model to help homeowners access financial support immediately following the devastation of a tornado.</div>
                    <Link href="https://solainsurance.com/">
                        <div className={styles.AlumniCheckout}>
                            CHECK OUT SOLA
                            <span className={styles.arrowContainer}>
                                <Image src={arrow}></Image>
                            </span>
                        </div>
                    </Link>
                    
                    <div className={styles.alumniImageContainer}>
                        <Image src={alumniImage} layout="responsive"></Image>
                    </div>
                </div>
                <div className={styles.AlumniRight}>
                    <div className={styles.AlumniCardHeading}>Alumni Employment</div>
                    <div className={styles.AlumniCompanyContainer}>
                        <div className={styles.CompanyContainer}>
                            <div className={styles.CompanyImageContainer}>
                                <Image src={amazon} layout="responsive"></Image>
                            </div>
                            <div className={styles.CompanyName}>AMAZON</div>
                        </div>
                        <div className={styles.CompanyContainer}>
                            <div className={styles.CompanyImageContainer}>
                                <Image src={apple} layout="responsive"></Image>
                            </div>
                            <div className={styles.CompanyName}>APPLE</div>
                        </div>
                        <div className={styles.CompanyContainer}>
                            <div className={styles.CompanyImageContainer}>
                                <Image src={autodesk} layout="responsive"></Image>
                            </div>
                            <div className={styles.CompanyName}>AUTODESK</div>
                        </div>
                        <div className={styles.CompanyContainer}>
                            <div className={styles.CompanyImageContainer}>
                                <Image src={blackstone} layout="responsive"></Image>
                            </div>
                            <div className={styles.CompanyName}>BLACKSTONE</div>
                        </div>
                        <div className={styles.CompanyContainer}>
                            <div className={styles.CompanyImageContainer}>
                                <Image src={deloitte} layout="responsive"></Image>
                            </div>
                            <div className={styles.CompanyName}>DELOITTE</div>
                        </div>
                        <div className={styles.CompanyContainer}>
                            <div className={styles.CompanyImageContainer}>
                                <Image src={google} layout="responsive"></Image>
                            </div>
                            <div className={styles.CompanyName}>GOOGLE</div>
                        </div>
                        <div className={styles.CompanyContainer}>
                            <div className={styles.CompanyImageContainer}>
                                <Image src={jpmorgan} layout="responsive"></Image>
                            </div>
                            <div className={styles.CompanyName}>JPMORGAN</div>
                        </div>
                        <div className={styles.CompanyContainer}>
                            <div className={styles.CompanyImageContainer}>
                                <Image src={kliener} layout="responsive"></Image>
                            </div>
                            <div className={styles.CompanyName}>KLEINER PERKINS</div>
                        </div>
                        <div className={styles.CompanyContainer}>
                            <div className={styles.CompanyImageContainer}>
                                <Image src={microsoft} layout="responsive"></Image>
                            </div>
                            <div className={styles.CompanyName}>MICROSOFT</div>
                        </div>
                        <div className={styles.CompanyContainer}>
                            <div className={styles.CompanyImageContainer}>
                                <Image src={meta} layout="responsive"></Image>
                            </div>
                            <div className={styles.CompanyName}>META</div>
                        </div>
                        <div className={styles.CompanyContainer}>
                            <div className={styles.CompanyImageContainer}>
                                <Image src={tesla} layout="responsive"></Image>
                            </div>
                            <div className={styles.CompanyName}>TESLA</div>
                        </div>
                        <div className={styles.CompanyContainer}>
                            <div className={styles.CompanyImageContainer}>
                                <Image src={more} layout="responsive"></Image>
                            </div>
                            <div className={styles.CompanyName}>AND MORE</div>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}