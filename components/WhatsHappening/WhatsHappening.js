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
                    <div className={styles.WhatsHappeningCardHeading}>Pitch Perfect</div>
                    <div className={styles.WhatsHappeningCardBody}>Our end of the semester pitch competition.<br></br><br></br>
April 22nd from 4-6:30 PM at the TSQ ATL Social Club.</div>
                    <div className={styles.WhatsHappeningCardLearn}>Learn More</div>
                </div>
                <div className={styles.WhatsHappeningCard}>
                    <div className={styles.WhatsHappeningCardHeading}>SX Toolbox</div>
                    <div className={styles.WhatsHappeningCardBody}>SX Toolbox is our open- access entrepreneurial curriculum, providing resources, workshops, and fireside chats to GT and the greater public.</div>
                    <div className={styles.WhatsHappeningCardLearn}>Learn More</div>
                </div>
            </div>
        </div>
    )
}