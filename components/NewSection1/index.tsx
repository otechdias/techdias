"use Client";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

export default function NewSection1() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <Image src="/logoTexto.svg" alt="Logo" width={200} height={50} />
        </div>
        <div className={styles.middle}>
          <div className={styles.leftside}>
            <h5>Conheça a Inteligência em Negócios</h5>
            <div className={styles.h1}>
              <h1>Sua Visão,</h1>
              <h1>
                <span>Nossa Estratégia.</span>
              </h1>
            </div>
            <p>
              Otimização detalhada e projetada para superar suas expectativas.
            </p>
            <Link href="https://wa.link/0yw7lb">
              <button>ENTRE EM CONTATO</button>
            </Link>
          </div>
          <div className={styles.rightside}>
            <Image src="/robot.svg" alt="Imagem" width={650} height={650} />
          </div>
        </div>
        <div className={styles.bottom}>
          <h2>Um upgrade estratégico para suas campanhas.</h2>
        </div>
      </div>
    </div>
  );
}
