import styles from './Membership.module.css'
import Image from 'next/image'
import membership from '../../../assets/images/membership.JPG'
import arrow from '../../../assets/images/Arrow.png'
import Link from 'next/link'

export default function Membership() {
    return (
        <div className={styles.Membership} id="Membership">
            <div className={styles.MembershipLeft}>
                <div className={styles.MembershipText}>MEMBERSHIP</div>
                <div className={styles.MembershipHeading}>Fostering community among student founders.</div>
                <div className={styles.MembershipBody}>Building a startup is hard. As a student, it’s even harder.<br/><br/>
                    Our membership offers student founders a chance to network and gain feedback from venture capitalists, previous founders,
                    industry experts, and other student founders.<br/><br/>
                    Beyond that, our membership offers a space for like-minded people to share their challenges, learnings,
                    passions, jokes, and more.<br/><br/>

                    <i>Apply via link below, and an exec member will review your application the following week.</i>
                </div>
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdRIIkSrl7n8Yt9LZyFvVN-oW2ufwVyRiPIa_9iEfq17-g2fg/viewform?usp=sf_link">
                    <div className={styles.eventLink}>
                        JOIN NOW
                        <span className={styles.arrowContainer}>
                            <Image src={arrow}></Image>
                        </span>
                    </div>
                </Link>
            </div>
            <div className={styles.MembershipRight}>
                <div className={styles.MembershipPic}>
                    <Image src={membership}></Image>
                </div>
            </div>

        </div>
    )
}