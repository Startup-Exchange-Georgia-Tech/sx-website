import styles from './StudentsInfo.module.css'
import Image from 'next/image'
import Link from 'next/link'
import partneringImage from '../../../assets/images/partneringImage.jpg'

const StudentsInfo = () => {
    return (
        <div className={styles.StudentsInfo}>
            <div className={styles.StudentsInfoImage}>
                <Image src={partneringImage} layout="responsive"></Image>
            </div>
            <div className={styles.StudentsInfoText}>MENTORSHIP</div>
            <div className={styles.StudentsInfoHeading}>Learn the ropes of entrepreneurship.</div>
            <div className={styles.StudentsInfoBody}>Learn the ropes of entrepreneurship through our 9-week course that covers topics ranging from customer discovery, to revenue channels.
            <br/><br/>
            Our mentorship lowers the barrier to entry for students looking to break into the world of startups. During the course, students have the chance to develop a pitch, and to receive feedback that will enable them to bring the idea to life.
            <br/><br/>
            The class is open to all Georgia Tech students. All materials are posted online so that anyone can follow and take the class on their own time.
            </div>
            <div className={styles.StudentsInfoDivContainer}>
                <div className={styles.StudentsInfoSubSubHeading}>Schedule</div>
                <div className={styles.StudentsInfoSubHeading}>Week 1: Intro to Startups and How They Work</div>
                <div className={styles.StudentsInfoSubHeading}>Week 2: Fundraising, VC, and Finance of Tech</div>
                <div className={styles.StudentsInfoSubHeading}>Week 3: Building Products that People Love</div>
                <div className={styles.StudentsInfoSubHeading}>Week 4: MVPs and starting a Startup from 0 → 1</div>
                <div className={styles.StudentsInfoSubHeading}>Week 5: What is web3, Principles of Crypto, Why Decentralization Matters</div>
                <div className={styles.StudentsInfoSubHeading}>Week 6: Building Companies that Grow and Last</div>
                <div className={styles.StudentsInfoSubHeading}>Week 7: Diving into Venture Capital</div>
                <div className={styles.StudentsInfoSubHeading}>Week 8: Building your career in tech</div>
                <div className={styles.StudentsInfoSubHeading}>Week 9: Startup Pitch</div>


            </div>
            <div className={styles.StudentsInfoSubHeading}>Past lectures have included guest lecturers, such as entrepreneurs <u>
                <Link href="https://hypepotamus.com/startup-news/upbeat-music-acquisition/">Seth Radman</Link></u>, <u><Link href="https://www.wsj.com/articles/supply-chain-startup-stord-reaches-1-3-billion-valuation-11652184003">Sean Henry</Link>
            </u>, and <u><Link href="https://www.croatiaweek.com/croatian-american-engineer-building-the-worlds-fastest-aircraft/">AJ Piplica</Link></u>.</div>
            <div className={styles.StudentsInfoSubHeading}>Email our Director of Mentorship for more information at <span className={styles.yellow}>apuroop@startup.exchange</span>.</div>

            <div className={styles.StudentsInfoHeading}>Interested in mentoring our students?</div>
            <div className={styles.StudentsInfoDivContainer}>
                <div className={styles.StudentsInfoSubSubHeading}>What does a mentor do?</div>
                <div className={styles.StudentsInfoBody}>We are actively growing our diverse list of mentors to jumpstart student entrepreneurship talent.  Our mentors dedicate around 30 to 40 minutes per week to meet with our accelerator teams during the 10 week program, providing valuable feedback to the team’s idea.</div>
            </div>
            <div className={styles.StudentsInfoSubHeading}>Email us at <span className={styles.yellow}>parth@startup.exchange</span> to get started!</div>
        </div>
    )
}

export default StudentsInfo