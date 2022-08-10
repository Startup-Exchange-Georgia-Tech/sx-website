import styles from './MailingList.module.css'

const MailingList = () => {
    return (
        <div className={styles.MailingList}>
            <div className={styles.joinMailingList}>Join our mailing list to stay up-to-date on our membership programs.</div>
            <div className={styles.signUpMailingList}><b>Sign Up</b></div>
        </div>
    )
}

export default MailingList;