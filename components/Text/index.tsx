"use client";

import styles from "./styles.module.scss";

const Text = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.background}>
          <div className={styles.leftside}>
            <h4>Eleve a Performance</h4>
            <h3>do seu negócio.</h3>
            <h5>Descubra a inovação por trás das nossas soluções</h5>
          </div>
          <div className={styles.rightside}>
            <h5>Levamos o Futuro até Você</h5>
            <h3>Gestão de Tráfego</h3>
            <button>Quero investir</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Text;
