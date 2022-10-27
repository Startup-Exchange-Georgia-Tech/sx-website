import styles from './FAQ.module.css'

const FAQ = () => {
    return (
        <div className={styles.FAQ}>
            <div className={styles.FAQHeading}>Commonly Asked Questions</div>
            <div className={styles.QuestionContainer}>
                <div className={styles.Question}>When does Startup Exchange meet?</div>
                <li className={styles.Answer}>Startup Exchange has a General Body Meeting once a month. Follow our social media accounts to view our upcoming events and their details.</li>
            </div>
            <div className={styles.QuestionContainer}>
                <div className={styles.Question}>How do I become a member?</div>
                <li className={styles.Answer}>We have 3 membership programs: New Member, Fellowship, and Associate Membership. Check our website and follow our social media to stay updated
                on when applications open!</li>
            </div>
            <div className={styles.QuestionContainer}>
                <div className={styles.Question}>How do I find the Tech Square ATL Social Club?</div>
                <li className={styles.Answer}>If you are approaching from 5th street, take a left towards the Centergy building and continue past it. On the left side of the building, a staircase will take you down to a street. Right across that street is The Clubhouse.</li>
                <li className={styles.Answer}>If you live in Square on Fifth, take the elevator downstairs.</li>
            </div>

            {/*<div> className={styles.QuestionContainer}
                <div className={styles.Question}> </div>
                <li className={styles.Answer}>If you live in Square on Fifth, take the elevator downstairs</li>
    </div>*/}
        </div>
    )
}

export default FAQ;

