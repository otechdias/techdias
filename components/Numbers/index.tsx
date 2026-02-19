"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./styles.module.scss";

const Numbers = () => {
  const numbersRefs = useRef<HTMLHeadingElement[]>([]);

  useEffect(() => {
    numbersRefs.current.forEach((ref, index) => {
      if (ref) {
        const finalValue = parseInt(ref.dataset.value!);
        const duration = 2 + index; // Vary duration for different numbers

        gsap.to(ref, {
          innerText: finalValue,
          duration: duration,
          ease: "power3.out",
          snap: { innerText: 1 },
          onUpdate: function () {
            ref.innerText = Math.floor(
              ref.innerText as unknown as number
            ).toString();
          },
        });
      }
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content} data-aos="zoom-in">
        <div className={styles.numbers}>
          <div className={styles.number}>
            <h2
              ref={(el) => {
                if (el) numbersRefs.current[0] = el;
              }}
              data-value="16"
            >
              0
            </h2>
            <p>Anos de experiência</p>
          </div>
          <div className={styles.number}>
            <h2
              ref={(el) => {
                if (el) numbersRefs.current[1] = el;
              }}
              data-value="250"
            >
              0
            </h2>
            <p>Parceiros</p>
          </div>
          <div className={styles.number}>
            <h2
              ref={(el) => {
                if (el) numbersRefs.current[2] = el;
              }}
              data-value="18"
            >
              0
            </h2>
            <p>Clientes</p>
          </div>
          <div className={styles.number}>
            <h2
              ref={(el) => {
                if (el) numbersRefs.current[3] = el;
              }}
              data-value="10200"
            >
              0
            </h2>
            <p>Pessoas contentes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
