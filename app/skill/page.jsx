import Image from "next/image";
import styles from "./page.module.css";

export default function Skill() {
  return (
    <div className={styles.container}>
      <div className={styles.skills_container}>
        <h4 className={`${styles.hi} ${styles.slide_0}`}>HARD SKILLS</h4>
        <ul className={styles.ul}>
          <li className={styles.slide_1}>HTML</li>
          <li className={styles.slide_2}>CSS</li>
          <li className={styles.slide_3}>JAVASCRIPT</li>
          <li className={styles.slide_4}>MERN STACK</li>
          <li className={styles.slide_5}>NEXT JS</li>
          <li className={styles.slide_6}>PHP</li>
          <li className={styles.slide_7}>MYSQL</li>
        </ul>
      </div>
      <div className={styles.image_container}>
        <div className={styles.png_container}>
          <Image
            className={styles.img}
            src={"/html.png"}
            width={128}
            height={128}
            alt="HTML"
          />
          <h4>HTML</h4>
        </div>
        <div className={styles.png_container}>
          <Image
            className={styles.img}
            src={"/css.png"}
            width={128}
            height={128}
            alt="CSS"
          />
          <h4>CSS</h4>
        </div>
        <div className={styles.png_container}>
          <Image
            className={styles.img}
            src={"/js.png"}
            width={128}
            height={128}
            alt="JAVASCRIPT"
          />
          <h4>JAVASCRIPT</h4>
        </div>
        <div className={styles.png_container}>
          <Image
            className={styles.img}
            src={"/mern.png"}
            width={128}
            height={128}
            alt="MERN"
          />
          <h4>MERN STACK</h4>
        </div>
        <div className={styles.png_container}>
          <Image
            className={styles.img}
            src={"/nextjs.png"}
            width={128}
            height={128}
            alt="NEXT JS"
          />
          <h4>NEXT JS</h4>
        </div>
        <div className={styles.png_container}>
          <Image
            className={styles.img}
            src={"/php.png"}
            width={128}
            height={128}
            alt="PHP"
          />
          <h4>PHP</h4>
        </div>
        <div className={styles.png_container}>
          <Image
            className={styles.img}
            src={"/mysql.png"}
            width={128}
            height={128}
            alt="MYSQL"
          />
          <h4>MYSQL</h4>
        </div>
      </div>
    </div>
  );
}
