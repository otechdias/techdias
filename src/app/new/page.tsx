"use client";

import "aos/dist/aos.css";

import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import styles from "./page.module.scss";
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

export default function Home() {
  useLayoutEffect(() => {
    console.log("GSAP and ScrollTrigger initialized");

    const image = document.querySelector(`#image`);
    const path = document.querySelector("#curvedPath");

    console.log("Image element:", image);
    console.log("Path element:", path);

    if (image && path instanceof SVGPathElement) {
      console.log("Starting GSAP animation");

      // Animação da primeira metade do caminho
      gsap.to(image, {
        scrollTrigger: {
          trigger: "#curved-line-container",
          start: "top 500px",
          end: "center center",
          scrub: 2,
        },
        motionPath: {
          path: path,
          align: path,
          autoRotate: true,
          alignOrigin: [0.5, 0.5],
          end: 0.5,
        },
        duration: 3,
        ease: "power1.inOut",
      });

      // Segunda metade do caminho
      gsap.to(image, {
        scrollTrigger: {
          trigger: "#curved-line-container",
          start: "center center",
          end: "bottom 20%",
          scrub: 2,
        },
        motionPath: {
          path: path,
          align: path,
          autoRotate: true,
          alignOrigin: [0.5, 0.5],
          start: 0.5,
          end: 0.9,
        },
        duration: 3,
        ease: "power1.inOut",
      });

      // Parte final do caminho
      gsap.to(image, {
        scrollTrigger: {
          trigger: "#curved-line-container",
          start: "bottom 20%",
          end: "bottom bottom",
          scrub: 2,
        },
        motionPath: {
          path: path,
          align: path,
          autoRotate: true,
          alignOrigin: [0.5, 0.5],
          start: 0.9,
          end: 1,
        },
        duration: 4,
        ease: "power1.inOut",
      });
    } else {
      console.error("Element not found:", image ? "#curvedPath" : "#image");
    }
  }, []);

  return (
    <main className={styles.container}>
      <div className={styles["radial-gradient"]}></div>
      <div className={styles["curved-line-container"]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1440"
          height="5081"
          viewBox="0 0 1440 5081"
          fill="none"
        >
          <path
            id="curvedPath"
            d="M890.5 0.00021185C991 -1.50031 1192.86 18.7675 1069.66 174.503C915.648 369.171 1461.28 521.367 1373.27 369.172C1285.27 216.976 616.432 390.408 1157.66 648.787C1590.64 855.489 739.638 909.525 260.013 910.705C92.1494 918.375 -165.491 995.314 146.856 1241.71C537.29 1549.7 1243.71 1680.69 1200.68 1868.32C1157.66 2055.94 -386.357 2872 146.856 2872C1320 2872 251.144 3343.89 712 3504C852.545 3552.83 1446.95 3470.17 1416 3780C1358.34 4357.28 -60.8 4083.2 96 4400C292 4796 1416 4944 1446 5080"
            stroke="#8336FF"
            stroke-width="1.5"
            stroke-linecap="square"
          />
        </svg>
        <img
          id="image"
          src="/3d.png"
          alt="Animated Element"
          className={styles.image}
          style={{
            position: "absolute",
            width: "50px",
            height: "50px",
            zIndex: 2,
          }}
        />
      </div>
      <div className={styles["main-content"]}>
        {/* <Header />
        <Section1 />
        <Text />
        <Offers />
        <CardSection />
        <div className={styles["radial-gradient-card-section"]}></div>
        <Form />
        <Questions />
        <div className={styles["radial-gradient-questions"]}></div>
        <Cellphone />
        <div className={styles["radial-gradient-phone"]}></div>
        <Footer /> */}
      </div>
    </main>
  );
}
