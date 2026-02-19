"use client";
import Image from "next/image";
import styles from "./styles.module.scss";

const Logos = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Image src="/upwork.svg" alt="logo" width={100} height={100} />
        <Image src="/petal.svg" alt="logo" width={100} height={100} />
        <Image src="/rakuten.svg" alt="logo" width={100} height={100} />
        <Image src="/nyt.svg" alt="logo" width={100} height={100} />
        <Image src="/vice.svg" alt="logo" width={100} height={100} />
        <Image src="/dell.svg" alt="logo" width={100} height={100} />
      </div>
      <div className={styles.star}>
        <Image src="/small3d.png" alt="Star" width={24} height={24} />
      </div>
    </div>
  );
};

export default Logos;
