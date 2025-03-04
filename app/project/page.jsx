import styles from "./page.module.css";

export default function Project() {
  return (
    <div className={styles.container}>
      <div>
        <h4 className={`${styles.hi}  ${styles.silde_1}`}>Projects</h4>
      </div>
      <div className={`${styles.project_container}`}>
        {/* SYMBIOS */}
        <div className={`${styles.single_project}  ${styles.silde_2}`}>
          <h5>SymBios Broadband</h5>
          <p>
            <span className={styles.para_title}>Domain:</span> Android App
            <br />
            <span className={styles.para_title}>Description:</span> Customer app
          </p>
        </div>

        {/* MEDISMART */}
        <div className={`${styles.single_project}  ${styles.silde_3}`}>
          <h5>MEDISMART</h5>
          <p>
            <span className={styles.para_title}>Domain:</span> Android App
            <br />
            <span className={styles.para_title}>Description:</span> Nearby
            Pharmacies and Medicine Availability Checker
          </p>
        </div>

        {/* VOICE OF THE STONE */}
        <div className={`${styles.single_project}  ${styles.silde_4}`}>
          <h5>VOICE OF THE STONE</h5>
          <p>
            <span className={styles.para_title}>Domain:</span> Android App
            <br />
            <span className={styles.para_title}>Description:</span> Profiling
            gravestone using QR code
          </p>
        </div>

        {/* SAMS */}
        <div className={`${styles.single_project}  ${styles.silde_5}`}>
          <h5>SCHOOL ATTENDANCE MANAGEMENT SYSTEM</h5>
          <p>
            <span className={styles.para_title}>Domain:</span> Web Application
            <br />
            <span className={styles.para_title}>Description:</span> Teacher
            management, Class management, Subject management and Student
            management
          </p>
        </div>

        {/* IVOTE */}
        <div className={`${styles.single_project}  ${styles.silde_6}`}>
          <h5>IVOTE</h5>
          <p>
            <span className={styles.para_title}>Domain:</span> Android
            Application
            <br />
            <span className={styles.para_title}>Description:</span> Offine
            voting app using Java and SQLite
          </p>
        </div>

        {/* L-EASE */}
        <div className={`${styles.single_project}  ${styles.silde_7}`}>
          <h5>L-EASE</h5>
          <p>
            <span className={styles.para_title}>Domain:</span> Web Application
            <br />
            <span className={styles.para_title}>Description:</span> E-Learning
            website
          </p>
        </div>
      </div>
    </div>
  );
}
