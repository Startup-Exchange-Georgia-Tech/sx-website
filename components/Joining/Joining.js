import styles from './Joining.module.css'
import newmember from '../../assets/images/newmember.png'
import fellow from '../../assets/images/fellow.png'
import Image from 'next/image'

export default function Joining() {
    return (
        <div className={styles.Joining}>
            <div className={styles.Joiningtext}>JOINING SX</div>
            <div className={styles.JoiningHeading}>We’re building a community of “do-ers.”</div>
            <div className={styles.JoiningCardContainer}>
                <div className={styles.JoiningCard}>
                    <Image src={newmember}></Image>
                    <div className={styles.JoiningCardHeading}>NEW MEMBER</div>
                    <div className={styles.JoiningCardBody}>Creative problem-solvers looking to learn how to apply their skills to entrepreneurship.<br></br><br></br>
Participate in workshops, social events, and fireside chats alongside your cohort as you learn the ropes of entrepreneurship.</div>
                </div>
                <div className={styles.JoiningCard}>
                    <Image src={newmember}></Image>
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
                    <div className={styles.JoiningListHeading}>SX NEW MEMBER PROGRAM</div>
                    <div className={styles.JoiningListSubheading}>Join our New Member program if you:</div>
                    <ul>
                        <li>Are a designer, engineer, or product manager that works on cool stuff</li>
                        <li>Want to connect with other ambitious, creative problem-solvers at Tech</li>
                        <li>Want to dip their toes in entrepreneurship!</li>
                        
                    </ul>  
                </div>
            </div>
            <div className={styles.joinAction}>Follow @gtstartupexchange on social media, or subscribe to our mailing list for updates on our application season.</div>
        </div>
    )
}