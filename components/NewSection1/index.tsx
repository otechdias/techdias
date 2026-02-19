"use Client";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

export default function NewSection1() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          
          <img src="/logoTextNew.png" alt="Logo" width={200} height={150} />
        </div>
        <div className={styles.middle}>
          <div className={styles.leftside}>
            <h5>Conheça a TechDias</h5>
            <div className={styles.h1}>
              <h1>Landing Pages para</h1>
              <h1>
                <span>GERAR VENDAS  </span>
              </h1>
            </div>
            <p>
              Transforme visitantes em clientes com páginas que vendem por você.
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
          <h2>Um upgrade estratégico para sua vida profissional.</h2>
        </div>
      </div>
    </div>
  );
}
