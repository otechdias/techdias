"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";

const Section1 = () => {
  const firstTextRef = useRef(null);
  const secondTextRef = useRef(null);
  const firstBgRef = useRef(null);
  const secondBgRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    tl.to(firstBgRef.current, {
      scaleX: 1,
      duration: 0.3,
      transformOrigin: "left",
    })
      .to(
        secondBgRef.current,
        { scaleX: 1, duration: 0.3, transformOrigin: "left" },
        "-=0.3"
      )
      .to(firstTextRef.current, { opacity: 1, duration: 0.3 }, "-=0.3")
      .to(secondTextRef.current, { opacity: 1, duration: 0.3 }, "-=0.3")
      .to(firstBgRef.current, { scaleX: 0, duration: 0.3 })
      .to(secondBgRef.current, { scaleX: 0, duration: 0.3 }, "-=0.3");

    gsap.to(imageRef.current, {
      x: 15, // Mover para 20px à direita
      duration: 2, // Duração de 2 segundos
      ease: "power1.inOut", // Ease suave
      yoyo: true, // Reverter a animação para o movimento de volta
      repeat: -1, // Repetir indefinidamente
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <Image
            ref={imageRef}
            src="/3d2.png"
            alt="logo"
            width={50}
            height={50}
          />
          <h4>Bem-vindo à otimizare</h4>
        </div>
        <div className={styles.middle1}>
          <h1>
            <span className={styles.text}>
              <span className={styles.text__first}>
                <span ref={firstTextRef} className={styles.text__word}>
                  Sua Visão,
                </span>
                <span ref={firstBgRef} className={styles.text__firstBg}></span>
              </span>
              <br />
              <span className={styles.text__second}>
                <span ref={secondTextRef} className={styles.text__word}>
                  Nossa Estratégia.
                </span>
                <span
                  ref={secondBgRef}
                  className={styles.text__secondBg}
                ></span>
              </span>
            </span>
          </h1>
        </div>
        <div className={styles.middle2}>
          <h5>Otimização Detalhada e Projetada Para</h5>
          <h5>Superar Suas Expectativas</h5>
        </div>
        <div className={styles.middle3}>
          <h5>
            Otimização Detalhada e Projetada Para Superar Suas Expectativas
          </h5>
        </div>
        <div className={styles.star}>
          <Image src="/3d.png" alt="logo" width={50} height={50} />
        </div>
        <div className={styles.bottom}>
          <button>
            Entre em contato
            <Image src="/arrow.svg" alt="logo" width={20} height={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section1;
