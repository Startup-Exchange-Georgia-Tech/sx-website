import styles from './Partnering.module.css'
import Image from 'next/image'
import partneringImage from '../../assets/images/partneringImage.png'

const Partnering = () => {
    return (
        <div className={styles.Partnering}>
            <div className={styles.PartneringHeading}>Partnering with SX</div>
            <div className={styles.PartneringSubHeading}>Our partners receive exclusive networking and recruiting opportunities with Georgia Tech students, access to our private mailing list, invitations to future events, and more.</div>
            <div className={styles.PartneringDivContainer}>
                <div className={styles.PartneringSubSubHeading}>Events</div>
                <div className={styles.PartneringBody}>We welcome speakers from all industries and walks of life looking to host all kinds of different events. Seasoned experts can sit on panels, run workshops, and lead seminars on carefully selected topics.</div>
            </div>
            <div className={styles.PartneringDivContainer}>
                <div className={styles.PartneringSubSubHeading}>Recruiting</div>
                <div className={styles.PartneringBody}>Bolster your campus recruiting efforts with help from SX. Our team can plan and tailor personalized marketing campaigns, organize coffee chats, and help with anything you have in mind.</div>
            </div>
            <div className={styles.PartneringSubHeading}>Gain access to the SX members resume book to connect with Georgia Tech’s most entrepreneurial-minded students.</div>
            <div className={styles.PartneringDivContainer}>
                <div className={styles.PartneringSubSubHeading}>Sourcing</div>
                <div className={styles.PartneringBody}>If you are a VC, entrepreneur, founder, professor, executive, angel, lawyer, recruiter, or simply interested in the SX community, we will work with you to foster a meaningful relationship.</div>
            </div>
            <div className={styles.PartneringSubHeading}>Past event types have included information sessions, panels, workshops, recruiting and networking evenings, sharing of personal stories, and Q&As. </div>
            <div className={styles.PartneringSubHeading}>Email us for more information at <span className={styles.yellow}>vani@startup.exchange</span>.</div>
            <div className={styles.PartneringImage}>
                <Image src={partneringImage} layout="responsive"></Image>
            </div>
            <div className={styles.PartneringHeading}>Interested in mentoring our students?</div>
            <div className={styles.PartneringDivContainer}>
                <div className={styles.PartneringSubSubHeading}>What does a mentor do?</div>
                <div className={styles.PartneringBody}>We are actively growing our diverse list of mentors to jumpstart student entrepreneurship talent.  Our mentors dedicate around 30 to 40 minutes per week to meet with Fellowship teams during the 10 week program, providing valuable feedback to the team’s idea.</div>
            </div>
            <div className={styles.PartneringSubHeading}>Email us at <span className={styles.yellow}>parth@startup.exchange</span> to get started!</div>
        </div>
    )
}

export default Partnering