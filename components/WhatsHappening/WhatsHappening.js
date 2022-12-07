import Link from "next/link";
import styles from "./WhatsHappening.module.css";

export default function WhatsHappening() {
  return (
    <div className={styles.WhatsHappening}>
      <div className={styles.WhatsHappeningLeft}>
        <div className={styles.WhatsHappeningText}>WHAT'S HAPPENING NOW</div>
        {/* <div className={styles.WhatsHappeningHeading}>APPLICATIONS FOR THE FALL 2022 COHORT ARE OPEN!</div> */}
        <div className={styles.WhatsHappeningHeading}>
          APPLY TO STARTUP EXCHANGE FOR SPRING 2023!
        </div>
      </div>
      <div className={styles.WhatsHappeningRight}>
        <div className={styles.WhatsHappeningCard}>
          <div className={styles.WhatsHappeningCardHeading}>
            Apply to the Exec Board
          </div>
          <div className={styles.WhatsHappeningCardBody}>
            Grow your network + gain access to resources about the startup Ecosystem
            as you turn Georgia Tech into the next startup school.
          </div>
          <Link href="https://forms.gle/R6CCHFoe8qzjgGmb6">
            <div className={styles.WhatsHappeningCardLearn}>APPLY</div>
          </Link>
        </div>
        <div className={styles.WhatsHappeningCard}>
          <div className={styles.WhatsHappeningCardHeading}>
            Previous founder looking for community?
          </div>
          <div className={styles.WhatsHappeningCardBody}>
            Apply for our Membership for Spring 2023! Connect with other founders at GT
            + access mentors as you continue to build your product.
          </div>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdRIIkSrl7n8Yt9LZyFvVN-oW2ufwVyRiPIa_9iEfq17-g2fg/viewform">
            <div className={styles.WhatsHappeningCardLearn}>Apply Now</div>
          </Link>
        </div>

        {/* <div className={styles.WhatsHappeningCard}>
                    <div className={styles.WhatsHappeningCardHeading}>New Member</div>
                    <div className={styles.WhatsHappeningCardBody}>For the problem-solvers with rad skills and like working on cool stuff.

And want to learn the ropes of entrepreneurship. Apply now!</div>
                    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSc_AEgeYP63jxW2dZr-iX-3VxVQq78r3v-HqCdsUWaGSH4OTg/viewform">
                        <div className={styles.WhatsHappeningCardLearn}>Apply Now</div>
                    </Link>
                </div>
                <div className={styles.WhatsHappeningCard}>
                    <div className={styles.WhatsHappeningCardHeading}>Fellowship</div>
                    <div className={styles.WhatsHappeningCardBody}>For the builders looking to turn their new idea into the next unicorn.

Teams of 2-5. Apply now!</div>
                    <Link href="https://gatech.co1.qualtrics.com/jfe/form/SV_9zPz80hHAqyYJka">
                        <div className={styles.WhatsHappeningCardLearn}>Apply Now</div>
                    </Link>
                    
                </div> */}
      </div>
    </div>
  );
}
