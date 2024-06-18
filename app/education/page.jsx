import styles from "./page.module.css";

export default function Education() {
  return (
    <div className={styles.container}>
      <h4 className={`${styles.title} ${styles.slide_1}`}>
        Qualification details
      </h4>
      <div
        className={` ${styles.qualification_details_container} ${styles.slide_2}`}
      >
        <div className={styles.item}>
          <h5 className={styles.hi}>BACHELOR OF COMPUTER APPLICATIONS</h5>
          <p>
            Assam Don Bosco University
            <br />
            Year: 2019 - 2022
          </p>
        </div>
        <div className={styles.hr} />
        <div className={styles.item}>
          <h5 className={styles.hi}>MASTER OF COMPUTER APPLICATIONS</h5>
          <p>
            Assam Don Bosco University
            <br />
            Year: 2022 - 2024
          </p>
        </div>
      </div>
    </div>
  );
}
