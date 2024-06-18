"use client";

import Link from "next/link";
import styles from "./header.module.css";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathName = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  const toggleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
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
            pathName == "/skill"
              ? `${styles.link} ${styles.active}`
              : styles.link
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

      {/* MOBILE VIEW */}
      <div className={styles.mobile_relative_position}>
        <button className={styles.menu_button} onClick={toggleShowMenu}>
          Menu
        </button>
        {showMenu && (
          <div className={styles.menu_container}>
            <Link
              className={
                pathName == "/"
                  ? `${styles.link} ${styles.active}`
                  : styles.link
              }
              href={"/"}
              onClick={toggleShowMenu}
            >
              About
            </Link>
            <Link
              className={
                pathName == "/skill"
                  ? `${styles.link} ${styles.active}`
                  : styles.link
              }
              href={"/skill"}
              onClick={toggleShowMenu}
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
              onClick={toggleShowMenu}
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
              onClick={toggleShowMenu}
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
              onClick={toggleShowMenu}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
