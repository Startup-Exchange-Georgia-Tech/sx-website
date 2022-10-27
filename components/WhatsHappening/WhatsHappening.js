import Link from 'next/link'
import styles from './WhatsHappening.module.css'

export default function WhatsHappening() {
    return (
        <div className={styles.WhatsHappening}>
            <div className={styles.WhatsHappeningLeft}>
                <div className={styles.WhatsHappeningText}>WHAT'S HAPPENING NOW</div>
                {/* <div className={styles.WhatsHappeningHeading}>APPLICATIONS FOR THE FALL 2022 COHORT ARE OPEN!</div> */}
                <div className={styles.WhatsHappeningHeading}>BUILD OUR COMMUNITY OF CURRENT & BUDDING FOUNDERS!</div>
            </div>
            <div className={styles.WhatsHappeningRight}>
                <div className={styles.WhatsHappeningCard}>
                    <div className={styles.WhatsHappeningCardHeading}>Previous founder looking for community?</div>
                    <div className={styles.WhatsHappeningCardBody}>Apply for an Associate Membership! Connect with other founders at GT + access our member-only resources.</div>
                    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdRIIkSrl7n8Yt9LZyFvVN-oW2ufwVyRiPIa_9iEfq17-g2fg/viewform">
                        <div className={styles.WhatsHappeningCardLearn}>Apply Now</div>
                    </Link>
                </div>
                <div className={styles.WhatsHappeningCard}>
                    <div className={styles.WhatsHappeningCardHeading}>Want to help grow the community?</div>
                    <div className={styles.WhatsHappeningCardBody}>Join our community slack + contribute to current community initiatives, or share any ideas that you may have!</div>
                    <Link href="https://join.slack.com/t/sx-members/shared_invite/zt-1g9igwn8h-hGy6idk9609~Y4OEWeiOYw">
                        <div className={styles.WhatsHappeningCardLearn}>Join Slack</div>
                    </Link>
                </div>
                {/* <div className={styles.WhatsHappeningCard}>
                    <div className={styles.WhatsHappeningCardHeading}>New Member</div>
                    <div className={styles.WhatsHappeningCardBody}>For the problem-solvers with rad skills and like working on cool stuff.

And want to learn the ropes of entrepreneurship. Apply now!</div>
                    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSc_AEgeYP63jxW2dZr-iX-3VxVQq78r3v-HqCdsUWaGSH4OTg/viewform">
                        <div className={styles.WhatsHappeningCardLearn}>Apply Now</div>
                    </Link>
                </div>
                <div className={styles.WhatsHappeningCard}>
                    <div className={styles.WhatsHappeningCardHeading}>Fellowship</div>
                    <div className={styles.WhatsHappeningCardBody}>For the builders looking to turn their new idea into the next unicorn.

Teams of 2-5. Apply now!</div>
                    <Link href="https://gatech.co1.qualtrics.com/jfe/form/SV_9zPz80hHAqyYJka">
                        <div className={styles.WhatsHappeningCardLearn}>Apply Now</div>
                    </Link>
                    
                </div> */}
            </div>
        </div>
    )
}