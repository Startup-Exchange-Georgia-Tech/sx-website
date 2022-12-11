import styles from './Mission.module.css'
import Image from 'next/image'
import Link from 'next/link'
import partneringImage from '../../../assets/images/partneringImage.png'

const Mission = () => {
    return (
        <div className={styles.Partnering}>
            <div className={styles.MissionText}>OUR MISSION</div>
            <div className={styles.MissionHeading}>Providing GT entrepreneurs community, resources, and guidance.</div>

            <div className={styles.PartneringDivContainer}>
                <div className={styles.PartneringSubSubHeading}>Growth-minded</div>
                    <div className={styles.MissionDesc}>We grow the next generation of world-changing entrepreneurs and companies. 
                        But no great journey is a straight line. That’s why we provide a safe space for exploration, so entrepreneurs can crash fast and keep building. 
                        Ten weeks later, it’s only upward.
                    </div>
                </div>
            <div className={styles.PartneringDivContainer}>
                <div className={styles.PartneringSubSubHeading}>Steeped in Georgia Tech</div>
                    <div className={styles.MissionDesc}>As the only startup accelerator run exclusively by and for Stanford students, Cardinal Ventures has unique access to the campus that launched Silicon Valley.
                    We bring to bear world-leading mentors, talents, and resources from across Stanford’s broad network to ensure our startups thrive.
                    </div>
                </div>
            <div className={styles.PartneringDivContainer}>
                <div className={styles.PartneringSubSubHeading}>Community-First</div>
                    <div className={styles.MissionDesc}>Cardinal Ventures is community first. 
                    We believe that founding companies is not a one-person show – it takes a village to launch something great. 
                    That’s why we work tirelessly to form bonds, share information, and drive collaborative innovation across the CV cohort. 
                    The Stanford community has changed all of our lives. We take every chance we can to reinvest in the community and grow its reach.
                    </div>
            </div>
        </div>
    )
}

export default Mission