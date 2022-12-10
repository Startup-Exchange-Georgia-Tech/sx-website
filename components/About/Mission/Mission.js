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
                <div className={styles.PartneringSubSubHeading}>FreightWaves</div>
                    <div className={styles.MissionDesc}>We grow the next generation of world-changing entrepreneurs and companies. 
                        But no great journey is a straight line. That’s why we provide a safe space for exploration, so entrepreneurs can crash fast and keep building. 
                        Ten weeks later, it’s only upward.</div>
            </div>
            <div className={styles.PartneringDivContainer}>
                <div className={styles.PartneringSubSubHeading}>EIN News</div>
                <Link href="https://www.einnews.com/pr_news/605075100/the-future-of-school-snaps-up-key-talent-with-eyes-for-100k-students">
                    <div className={styles.MissionDesc}><u>The Future of School Snaps Up Key Talent with Eyes for 100K Students</u></div>
                </Link>
            </div>
            <div className={styles.PartneringDivContainer}>
                <div className={styles.PartneringSubSubHeading}>TalkBusiness</div>
                <Link href="https://talkbusiness.net/2021/03/bentonville-startup-ox-lands-3-5-million-in-seed-funding/">
                    <div className={styles.MissionDesc}><u>Bentonville startup Ox lands $3.5 million in seed funding</u></div>
                </Link>
            </div>
            <div className={styles.PartneringDivContainer}>
                <div className={styles.PartneringSubSubHeading}>InsiderBusiness</div>
                <Link href="https://www.youtube.com/watch?v=VT9AuMNQUMU">
                    <div className={styles.AlumniDesc}><u>How One Young Entrepreneur Discovered A Way to Improve Supply Chain Logistics With Augmented Reality</u></div>
                </Link>
            </div>
            <div className={styles.PartneringDivContainer}>
                <div className={styles.PartneringSubSubHeading}>InVenture Prize</div>
                <Link href="http://news.gatech.edu/news/2022/03/17/team-sola-wins-2022-georgia-tech-inventure-prize">
                    <div className={styles.AlumniDesc}><u>Team Sola Wins 2022 Georgia Tech InVenture Prize</u></div>
                </Link>
            </div>
        </div>
    )
}

export default Mission