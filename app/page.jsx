import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.about_me_container}>
        <h4 className={`${styles.hi} ${styles.slide_first}`}>
          Hi! Im Manekho Ekhe
          <br />
          Mobile App Developer
        </h4>
        <p className={`${styles.about_me} ${styles.slide_second}`}>
          I am a React Native developer with experience in building mobile
          applications, focusing on performance, usability, and scalability.
        </p>
      </div>
      <div className={styles.objective_container}>
        <h4 className={`${styles.hi} ${styles.slide_third}`}>Objective</h4>
        <p className={`${styles.objective} ${styles.slide_forth}`}>
          My objective is to develop high-quality mobile applications while
          continuously enhancing my skills in React Native and mobile
          development.
        </p>
      </div>
    </div>
  );
}
