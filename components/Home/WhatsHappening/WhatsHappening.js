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
            Apply to our signature accelerator
          </div>
          <div className={styles.WhatsHappeningCardBody}>
            For the builders seeking out the next steps to develop out their
            idea and take it to market.
          </div>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLScYXPbiecT5kXKpn7dotfknCsgN5UcCho_cF6263ytiwOGl2Q/viewform">
            <div className={styles.WhatsHappeningCardLearn}>APPLY</div>
          </Link>
        </div>
        <div className={styles.WhatsHappeningCard}>
          <div className={styles.WhatsHappeningCardHeading}>
            Previous founder looking for community?
          </div>
          <div className={styles.WhatsHappeningCardBody}>
            Apply for our Membership! Connect with other
            founders at GT + access mentors as you continue to build your
            product.
          </div>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdRIIkSrl7n8Yt9LZyFvVN-oW2ufwVyRiPIa_9iEfq17-g2fg/viewform">
            <div className={styles.WhatsHappeningCardLearn}>APPLY</div>
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
