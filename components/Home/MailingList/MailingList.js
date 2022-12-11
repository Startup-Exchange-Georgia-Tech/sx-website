import styles from './MailingList.module.css'
import Link from 'next/link';

const MailingList = () => {
    return (
        <div className={styles.MailingList}>
            {/* <div className={styles.joinMailingList}>Join our mailing list to stay up-to-date on our membership programs.</div>
            <Link href="http://eepurl.com/dC2bNX">
                <div className={styles.signUpMailingList}><b>Sign Up</b></div>
            </Link> */}
            <div className={styles.joinMailingList}>Not sure where to start? Check out our resource guide to find what you need.</div>
            <Link href="https://startupexchange.notion.site/SX-Toolbox-658b9ef658da4ba7bb8d4cbdc470a387">
                <div className={styles.signUpMailingList}><b>VISIT RESOURCE GUIDE</b></div>
            </Link>
        </div>
    )
}

export default MailingList;