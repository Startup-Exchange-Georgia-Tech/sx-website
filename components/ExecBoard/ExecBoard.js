import styles from './ExecBoard.module.css'
import Image from 'next/image'
import exectest from '../../assets/images/exectest.png'

export default function ExecBoard() {
    return (
        <div className={styles.ExecBoard}>
            <div className={styles.ExecBoardText}>OUR EXECUTIVE BOARD</div>
            <div className={styles.ExecBoardContainer}>
                <div className={styles.ExecBoardCard}>
                    <div className={styles.ExecBoardTitle}>CO-DIRECTOR</div>
                    <div className={styles.ExecBoardCardContainer}>
                        <div className={styles.ExecBoardCardImageContainer}>
                            <Image src={exectest}></Image>
                        </div>
                        <div className={styles.ExecBoardCardName}>PRANEET KEDARI</div>
                        <div className={styles.ExecBoardCardEmail}>praneet@startup.exchange</div>
                    </div>
                </div>
                <div className={styles.ExecBoardCard}>
                    <div className={styles.ExecBoardTitle}>CO-DIRECTOR</div>
                    <div className={styles.ExecBoardCardContainer}>
                        <div className={styles.ExecBoardCardImageContainer}>
                            <Image src={exectest}></Image>
                        </div>
                        <div className={styles.ExecBoardCardName}>PRANEET KEDARI</div>
                        <div className={styles.ExecBoardCardEmail}>praneet@startup.exchange</div>
                    </div>
                </div>
                <div className={styles.ExecBoardCard}>
                    <div className={styles.ExecBoardTitle}>CO-DIRECTOR</div>
                    <div className={styles.ExecBoardCardContainer}>
                        <div className={styles.ExecBoardCardImageContainer}>
                            <Image src={exectest}></Image>
                        </div>
                        <div className={styles.ExecBoardCardName}>PRANEET KEDARI</div>
                        <div className={styles.ExecBoardCardEmail}>praneet@startup.exchange</div>
                    </div>
                </div>
                <div className={styles.ExecBoardCard}>
                    <div className={styles.ExecBoardTitle}>CO-DIRECTOR</div>
                    <div className={styles.ExecBoardCardContainer}>
                        <div className={styles.ExecBoardCardImageContainer}>
                            <Image src={exectest}></Image>
                        </div>
                        <div className={styles.ExecBoardCardName}>PRANEET KEDARI</div>
                        <div className={styles.ExecBoardCardEmail}>praneet@startup.exchange</div>
                    </div>
                </div>
                <div className={styles.ExecBoardCard}>
                    <div className={styles.ExecBoardTitle}>CO-DIRECTOR</div>
                    <div className={styles.ExecBoardCardContainer}>
                        <div className={styles.ExecBoardCardImageContainer}>
                            <Image src={exectest}></Image>
                        </div>
                        <div className={styles.ExecBoardCardName}>PRANEET KEDARI</div>
                        <div className={styles.ExecBoardCardEmail}>praneet@startup.exchange</div>
                    </div>
                </div>
                <div className={styles.ExecBoardCard}>
                    <div className={styles.ExecBoardTitle}>CO-DIRECTOR</div>
                    <div className={styles.ExecBoardCardContainer}>
                        <div className={styles.ExecBoardCardImageContainer}>
                            <Image src={exectest}></Image>
                        </div>
                        <div className={styles.ExecBoardCardName}>PRANEET KEDARI</div>
                        <div className={styles.ExecBoardCardEmail}>praneet@startup.exchange</div>
                    </div>
                </div>
                <div className={styles.ExecBoardCard}>
                    <div className={styles.ExecBoardTitle}>CO-DIRECTOR</div>
                    <div className={styles.ExecBoardCardContainer}>
                        <div className={styles.ExecBoardCardImageContainer}>
                            <Image src={exectest}></Image>
                        </div>
                        <div className={styles.ExecBoardCardName}>PRANEET KEDARI</div>
                        <div className={styles.ExecBoardCardEmail}>praneet@startup.exchange</div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}