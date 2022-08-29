import styles from './Joining.module.css'
import newmember from '../../assets/images/newmember.png'
import fellow from '../../assets/images/fellow.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Joining() {
    return (
        <div className={styles.Joining} id="Join">
            <div className={styles.Joiningtext}>JOINING SX</div>
            <div className={styles.JoiningHeading}>We’re building a <br /> community of “<span className={styles.yellow}>do-ers</span>.”</div>
            <div className={styles.JoiningCardContainer}>
                <div className={styles.JoiningCard}>
                    <Image src={newmember} alt = "new-member"></Image>
                    <div className={styles.JoiningCardHeading}>NEW MEMBER</div>
                    <div className={styles.JoiningCardBody}>Creative problem-solvers looking to learn how to apply their skills to entrepreneurship.<br></br><br></br>
Participate in workshops, social events, and fireside chats alongside your cohort as you learn the ropes of entrepreneurship.</div>
                </div>
                <div className={styles.JoiningCard}>
                    <Image src={fellow} alt = "fellow"></Image>
                    <div className={styles.JoiningCardHeading}>FELLOW</div>
                    <div className={styles.JoiningCardBody}>Builders that look to take the next step towards building out their idea and taking it to market.<br></br><br></br>
Work alongside industry leaders, and participate in workshops, socials, and fireside chats. Pitch your idea in front of VC firms.</div>
                </div>
            </div>
            <div className={styles.JoiningListContainer}>
                <div className={styles.JoiningList}>
                    <div className={styles.JoiningListHeading}>SX NEW MEMBER PROGRAM</div>
                    <div className={styles.JoiningListSubheading}>Join our New Member program if you:</div>
                    <ul>
                        <li>Are a designer, engineer, or product manager that works on cool stuff</li>
                        <li>Want to connect with other ambitious, creative problem-solvers at Tech</li>
                        <li>Want to dip their toes in entrepreneurship!</li>

                    </ul>  
                </div>
                <div className={styles.JoiningList}>
                    <div className={styles.JoiningListHeading}>SX FELLOWSHIP PROGRAM</div>
                    <div className={styles.JoiningListSubheading}>Join our Fellowship program if you:</div>
                    <ul>
                        <li>Are a team of 2-5 looking to build out your startup idea</li>
                        <li>Seek funding and mentorship from industry leaders</li>
                        <li>Want to connect with  current and budding entrepreneurs at Tech</li>
                        
                    </ul>  
                </div>
            </div>
            <div className={styles.joinAction}>
                <div className={styles.stayUp}>Stay up-to-date on our membership programs.</div>
                <Link href="https://www.instagram.com/gtstartupexchange/">
                    <div className={styles.follow}>Follow @gtstartupexchange</div>
                </Link>
                
            </div>
        </div>
    )
}