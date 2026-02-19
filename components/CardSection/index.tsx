"use client";

import Spline from "@splinetool/react-spline/next";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";

gsap.registerPlugin(ScrollTrigger);

export default function CardSection() {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.container}`,
        start: "bottom 99%",
        end: "bottom 10%",
        scrub: false,
      },
    });

    timeline
      .fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      )
      .fromTo(
        textRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(
        buttonRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.5"
      );
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftside}>
          <h1 ref={titleRef}>
            Soluções de alta qualidade que realmente fazem a diferença!
          </h1>
          <h5 ref={textRef}>
            Com nossa abordagem estratégica, garantimos que você maximize seus
            resultados e obtenha um excelente retorno sobre seu investimento.
          </h5>
          <div className={styles.background}>
            <h3 ref={textRef}>Nós somos</h3>
            <h4 ref={textRef}>Inteligência no Digital</h4>
            <p ref={textRef}>
              Aperfeiçoamos o seu desempenho e elevamos os seus resultados
            </p>
          </div>
          <button ref={buttonRef}>
            Entre em contato
            <Image src="/arrow.svg" alt="logo" width={20} height={20} />
          </button>
        </div>
        <div className={styles.rightside}>
          <Spline scene="https://prod.spline.design/nYO0NRp4xGV4h5Zm/scene.splinecode" />
        </div>
      </div>
    </div>
  );
}
