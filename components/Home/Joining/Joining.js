import styles from "./Joining.module.css";
import newmember from "../../../assets/images/newmember.png";
import fellow from "../../../assets/images/fellow.png";
import associate from "../../../assets/images/associate.png";
import Image from "next/image";
import Link from "next/link";

export default function Joining() {
  return (
    <div className={styles.Joining} id="Join">
      <div className={styles.JoiningCardContainer}>
        <Link href="#Mentorship">
          <div className={styles.JoiningCard}>
            <div className={styles.JoiningCardContentUpper}>
              <div className={styles.JoiningCardHeading}>MENTORSHIP</div>
              <div className={styles.JoiningCardSubHeading}>9-Week Course</div>
            </div>
            <div className={styles.JoiningCardContentLower}>
              Break into the world of startups, and listen to founder + industry expert guest lecturers.
              Develop a pitch and gain feedback.
            </div>
          </div>
        </Link>

        <Link href="#Fellowship">
          <div className={styles.JoiningCard}>

            <div className={styles.JoiningCardContentUpper}>
              <div className={styles.JoiningCardHeading}>FELLOWSHIP</div>
              <div className={styles.JoiningCardSubHeading}>10-Week Accelerator</div>
            </div>
            <div className={styles.JoiningCardContentLower}>
              Your founder team of 2-5 gains feedback from mentors to take your idea
              to the next level. Pitch in front of VCs and investors.
            </div>
          </div>
        </Link>

        <Link href="#Membership">
          <div className={styles.JoiningCard}>
            <div className={styles.JoiningCardContentUpper}>
              <div className={styles.JoiningCardHeading}>MEMBERSHIP</div>
              <div className={styles.JoiningCardSubHeading}>Non-Expiring Access</div>
            </div>
            <div className={styles.JoiningCardContentLower}>
              Build community with Tech's student founders and gain
              access to SX's founder socials and network of mentors.
            </div>
          </div>
        </Link>

        <div className={styles.joinAction}>
                <div className={styles.stayUp}>Stay up-to-date on our programs and initiatives.</div>
                <Link href="https://www.instagram.com/gtstartupexchange/">
                    <div className={styles.follow}>FOLLOW @gtstartupexchange</div>
                </Link>
                
            </div>
      </div>
    </div>
  );
}
