import Link from "next/link";
import styles from "./page.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TbWorld } from "react-icons/tb";

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={` ${styles.contact_container} ${styles.slide}`}>
        <div className={styles.item}>
          <FaPhoneAlt className={styles.icon} />
          <Link className={styles.link} href={"tel:7005296485"}>
            &nbsp;+91 7005296485
          </Link>
        </div>

        <div className={styles.item}>
          <MdEmail className={styles.icon} />
          <Link className={styles.link} href={"mailto:emanekho@gmail.com"}>
            &nbsp;emanekho@gmail.com
          </Link>
        </div>
        <div className={styles.item}>
          <FaLocationDot className={styles.icon} />
          <p className={styles.link}>Chumukedima, ward 5, Nagaland</p>
        </div>
        <div className={styles.item}>
          <TbWorld className={styles.icon} />
          <Link
            className={styles.link}
            href={"https://portfolio-six-alpha-48.vercel.app/"}
          >
            portfolio-six-alpha-48.vercel.app
          </Link>
        </div>
      </div>
    </div>
  );
}
