import styles from './FAQ.module.css'

const FAQ = () => {
    return (
        <div className={styles.FAQ}>
            <div className={styles.FAQHeading}>Commonly Asked Questions</div>
            <div className={styles.QuestionContainer}>
                <div className={styles.Question}>When does Startup Exchange meet?</div>
                <li className={styles.Answer}>Startup Exchange meets druing the school semester every Friday from 4PM to 6PM. Check the Calendar to view the upcoming events and their location.</li>
            </div>
            <div className={styles.QuestionContainer}>
                <div className={styles.Question}>When does Startup Exchange meet?</div>
                <li className={styles.Answer}>Startup Exchange meets druing the school semester every Friday from 4PM to 6PM. Check the Calendar to view the upcoming events and their location.</li>
            </div>
            <div className={styles.QuestionContainer}>
                <div className={styles.Question}>When does Startup Exchange meet?</div>
                <li className={styles.Answer}>Startup Exchange meets druing the school semester every Friday from 4PM to 6PM. Check the Calendar to view the upcoming events and their location.</li>
            </div>
        </div>
    )
}

export default FAQ;

