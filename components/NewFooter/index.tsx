"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

export default function NewFooter() {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftside}>
          <img src="/logoTextNew.png" />
        </div>
        <div className={styles.middle}>
          <p>Copyright 2026 © All Rights Reserved</p>
        </div>
        <div className={styles.rightside}>
          <div className={styles.rightTop}>
            <Link href="https://www.instagram.com/_tech.dias">
              <Image src="/insta.svg" alt="Insta" width={20} height={20} />
            </Link>
          </div>
          <div className={styles.rightBottom}>
            <p>@techdias</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
