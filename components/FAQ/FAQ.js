import styles from './FAQ.module.css'

const FAQ = () => {
    return (
        <div className={styles.FAQ}>
            <div className={styles.FAQHeading}>Commonly Asked Questions</div>
            <div className={styles.QuestionContainer}>
                <div className={styles.Question}>When does Startup Exchange meet?</div>
                <div className={styles.Answer}>Startup Exchange has a General Body Meeting once a month. Each GBM features a prominent speaker, as well as opportunity to meet other current & budding entrepreneurs!</div>
                <div className={styles.Answer}>Follow our social media accounts to view our upcoming events and their details.</div>

            </div>
            <div className={styles.QuestionContainer}>
                <div className={styles.Question}>How do I become a member?</div>
                <div className={styles.Answer}>We have 3 membership programs: New Member, Fellowship, and Associate Membership.</div>
                <div className={styles.Answer}>Check our website and follow our social media to stay updated on when applications open!</div>

            </div>
            <div className={styles.QuestionContainer}>
                <div className={styles.Question}>How do I find the Tech Square ATL Social Club?</div>
                <div className={styles.Answer}>If you are approaching from 5th street, take a left towards the Centergy building and continue past it. On the left side of the building, a staircase will take you down to a street. Right across that street is The Clubhouse.</div>
                <div className={styles.Answer}>If you live in Square on Fifth, take the elevator downstairs.</div>
            </div>

            {/*<div> className={styles.QuestionContainer}
                <div className={styles.Question}> </div>
                <li className={styles.Answer}>If you live in Square on Fifth, take the elevator downstairs</li>
    </div>*/}
        </div>
    )
}

export default FAQ;

