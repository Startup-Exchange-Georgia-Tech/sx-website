import styles from './ExecBoard.module.css'
import Image from 'next/image'
import exectest from '../../../assets/images/exectest.png'
import john from '../../../assets/images/john.png'
import aditya from '../../../assets/images/aditya.png'
import carter from '../../../assets/images/carter.png'
import mohit from '../../../assets/images/mohit.png'
import naz from '../../../assets/images/naz.png'
import sruti from '../../../assets/images/sruti.png'
import yatharth from '../../../assets/images/yatharth.png'
import apuroop from '../../../assets/images/apuroop.png'
import parth from '../../../assets/images/parth.png'
import tomer from '../../../assets/images/tomer.png'
import akabu from '../../../assets/images/akabu.png'
import sean from '../../../assets/images/sean.png'
import christopher from '../../../assets/images/christopher.png'
import yuma from '../../../assets/images/yuma.png'
import aazan from '../../../assets/images/aazan.png'
import divya from '../../../assets/images/divya.png'
import vani from '../../../assets/images/vani.png'
import wesley from '../../../assets/images/wesley.png'
import gary from '../../../assets/images/gary.png'
import isaac from '../../../assets/images/isaac.png'
import katie from '../../../assets/images/katie.png'
import jayp from '../../../assets/images/jayp.png'
import dakota from '../../../assets/images/dakota.png'
import yash from '../../../assets/images/yash.png'
import arjun from '../../../assets/images/arjun.png'
import om from '../../../assets/images/om.png'
import austin from '../../../assets/images/austin.png'
import chrisKlaus from '../../../assets/images/chrisKlaus.png'


