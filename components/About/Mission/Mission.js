import styles from './Mission.module.css'
import Image from 'next/image'
import Link from 'next/link'
import partneringImage from '../../../assets/images/partneringImage.png'

const Mission = () => {
    return (
        <div className={styles.Mission}>
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
                    <div className={styles.MissionDesc}>As the only startup accelerator run exclusively by and for Georgia Tech students, Startup Exchange has access to Atlanta's network of venture capitalists, investors, and proven founders.
                    We connect students with our network across the Atlanta venture ecosystem to ensure our startups thrive.
                    </div>
                </div>
            <div className={styles.PartneringDivContainer}>
                <div className={styles.PartneringSubSubHeading}>Community-First</div>
                    <div className={styles.MissionDesc}>Startup Exchange is community first. 
                    We believe that founding companies is not a one-person show – it takes a village to launch something great. 
                    That’s why we work tirelessly to form bonds, share information, and drive collaborative innovation across the SX cohort. 
                    The Georgia Tech community has changed all of our lives. We take every chance we can to reinvest in the community and grow its reach.
                    </div>
            </div>
            <div className={styles.PartneringDivContainer}>
                <div className={styles.PartneringSubSubHeading}>For students, by students</div>
                    <div className={styles.MissionDesc}>As the only equity-free student-run accelerator at Georgia Tech, our only interest is you. 
                    We believe that being a student is an asset, not a liability. 
                    Wherever you’re headed, Startup Exchange will help get you there.
                    </div>
            </div>
            <div className={styles.PartneringDivContainer}>
                <div className={styles.PartneringSubSubHeading}>Bring the new</div>
                    <div className={styles.MissionDesc}>We help entrepreneurs build the future, now. 
                    That starts with the next wave of founders married to the cutting edge in technology, creativity and strategy. 
                    Our founders bring us the best of the next, and we in turn help pull the future into the present.
                    </div>
            </div>
        </div>
    )
}

export default Mission