import styles from './MailingList.module.css'
import Link from 'next/link';

const MailingList = () => {
    return (
        <div className={styles.MailingList}>
            <div className={styles.joinMailingList}>Join our mailing list to stay up-to-date on our membership programs.</div>
            <Link href="http://eepurl.com/dC2bNX">
                <div className={styles.signUpMailingList}><b>Sign Up</b></div>
            </Link>
            
        </div>
    )
}

export default MailingList;