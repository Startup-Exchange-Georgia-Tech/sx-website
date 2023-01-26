import styles from './FAQ.module.css'
import Link from 'next/link'

const FAQ = () => {
    return (
        <div className={styles.FAQ}>
            <div className={styles.FAQText}>COMMONLY ASKED QUESTIONS</div>

            <div className={styles.FAQHeading}>Mentorship is step one for joining SX.</div>

            <div className={styles.FAQContainer}>
                <div className={styles.FAQCard}>
                    <div className={styles.Question}>How long is GT Startup Exchange mentorship?</div>
                    <div className={styles.Answer}>Mentorship is approximately 3 months long, and runs in both the Fall and Spring semesters.</div>
                    <br/><br/><br/>
                    <div className={styles.Answer}><b>Spring 2023 mentorship will occur from early-February to mid-April.</b></div>

                </div>
                <div className={styles.FAQCard}>
                    <div className={styles.Question}>What do I learn during the mentorship process?</div>
                    <div className={styles.Answer}>During mentorship, you will learn about the basics of customer discovery, value proposition, and revenue channels.</div>
                    <br/>
                    <div className={styles.Answer}> You will be taught different ways to validate business hypotheses as well as how to construct a proper pitch deck. </div>

                </div>
                <div className={styles.FAQCard}>
                    <div className={styles.Question}>What is the time commitment for the mentorship program?</div>
                    <div className={styles.Answer}>Attending weekly lectures and completing assignments take ~2-3 hours each week. </div>
                    <br/>
                    <br/>

                    <div className={styles.Answer}>During the semester, you will also have a midterm VC assignment as well as a final startup pitch. 
                    Those who finish the program will be considered for CREATE-X in order to advance their idea.</div>

                </div>
                <div className={styles.FAQCard}>
                    <div className={styles.Question}>How do I join the mentorship class for the Georgia Tech Startup Exchange?</div>
                    <div className={styles.Answer}>Check our website and follow our social media to stay updated on when applications open!</div><br/><br/><br/><br/><br/>
                    {/* <div className={styles.Answer}>Mentorship is approximately 3 months long, and runs in both the Fall and Spring semesters.</div>
                    */}<br/><br/><br/> 
                    <div className={styles.Answer}><b> </b></div>

                </div>
                <div className={styles.FAQCard}>
                    <div className={styles.Question}>What if I already have an idea I've built?</div>
                    <div className={styles.Answer}>Student builders have the option of joining either our <b>membership</b> or our <b>startup accelerator</b>, SX Fellowship.</div>
                    <br/>
                    <div className={styles.Answer}> Through founder dinners and 1:1 coffee chats, membership allows founders to build community with our network of mentors, founders, and venture capitalists.</div>

                </div>
                <div className={styles.FAQCard}>
                    <div className={styles.Question}>What if I have more questions about mentorship or how to join?</div>
                    <div className={styles.Answer}>Contact Praneet Kedari, Director of Mentorship </div>
                    <br/>
                    <br/>
                    <br/>

                    <div className={styles.Answer}>Email Praneet at <Link href="https://mailto:praneet@startup.exchange">praneet@startup.exchange</Link></div>

                </div>
            </div>


            {/*<div> className={styles.QuestionContainer}
                <div className={styles.Question}> </div>
                <li className={styles.Answer}>If you live in Square on Fifth, take the elevator downstairs</li>
    </div>*/}
        </div>
    )
}

export default FAQ;

