"use client";

import Image from "next/image";
import styles from "./styles.module.scss";

const NewCellphone = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftside}>
          <h2>
            A otimização eficaz para impulsionar o
            <span>sucesso do seu negócio.</span>
          </h2>
          <h5>
            Explore o poder da tecnologia para atingir novos patamares de
            crescimento e eficiência.
          </h5>
          <div className={styles.logo}>
            <button
              onClick={() => window.open("https://wa.link/0yw7lb", "_blank")}
            >
              Quero iniciar uma parceria <img src="/arrow2.svg" />
            </button>
          </div>
        </div>
        <div className={styles.rightside}>
          <Image src="/phone.png" alt="phones" width={600} height={600} />
        </div>
      </div>
    </div>
  );
};

export default NewCellphone;
