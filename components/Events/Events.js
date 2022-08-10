import styles from './Events.module.css'
import Image from 'next/image'
import sxrocket from '../../assets/images/sxrocket.png'
import eventsImage from '../../assets/images/eventsimage.png'
import fireside from '../../assets/images/fireside.png'
import socials from '../../assets/images/socials.png'
import workshop from '../../assets/images/workshop.png'
import pitch from '../../assets/images/pitch.png'

export default function Events() {
    return (
        <div className={styles.Events}>
            <div className={styles.EventsText}>EVENTS</div>
            <div className={styles.EventsCardContainer}>
                <div className={styles.EventsCard}>
                    <div className={styles.EventsImageContainer}>
                        <Image src={fireside} layout="responsive"></Image>
                    </div>  
                    
                    
                    <div className={styles.EventsContentContainer}>
                        <div className={styles.EventsCardHeading}>FIRESIDE CHATS</div>
                        <div className={styles.EventsCardBody}>Providing a direct pipeline to cutting-edge thought in industry and professional practice, Fireside Chats are opportunities for students to receive immediate and critical feedback on their ideas.</div>
                    </div>
                    
                </div>
                <div className={styles.EventsCard}>
                    <div className={styles.EventsImageContainer}>
                        <Image src={socials} layout="responsive"></Image>
                    </div>
                    <div className={styles.EventsContentContainer}>
                        <div className={styles.EventsCardHeading}>SOCIALS</div>
                        <div className={styles.EventsCardBody}>Social events are an opportunity for each new cohort of new members and fellows to get to know each other. Bond with your fellow cohort members and SX alumni!</div>
                    </div>

                </div>
                <div className={styles.EventsCard}>
                    <div className={styles.EventsImageContainer}>
                        <Image src={workshop} layout="responsive"></Image>
                    </div>
                    <div className={styles.EventsContentContainer}>
                        <div className={styles.EventsCardHeading}>WORKSHOPS</div>
                        <div className={styles.EventsCardBody}>Topics range from Intro to React to Customer Discovery to  Venture Capital. <br></br><br></br>Add to your toolbox via leaders from several different industries, as well as SX alums and GT student leaders.</div>
                    </div>
                    
                </div>
                <div className={styles.EventsCard}>
                    <div className={styles.EventsImageContainer}>
                        <Image src={pitch} layout="responsive"></Image>
                    </div>
                    <div className={styles.EventsContentContainer}>
                        <div className={styles.EventsCardHeading}>PITCH PERFECT</div>
                        <div className={styles.EventsCardBody}>Our end-of-year pitch competition for all SX Fellowship teams. Gain feedback from founders, as well as exposure to meaningful connections in the startup world.</div>
                    </div>
                    
                </div>
            </div>
            <div className={styles.eventsImageContainer}>
                <Image src={eventsImage}></Image>
            </div>
            
        </div>
    )
}