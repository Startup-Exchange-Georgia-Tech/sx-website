import styles from './AlumniNews.module.css'
import Image from 'next/image'
import Link from 'next/link'

const AlumniNews = () => {
    return (
        <div className={styles.Alumni}>
            <div className={styles.AlumniText}>ALUMNI IN THE NEWS</div>
            <div className={styles.AlumniHeading}>Enabling world-class, impactful ideas.</div>

            <div>
                <div className={styles.AlumniSubSubHeading}>FreightWaves</div>
                <Link href="https://www.freightwaves.com/news/cloud-supply-chain-firm-stord-raises-120-million-led-by-franklin-templeton">
                    <div className={styles.AlumniDesc}><u>Cloud supply chain firm Stord adds $120M in new funding at $1.3B valuation</u></div>
                </Link>
            </div>
            <div className={styles.AlumniDivContainer}>
                <div className={styles.AlumniSubSubHeading}>EIN News</div>
                <Link href="https://www.einnews.com/pr_news/605075100/the-future-of-school-snaps-up-key-talent-with-eyes-for-100k-students">
                    <div className={styles.AlumniDesc}><u>The Future of School Snaps Up Key Talent with Eyes for 100K Students</u></div>
                </Link>
            </div>
            <div className={styles.AlumniDivContainer}>
                <div className={styles.AlumniSubSubHeading}>TalkBusiness</div>
                <Link href="https://talkbusiness.net/2021/03/bentonville-startup-ox-lands-3-5-million-in-seed-funding/">
                    <div className={styles.AlumniDesc}><u>Bentonville startup Ox lands $3.5 million in seed funding</u></div>
                </Link>
            </div>
            <div className={styles.AlumniDivContainer}>
                <div className={styles.AlumniSubSubHeading}>InsiderBusiness</div>
                <Link href="https://www.youtube.com/watch?v=VT9AuMNQUMU">
                    <div className={styles.AlumniDesc}><u>How One Young Entrepreneur Discovered A Way to Improve Supply Chain Logistics With Augmented Reality</u></div>
                </Link>
            </div>
            <div className={styles.AlumniDivContainer}>
                <div className={styles.AlumniSubSubHeading}>InVenture Prize</div>
                <Link href="http://news.gatech.edu/news/2022/03/17/team-sola-wins-2022-georgia-tech-inventure-prize">
                    <div className={styles.AlumniDesc}><u>Team Sola Wins 2022 Georgia Tech InVenture Prize</u></div>
                </Link>
            </div>
        </div>
    )
}

export default AlumniNews