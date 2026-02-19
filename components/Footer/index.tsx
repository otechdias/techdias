"use client";

import Image from "next/image";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.leftside}>
            <div className={styles.logo}>
              <Image src="/newLogo.svg" alt="Logo" width={50} height={50} />
              <h4>otimizare</h4>
            </div>
            <h5>Descubra como escalar seu negócio com a Gestão de Tráfego!</h5>
            <button>
              <p>Entre em contato</p>
            </button>
          </div>
          <div className={styles.rightside}>
            <div className={styles.menu}>
              <h4>Sobre nós</h4>
              <h5>Investidores</h5>
              <h5>Novidades</h5>
              <h5>Agende um demo</h5>
            </div>
            <div className={styles.menu}>
              <h4>Produtos</h4>
              <h5>Cartão de crédito</h5>
              <h5>Cartão presente</h5>
              <h5>Conta poupança</h5>
              <h5>NFT</h5>
            </div>
            <div className={styles.menu}>
              <h4>Links útils</h4>
              <h5>Presentes grátis</h5>
              <h5>Documentação</h5>
              <h5>Programa afiliado</h5>
            </div>
            <div className={styles.menu}>
              <h4>Social</h4>
              <h5>Mudanças</h5>
              <h5>Licensa</h5>
              <h5>Local</h5>
              <h5>Notícias</h5>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>copyright 2024 SolidTech All Rights Reserved</p>
          <p>This page uses cookies. See cookies details here </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
