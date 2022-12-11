import styles from './Mentorship.module.css'
import Image from 'next/image'
import mentorship from '../../../assets/images/mentorshipPic.png'
import arrow from '../../../assets/images/Arrow.png'
import Link from 'next/link'

export default function Mentorship() {
    return (
        <div className={styles.Mentorship} id="Mentorship">
            <div className={styles.MentorshipLeft}>
                <div className={styles.MentorshipText}>MENTORSHIP</div>
                <div className={styles.MentorshipHeading}>Learn the ropes of entrepreneurship.</div>
                <div className={styles.MentorshipBody}>Learn the ropes of entrepreneurship through our 10-week course that covers topics ranging from customer discovery, to revenue channels.<br/><br/>
                    Our mentorship lowers the barrier to entry for students looking to break into the world of startups. During the course, students have the chance to develop a pitch, 
                    and to receive feedback that will enable them to bring the idea to life.<br/><br/>
                    The class is open to all Georgia Tech students. All materials are posted online so that anyone can follow and take the class on their own time.
                    </div>
                <Link href="/alumni">
                    <div className={styles.eventLink}>
                        VIEW COURSE SCHEDULE
                        <span className={styles.arrowContainer}>
                            <Image src={arrow}></Image>
                        </span>
                    </div>
                </Link>
            </div>
            <div className={styles.MentorshipRight}>
                <div className={styles.MentorshipPic}>
                    <Image src={mentorship}></Image>
                </div>
            </div>

        </div>
    )
}