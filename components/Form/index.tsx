"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";

gsap.registerPlugin(ScrollTrigger);

const Form = () => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const hrRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.container}`,
        start: "bottom 50%",
        end: "bottom 10%",
        scrub: true,
      },
    });

    timeline
      .fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 }
      )
      .fromTo(
        descriptionRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 },
        "-=0.5"
      )
      .fromTo(
        hrRef.current,
        { width: 0, opacity: 0 },
        { width: "100%", opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(
        logoRef.current,
        { y: 50, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out" },
        "-=0.5"
      );
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftside}>
          <div className={styles.inputs}>
            <input type="text" placeholder="Digite seu primeiro nome" />
            <input type="number" placeholder="Digite seu Número de Celular" />
            <input type="email" placeholder="Digite seu melhor E-mail" />
          </div>
          <div className={styles.button}>
            <button>
              <p> Entre em contato</p>

              <Image src="/arrow.svg" alt="logo" width={20} height={20} />
            </button>
          </div>
        </div>
        <div className={styles.rightside}>
          <div className={styles.text}>
            <h2 ref={titleRef}>
              A solução que você procura está ao seu alcance!
            </h2>
            <h5 ref={descriptionRef}>
              Preencha o formulário ao lado e nosso time entrará em contato com
              você, e entenderá a sua necessidade.
            </h5>
          </div>
          <hr ref={hrRef} className={styles.hr} />
          {/* <div className={styles.logo} ref={logoRef}>
            <Image src="/headerLogo.svg" alt="logo" width={100} height={100} />
            <h4>otimizare</h4>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Form;
