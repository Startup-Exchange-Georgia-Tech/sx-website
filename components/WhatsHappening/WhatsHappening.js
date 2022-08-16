import Link from 'next/link'
import styles from './WhatsHappening.module.css'

export default function WhatsHappening() {
    return (
        <div className={styles.WhatsHappening}>
            <div className={styles.WhatsHappeningLeft}>
                <div className={styles.WhatsHappeningText}>WHAT'S HAPPENING NOW</div>
                <div className={styles.WhatsHappeningHeading}>APPLICATIONS FOR THE FALL 2022 COHORT ARE OPEN!</div>
            </div>
            <div className={styles.WhatsHappeningRight}>
                <div className={styles.WhatsHappeningCard}>
                    <div className={styles.WhatsHappeningCardHeading}>New Member</div>
                    <div className={styles.WhatsHappeningCardBody}>For the problem-solvers with rad skills and like working on cool stuff.

And want to learn the ropes of entrepreneurship. Apply now!</div>
                    <div className={styles.WhatsHappeningCardLearn}>Learn More</div>
                </div>
                <div className={styles.WhatsHappeningCard}>
                    <div className={styles.WhatsHappeningCardHeading}>Fellowship</div>
                    <div className={styles.WhatsHappeningCardBody}>For the builders looking to turn their new idea into the next unicorn.

Teams of 2-5. Apply now!</div>
                    <Link href="https://gatech.co1.qualtrics.com/jfe/form/SV_9zPz80hHAqyYJka">
                        <div className={styles.WhatsHappeningCardLearn}>Learn More</div>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}