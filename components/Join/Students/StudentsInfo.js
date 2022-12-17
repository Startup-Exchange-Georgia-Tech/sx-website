import styles from './StudentsInfo.module.css'
import Image from 'next/image'
import Link from 'next/link'
import partneringImage from '../../../assets/images/partneringImage.jpg'
import acceleratorImage from '../../../assets/images/acceleratorImage.jpg'
import membershipImage from '../../../assets/images/membershipImage.jpg'
import arrow from '../../../assets/images/Arrow.png'

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
            All slides and materials from our Fall 2022 class can be found in this <u><Link href="/">folder</Link></u>.
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
            <div className={styles.StudentsInfoSubHeading}>Questions about the curriculum? Email our Director of Mentorship for more information at <span className={styles.yellow}>apuroop@startup.exchange</span>.</div>
            

            <div className={styles.StudentsInfoImage}>
                <Image src={acceleratorImage} layout="responsive"></Image>
            </div>
            <div className={styles.StudentsInfoText}>ACCELERATOR</div>
            <div className={styles.StudentsInfoHeading}>Take your idea to the next level with SX Fellowship.</div>
            <div className={styles.StudentsInfoBody}>Have you already built something? Not sure what the next steps are after Startup Launch?
                With insight from notable mentors, your team of 2-5 can take your idea to the next level through Startup Exchange Fellowship! 
            <br/><br/>
            At the end of the semester, pitch in front of venture capitalists, notable founders, and industry experts at our flagship event, SX Summit ATL.
            We had over 300 students and 50 notable guests in attendance.
            <br/><br/>
            Our Fellowship enables student founders to continue to build their idea. 
            We offer the community to empower and inspire founders, as well as a network of readily-available mentors and industry experts.
            </div>
            <div className={styles.StudentsInfoDivContainer}>
                <div className={styles.StudentsInfoSubSubHeading}>Mentors</div>
                <div className={styles.StudentsInfoSubHeading}><u><Link href="">Nakia Melecio</Link></u><br/>
                    <u><Link href="">Josh Pinto Taylor</Link></u><br/>
                    <u><Link href="">Recha Reives</Link></u><br/>
                    <u><Link href="">Christopher Klaus</Link></u><br/>
                    <br/>
                    {/* <u><Link href="">Nakia Melecio</Link></u>  |  
                    <u><Link href="">Nakia Melecio</Link></u>  |  
                    <u><Link href="">Nakia Melecio</Link></u>
                    <br/> */}

                </div>

            </div>
            <div className={styles.StudentsInfoSubHeading}>Questions about SX Fellowship? Email our Director of Fellowship for more information at <span className={styles.yellow}>parth@startup.exchange</span>.</div>

            <div className={styles.StudentsInfoImage}>
                <Image src={membershipImage} layout="responsive"></Image>
            </div>
            <div className={styles.StudentsInfoText}>MEMBERSHIP</div>
            <div className={styles.StudentsInfoHeading}>Fostering community among student founders.</div>
            <div className={styles.StudentsInfoBody}>Building a startup is hard. As a student, it’s even harder.<br/><br/>
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
    )
}

export default StudentsInfo