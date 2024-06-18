"use client";

import Link from "next/link";
import styles from "./header.module.css";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathName = usePathname();

  return (
    <div className={styles.container}>
      <Link
        className={
          pathName == "/" ? `${styles.link} ${styles.active}` : styles.link
        }
        href={"/"}
      >
        About
      </Link>
      <Link
        className={
          pathName == "/skill" ? `${styles.link} ${styles.active}` : styles.link
        }
        href={"/skill"}
      >
        Skill
      </Link>
      <Link
        className={
          pathName == "/project"
            ? `${styles.link} ${styles.active}`
            : styles.link
        }
        href={"/project"}
      >
        Project
      </Link>
      <Link
        className={
          pathName == "/education"
            ? `${styles.link} ${styles.active}`
            : styles.link
        }
        href={"/education"}
      >
        Education
      </Link>
      <Link
        className={
          pathName == "/contact"
            ? `${styles.link} ${styles.active}`
            : styles.link
        }
        href={"/contact"}
      >
        Contact
      </Link>
    </div>
  );
}
