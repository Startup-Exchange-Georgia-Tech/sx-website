import styles from './FAQ.module.css'

const FAQ = () => {
    return (
        <div className={styles.FAQ}>
            <div className={styles.FAQHeading}>Commonly Asked Questions</div>
            <div className={styles.QuestionContainer}>
                <div className={styles.Question}>When does Startup Exchange meet?</div>
                <li className={styles.Answer}>Startup Exchange meets during the school semester every Friday from 4PM to 6PM. Check the Calendar to view the upcoming events and their location.</li>
            </div>
            <div className={styles.QuestionContainer}>
                <div className={styles.Question}>How do I find the Tech Square ATL Social Club? (where SX meets)</div>
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