export default function ExecBoard() {
    return (
        
        <div className={styles.ExecBoard} id="Exec">
            <div className={styles.ExecBoardText}>OUR EXECUTIVE BOARD</div>
                <div className={styles.ExecBoardHeading}>Executive Directors</div>
                <div className={styles.ExecBoardBody}>The 3 Executive Directors of SX move the organization forward while ensuring alignment with our vision. 
                They are selected for year-long terms and choose the new leadership for the Fall and Spring. 
                Each quarter, they report the performance and growth of the Georgia Tech founder community. 
                {/* Each senior director is also paired with a committee to help provide guidance. */}
                </div>
            <div className={styles.ExecBoardExecDirContainer}>
                <div className={styles.ExecBoardExecDirCard}>
                    <div className={styles.ExecBoardCardContainer}>
                        <div className={styles.ExecDirCardImageContainer}>
                            <Image src={aazan}></Image>
                        </div>
                        <div className={styles.ExecBoardCardName}>Aazan Khan</div>
                        <div className={styles.ExecBoardCardTitle}>EXECUTIVE DIRECTOR OF MEMBERSHIP</div><br/>
                        <div className={styles.ExecBoardCardEmail}>aazan@startup.exchange</div>
                    </div>
                </div>
                <div className={styles.ExecBoardExecDirCard}>
                    <div className={styles.ExecBoardCardContainer}>
                        <div className={styles.ExecDirCardImageContainer}>
                            <Image src={carter}></Image>
                        </div>
                        <div className={styles.ExecBoardCardName}>Carter Cote</div>
                        <div className={styles.ExecBoardCardTitle}>EXECUTIVE DIRECTOR OF STRATEGIC INITIATIVES</div>
                        <div className={styles.ExecBoardCardEmail}>carter@startup.exchange</div>
                    </div>
                </div>
                <div className={styles.ExecBoardExecDirCard}>
                    <div className={styles.ExecBoardCardContainer}>
                        <div className={styles.ExecDirCardImageContainer}>
                            <Image src={sean} width="179px" height="179px"></Image>
                        </div>
                        <div className={styles.ExecBoardCardName}>Sean Alexander</div>
                        <div className={styles.ExecBoardCardTitle}>EXECUTIVE DIRECTOR OF EXTERNAL RELATIONS</div>
                        <div className={styles.ExecBoardCardEmail}>sean@startup.exchange</div>
                    </div>
                </div>
            </div>

            <div className={styles.ExecBoardHeading}>Committee Leaders</div>
            <div className={styles.ExecBoardBody}>The Committee Directors are selected each semester and 
                are responsible for executive decisions related to the organization. Each committee helps to advance the organization's goals, and fall under one of the three executive co-director committees.
                </div>
            <div className={styles.ExecBoardContainer}>
                <div className={styles.ExecBoardCard}>
                    <div className={styles.ExecBoardCardContainer}>
                        <div className={styles.ExecBoardCardImageContainer}>
                            <Image src={apuroop}></Image>
                        </div>
                        <div className={styles.ExecBoardCardName}>Apuroop Mutyala</div>
                        <div className={styles.ExecBoardCardTitle}>DIRECTOR OF MENTORSHIP</div>
                        <div className={styles.ExecBoardCardEmail}>apuroop@startup.exchange</div>
                    </div>
                </div>
                <div className={styles.ExecBoardCard}>
                    <div className={styles.ExecBoardCardContainer}>
                        <div className={styles.ExecBoardCardImageContainer}>
                            <Image src={christopher}></Image>
                        </div>
                        <div className={styles.ExecBoardCardName}>Christopher Hur</div>
                        <div className={styles.ExecBoardCardTitle}>DIRECTOR OF VENTURE SCOUTS</div>
                        <div className={styles.ExecBoardCardEmail}>christopher@startup.exchange</div>
                    </div>
                </div>
                <div className={styles.ExecBoardCard}>
                    <div className={styles.ExecBoardCardContainer}>
                        <div className={styles.ExecBoardCardImageContainer}>
                            <Image src={jayp}></Image>
                        </div>
                        <div className={styles.ExecBoardCardName}>Jay Patel</div>
                        <div className={styles.ExecBoardCardTitle}>DIRECTOR OF EVENTS</div>
                        <div className={styles.ExecBoardCardEmail}>jay@startup.exchange</div>
                    </div>
                </div>
                <div className={styles.ExecBoardCard}>
                    <div className={styles.ExecBoardCardContainer}>
                        <div className={styles.ExecBoardCardImageContainer}>
                            <Image src={vani}></Image>
                        </div>
                        <div className={styles.ExecBoardCardName}>Vani Gupta</div>
                        <div className={styles.ExecBoardCardTitle}>DIRECTOR OF PARTNERSHIPS</div>
                        <div className={styles.ExecBoardCardEmail}>vani@startup.exchange</div>
                    </div>
                </div>
                <div className={styles.ExecBoardCard}>
                    <div className={styles.ExecBoardCardContainer}>
                        <div className={styles.ExecBoardCardImageContainer}>
                            <Image src={yatharth}></Image>
                        </div>
                        <div className={styles.ExecBoardCardName}>Yatharth Bhargava</div>
                        <div className={styles.ExecBoardCardTitle}>DIRECTOR OF MARKETING</div>
                        <div className={styles.ExecBoardCardEmail}>yatharth@startup.exchange</div>
                    </div>
                </div>
                {/* <div className={styles.ExecBoardCard}>
                    <div className={styles.ExecBoardCardContainer}>
                        <div className={styles.ExecBoardCardImageContainer}>
                            <Image src={aazan}></Image>
                        </div>
                        <div className={styles.ExecBoardCardName}>Aazan Khan</div>
                        <div className={styles.ExecBoardCardTitle}>CO-DIRECTOR OF FELLOWSHIP</div>
                        <div className={styles.ExecBoardCardEmail}>aazan@startup.exchange</div>
                    </div>
                </div> */}
                <div className={styles.ExecBoardCard}>
                    <div className={styles.ExecBoardCardContainer}>
                        <div className={styles.ExecBoardCardImageContainer}>
                            <Image src={parth}></Image>
                        </div>
                        <div className={styles.ExecBoardCardName}>Parth Arora</div>
                        <div className={styles.ExecBoardCardTitle}>DIRECTOR OF FELLOWSHIP</div>
                        <div className={styles.ExecBoardCardEmail}>parth@startup.exchange</div>
                    </div>
                </div>
                {/* <div className={styles.ExecBoardCard}>
                    <div className={styles.ExecBoardCardContainer}>
                        <div className={styles.ExecBoardCardImageContainer}>
                            <Image src={yuma} width="179px" height="179px"></Image>
                        </div>
                        <div className={styles.ExecBoardCardName}>Yuma Tanaka</div>
                        <div className={styles.ExecBoardCardTitle}>CO-DIRECTOR OF FELLOWSHIP</div>
                        <div className={styles.ExecBoardCardEmail}>yuma@startup.exchange</div>
                    </div>
                </div> */}
                                <div className={styles.ExecBoardCard}>
                    <div className={styles.ExecBoardCardContainer}>
                        <div className={styles.ExecBoardCardImageContainer}>
                            <Image src={om} width="179px" height="179px"></Image>
                        </div>
                        <div className={styles.ExecBoardCardName}>Om Jha</div>
                        <div className={styles.ExecBoardCardTitle}>DIRECTOR OF DESIGN</div>
                        <div className={styles.ExecBoardCardEmail}>om@startup.exchange</div>
                    </div>
                </div>

            </div>
            <div className={styles.ExecBoardHeading}>Associate Directors</div>
            <div className={styles.ExecBoardBody}>The Associate Directors report directly to their corresponding Committee Director.
                    They are chosen each semester, which enables executive board members to lead multiple initiatives.
                    </div>
            <div className={styles.ExecBoardContainer}>

                <div className={styles.ExecBoardCard}>
                    <div className={styles.ExecBoardCardContainer}>
                        {/* <div className={styles.ExecBoardCardImageContainer}>
                            <Image src={sruti}></Image>
                        </div> */}
                        <div className={styles.ExecBoardCardName}>Sruti Gandreti</div>
                        <div className={styles.ExecBoardCardTitle}>ASSOCIATE DIR. OF SOCIAL MEDIA</div>
                        <div className={styles.ExecBoardCardEmail}>sruti@startup.exchange</div>
                    </div>
                </div>

                {/* <div className={styles.ExecBoardCard}>
                    <div className={styles.ExecBoardCardContainer}>
                        <div className={styles.ExecBoardCardImageContainer}>
                            <Image src={akabu}></Image>
                        </div>
                        <div className={styles.ExecBoardCardName}>Aditya Kabu</div>
                        <div className={styles.ExecBoardCardTitle}>VENTURE SCOUT</div>
                        <div className={styles.ExecBoardCardEmail}>akabu@startup.exchange</div>
                    </div>
                </div>

                <div className={styles.ExecBoardCard}>
                    <div className={styles.ExecBoardCardContainer}>
                        <div className={styles.ExecBoardCardImageContainer}>
                            <Image src={tomer}></Image>
                        </div>
                        <div className={styles.ExecBoardCardName}>Tomer Shmul</div>
                        <div className={styles.ExecBoardCardTitle}>VENTURE SCOUT</div>
                        <div className={styles.ExecBoardCardEmail}>tomer@startup.exchange</div>
                    </div>
                </div> */}

                {/* <div className={styles.ExecBoardCard}>
                    <div className={styles.ExecBoardCardContainer}>
                        <div className={styles.ExecBoardCardImageContainer}>
                            <Image src={katie}></Image>
                        </div>
                        <div className={styles.ExecBoardCardName}>Katie Roberts</div>
                        <div className={styles.ExecBoardCardTitle}>MEMBERSHIP</div>
                        <div className={styles.ExecBoardCardEmail}>katie@startup.exchange</div>
                    </div>
                </div>
                <div className={styles.ExecBoardCard}>
                    <div className={styles.ExecBoardCardContainer}>
                        <div className={styles.ExecBoardCardImageContainer}>
                            <Image src={dakota}></Image>
                        </div>
                        <div className={styles.ExecBoardCardName}>Dakota Dudley</div>
                        <div className={styles.ExecBoardCardTitle}>FELLOWSHIP</div>
                        <div className={styles.ExecBoardCardEmail}>dakota@startup.exchange</div>
                    </div>
                </div>
                */}
                <div className={styles.ExecBoardCard}>
                    <div className={styles.ExecBoardCardContainer}>
                        {/* <div className={styles.ExecBoardCardImageContainer}>
                            <Image src={arjun} width="179px" height="179px"></Image>
                        </div> */}
                        <div className={styles.ExecBoardCardName}>Arjun Dewan</div>
                        <div className={styles.ExecBoardCardTitle}>ASSOCIATE DIR. OF DESIGN</div>
                        <div className={styles.ExecBoardCardEmail}>arjun@startup.exchange</div>
                    </div>
                </div>
                <div className={styles.ExecBoardCard}>
                    <div className={styles.ExecBoardCardContainer}>
                        {/* <div className={styles.ExecBoardCardImageContainer}>
                            <Image src={austin} width="179px" height="179px"></Image>
                        </div> */}
                        <div className={styles.ExecBoardCardName}>Aditya Shukla</div>
                        <div className={styles.ExecBoardCardTitle}>ASSOCIATE DIR. OF EVENTS</div>
                        <div className={styles.ExecBoardCardEmail}>aditya@startup.exchange</div>
                    </div>
                </div>
                <div className={styles.ExecBoardCard}>
                    <div className={styles.ExecBoardCardContainer}>
                        <div className={styles.ExecBoardCardName}>Apuroop Mutyala</div>
                        <div className={styles.ExecBoardCardTitle}>ASSOCIATE MEMBER</div>
                    </div>
                </div>
                <div className={styles.ExecBoardCard}>
                    <div className={styles.ExecBoardCardContainer}>
                        <div className={styles.ExecBoardCardName}>John Wright-Stanly</div>
                        <div className={styles.ExecBoardCardTitle}>ASSOCIATE MEMBER</div>
                    </div>
                </div>
                <div className={styles.ExecBoardCard}>
                    <div className={styles.ExecBoardCardContainer}>
                        <div className={styles.ExecBoardCardName}>Praneet Kedari</div>
                        <div className={styles.ExecBoardCardTitle}>ASSOCIATE MEMBER</div>
                    </div>
                </div>
                <div className={styles.ExecBoardCard}>
                    <div className={styles.ExecBoardCardContainer}>
                        <div className={styles.ExecBoardCardName}>Isaac Altman</div>
                        <div className={styles.ExecBoardCardTitle}>ASSOCIATE MEMBER</div>
                    </div>
                </div>
                <div className={styles.ExecBoardCard}>
                    <div className={styles.ExecBoardCardContainer}>
                        <div className={styles.ExecBoardCardName}>Mohit Pinninti</div>
                        <div className={styles.ExecBoardCardTitle}>ASSOCIATE MEMBER</div>
                    </div>
                </div>
                <div className={styles.ExecBoardCard}>
                    <div className={styles.ExecBoardCardContainer}>
                        <div className={styles.ExecBoardCardName}>Parth Arora</div>
                        <div className={styles.ExecBoardCardTitle}>ASSOCIATE MEMBER</div>
                    </div>
                </div>
                <div className={styles.ExecBoardCard}>
                    <div className={styles.ExecBoardCardContainer}>
                        <div className={styles.ExecBoardCardName}>Yash Vagal</div>
                        <div className={styles.ExecBoardCardTitle}>ASSOCIATE MEMBER</div>
                    </div>
                </div>
                <div className={styles.ExecBoardCard}>
                    <div className={styles.ExecBoardCardContainer}>
                        <div className={styles.ExecBoardCardName}>Yuma Tanaka</div>
                        <div className={styles.ExecBoardCardTitle}>ASSOCIATE MEMBER</div>
                    </div>
                </div>
            </div>

            <div className={styles.ExecBoardText}>BOARD OF ADVISORS</div>
            <div className={styles.ExecBoardHeading}>Some of our amazing advisors!</div>
            <div className={styles.ExecBoardContainer}>
                <div className={styles.ExecBoardCard}>
                        <div className={styles.ExecBoardCardContainer}>
                            <div className={styles.ExecBoardCardImageContainer}>
                                <Image src={chrisKlaus} width="179px" height="179px"></Image>
                            </div>
                            <div className={styles.ExecBoardCardName}>Christopher Klaus</div>
                            <div className={styles.ExecBoardCardTitle}>FOUNDER, COO OF KANEVA</div>
                        </div>
                    </div>
            </div>
        </div>
    )
}