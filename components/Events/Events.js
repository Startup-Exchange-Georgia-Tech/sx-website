import styles from './Events.module.css'
import Image from 'next/image'
import sxrocket from '../../assets/images/sxrocket.png'
import eventsImage from '../../assets/images/eventsimage.png'

export default function Events() {
    return (
        <div className={styles.Events}>
            <div className={styles.EventsText}>EVENTS</div>
            <div className={styles.EventsCardContainer}>
                <div className={styles.EventsCard}>
                    <Image src={sxrocket}></Image>
                    <div className={styles.EventsCardHeading}>PITCH PERFECT</div>
                    <div className={styles.EventsCardBody}>Our end-of-the-year pitch competition for all SX Fellowship teams. Gain feedback from professionals, as well as exposure to meaningful connections in the startup world.</div>
                </div>
                <div className={styles.EventsCard}>
                    <Image src={sxrocket}></Image>
                    <div className={styles.EventsCardHeading}>PITCH PERFECT</div>
                    <div className={styles.EventsCardBody}>Our end-of-the-year pitch competition for all SX Fellowship teams. Gain feedback from professionals, as well as exposure to meaningful connections in the startup world.</div>
                </div>
                <div className={styles.EventsCard}>
                    <Image src={sxrocket}></Image>
                    <div className={styles.EventsCardHeading}>PITCH PERFECT</div>
                    <div className={styles.EventsCardBody}>Our end-of-the-year pitch competition for all SX Fellowship teams. Gain feedback from professionals, as well as exposure to meaningful connections in the startup world.</div>
                </div>
            </div>
            <div className={styles.eventsImageContainer}>
                <Image src={eventsImage}></Image>
            </div>
            
        </div>
    )
}