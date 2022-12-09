import styles from "./Events.module.css";
import Image from "next/image";
import sxrocket from "../../../assets/images/sxrocket.png";
import eventsImage from "../../../assets/images/eventsimage.png";
import fireside from "../../../assets/images/fireside.png";
import mentorship from "../../../assets/images/mentorship.png";
import social from "../../../assets/images/social.png";
import workshop from "../../../assets/images/workshop.png";
import partnerships from "../../../assets/images/partnerships.png";

export default function Events() {
  return (
    <div className={styles.Events} id="Events">
      <div className={styles.Joiningtext}>MEMBERSHIP BENEFITS</div>
      <div className={styles.JoiningHeadingContainer}>
        <div className={styles.JoiningHeading}>
          What’s in-store for members?
        </div>
      </div>

      <div className={styles.EventsCardContainer}>
        <div className={styles.EventsCard}>
          <div className={styles.EventsImageContainer}>
            <Image src={fireside} layout="responsive"></Image>
          </div>

          <div className={styles.EventsContentContainer}>
            <div className={styles.EventsCardHeading}>FIRESIDE CHATS</div>
            <div className={styles.EventsCardBody}>
              Hear from cutting-edge thought in industry and professional
              practice.
            </div>
          </div>
        </div>
        <div className={styles.EventsCard}>
          <div className={styles.EventsImageContainer}>
            <Image src={mentorship} layout="responsive"></Image>
          </div>
          <div className={styles.EventsContentContainer}>
            <div className={styles.EventsCardHeading}>MENTORSHIP</div>
            <div className={styles.EventsCardBody}>
              Receive immediate & critical feedback on your ideas.
            </div>
          </div>
        </div>
        <div className={styles.EventsCard}>
          <div className={styles.EventsImageContainer}>
            <Image src={workshop} layout="responsive"></Image>
          </div>
          <div className={styles.EventsContentContainer}>
            <div className={styles.EventsCardHeading}>WORKSHOPS</div>
            <div className={styles.EventsCardBody}>
              Add to your toolbox via leaders from several different industries.
            </div>
          </div>
        </div>
        <div className={styles.EventsCard}>
          <div className={styles.EventsImageContainer}>
            <Image src={social} layout="responsive"></Image>
          </div>
          <div className={styles.EventsContentContainer}>
            <div className={styles.EventsCardHeading}>SOCIALS</div>
            <div className={styles.EventsCardBody}>
              Participate in our social events to build connection across the SX
              community!
            </div>
          </div>
        </div>
        <div className={styles.EventsCard}>
          <div className={styles.EventsImageContainer}>
            <Image src={partnerships} layout="responsive"></Image>
          </div>
          <div className={styles.EventsContentContainer}>
            <div className={styles.EventsCardHeading}>PARTNERSHIPS</div>
            <div className={styles.EventsCardBody}>
              Find community in any area of interest as you take your idea from
              concept to prototype.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.eventsImageContainer}>
        <Image src={eventsImage}></Image>
      </div>
    </div>
  );
}
