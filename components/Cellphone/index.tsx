"use client";

import SplineNext from "@splinetool/react-spline/next";
import Image from "next/image";
import styles from "./styles.module.scss";

const Cellphone = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftside}>
          <h2>
            A Otimização eficaz para impulsionar o sucesso do seu negócio!
          </h2>
          <h5>
            Explore o poder da tecnologia para atingir novos patamares de
            crescimento e eficiência.
          </h5>
          <div className={styles.logo}>
            <Image src="/newLogo.svg" alt="Logo" width={50} height={50} />
            <h5>otimizare</h5>
          </div>
        </div>
        <div className={styles.rightside}>
          <SplineNext scene="https://prod.spline.design/E8MXwm6Xg3nS6Pjd/scene.splinecode" />
        </div>
      </div>
    </div>
  );
};

export default Cellphone;
