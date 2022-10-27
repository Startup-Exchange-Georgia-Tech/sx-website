import styles from "./Joining.module.css";
import newmember from "../../assets/images/newmember.png";
import fellow from "../../assets/images/fellow.png";
import associate from "../../assets/images/associate.png";
import Image from "next/image";
import Link from "next/link";

export default function Joining() {
  return (
    <div className={styles.Joining} id="Join">
      <div className={styles.Joiningtext}>MEMBERSHIP TIERS</div>
      <div className={styles.JoiningHeading}>
        We’re building a <br /> community of “
        <span className={styles.yellow}>do-ers</span>.”
      </div>
      <div className={styles.JoiningCardContainer}>
        <div className={styles.JoiningCard}>
          <div className={styles.JoiningCardImageContainer}>
            <Image
              src={newmember}
              objectFit="cover"
              width={1000}
              height={800}
            ></Image>
          </div>
          <div className={styles.JoiningCardContentUpper}>
            <div className={styles.JoiningCardHeading}>NEW MEMBER</div>
            <div className={styles.JoiningCardSubHeading}>Semester-Long</div>
          </div>
          <div className={styles.JoiningCardContentLower}>
            Participate in workshops, social events, and fireside chats
            alongside your cohort as you learn the ropes of entrepreneurship.
          </div>
        </div>

        <div className={styles.JoiningCard}>
          <div className={styles.JoiningCardImageContainer}>
            <Image
              src={fellow}
              objectFit="cover"
              width={1000}
              height={800}
            ></Image>
          </div>
          <div className={styles.JoiningCardContentUpper}>
            <div className={styles.JoiningCardHeading}>FELLOWSHIP MEMBER</div>
            <div className={styles.JoiningCardSubHeading}>Semester-Long</div>
          </div>
          <div className={styles.JoiningCardContentLower}>
            Work alongside industry leaders in a team of 2-5 to take your idea
            to the next level. Pitch in front of VC firms.
          </div>
        </div>
        <div className={styles.JoiningCard}>
          <div className={styles.JoiningCardImageContainer}>
            <Image
              src={associate}
              objectFit="cover"
              width={1000}
              height={800}
            ></Image>
          </div>
          <div className={styles.JoiningCardContentUpper}>
            <div className={styles.JoiningCardHeading}>ASSOCIATE MEMBER</div>
            <div className={styles.JoiningCardSubHeading}>Non-Expiring</div>
          </div>
          <div className={styles.JoiningCardContentLower}>
            Connect with founders at Tech, and gain
            access to SX's network of founders & members-only resources.
          </div>
        </div>
        <div className={styles.joinAction}>
                <div className={styles.stayUp}>Stay up-to-date on our membership programs.</div>
                <Link href="https://www.instagram.com/gtstartupexchange/">
                    <div className={styles.follow}>Follow @gtstartupexchange</div>
                </Link>
                
            </div>
      </div>
    </div>
  );
}
