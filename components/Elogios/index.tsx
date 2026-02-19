/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import styles from "./styles.module.scss";

gsap.registerPlugin(ScrollTrigger);

const Elogios: React.FC = () => {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const card = event.currentTarget as HTMLDivElement;
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left; // X position within the card
      const y = event.clientY - rect.top; // Y position within the card

      const rotateX = -(y / rect.height) * 30; // Rotation sensitivity
      const rotateY = (x / rect.width) * 30;

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = (event: MouseEvent) => {
      const card = event.currentTarget as HTMLDivElement;
      gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.5 }); // Smooth return to original position
    };

    const cards = document.querySelectorAll<HTMLDivElement>(`.${styles.card}`);

    cards.forEach((card) => {
      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);

      // Apply scroll-triggered fade-in effect
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 }, // Start with opacity 0 and a slight downward position
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "bottom 50%", // Start animation when bottom of container hits the center of the viewport
            end: "bottom 10%",
            scrub: true, // Smooth scroll animation
          },
        }
      );
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.card}>
          <Image src="/comment.svg" alt="Elogios" width={70} height={70} />
          <h4>
            "Foi a melhor decisão que tomei, depois de contratar a empresa meus
            resultados só subiram."
          </h4>
          <div className={styles.bottom}>
            <Image src="/person1.svg" alt="User" width={50} height={50} />
            <div className={styles.text}>
              <h5>Hadid Khan</h5>
              <p>UIUX Designer</p>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <Image src="/comment.svg" alt="Elogios" width={70} height={70} />
          <h4>
            "Foi a melhor decisão que tomei, depois de contratar a empresa meus
            resultados só subiram."
          </h4>
          <div className={styles.bottom}>
            <Image src="/person2.svg" alt="User" width={50} height={50} />
            <div className={styles.text}>
              <h5>Hadid Khan</h5>
              <p>UIUX Designer</p>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <Image src="/comment.svg" alt="Elogios" width={70} height={70} />
          <h4>
            "Foi a melhor decisão que tomei, depois de contratar a empresa meus
            resultados só subiram."
          </h4>
          <div className={styles.bottom}>
            <Image src="/person3.svg" alt="User" width={50} height={50} />
            <div className={styles.text}>
              <h5>Hadid Khan</h5>
              <p>UIUX Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Elogios;
