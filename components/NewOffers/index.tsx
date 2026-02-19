"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import styles from "./styles.module.scss";
gsap.registerPlugin(ScrollTrigger);

export default function NewOffers() {
  useEffect(() => {
    const cards = document.querySelectorAll(`.${styles.bottomCard}`);

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          x: index % 2 === 0 ? -200 : 200,
          y: index % 2 === 0 ? -100 : 150,
          rotate: index % 2 === 0 ? -15 : 10,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          rotate: 0,
          duration: 1.5,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.between}>
            <h4>
              Design atrativo + estratégia digital = mais resultados.
            </h4>
          </div>
          <div className={styles.top}>
            <h1>O que nós oferecemos:</h1>
          </div>
          <div className={styles.bottom}>
            <div className={styles.bottomCard}>
              <div className={styles.bottomLeft}>
                <div className={styles.leftImage}>
                  <img src="icon5.svg" alt="Ícone" />
                </div>
              </div>
              <div className={styles.bottomRight}>
                <h2>Consultoria Estratégica</h2>
                <p>
                  Orientação personalizada para definir objetivos claros e estratégias
                  eficazes de captação de leads e aumento de conversões.
                </p>
              </div>
            </div>
            <div className={styles.bottomCard}>
              <div className={styles.bottomLeft}>
                <div className={styles.leftImage}>
                  <img src="icon3.svg" alt="" />
                </div>
              </div>
              <div className={styles.bottomRight}>
                <h2>Copywriting Persuasivo</h2>
                <p>
                  Criação de textos envolventes e direcionados para despertar interesse,
                  transmitir credibilidade e incentivar a ação do visitante.
                </p>
              </div>
            </div>
            <div className={styles.bottomCard}>
              <div className={styles.bottomLeft}>
                <div className={styles.leftImage}>
                  <img src="icon1.svg" alt="" />
                </div>
              </div>
              <div className={styles.bottomRight}>
                <h2>Design Focado em Conversão</h2>
                <p>
                  Estrutura visual pensada para guiar o usuário até a ação desejada,
                  utilizando elementos de UX e UI modernos.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.bottomCard}>
              <div className={styles.bottomLeft}>
                <div className={styles.leftImage}>
                  <img src="icon6.svg" alt="" />
                </div>
              </div>
              <div className={styles.bottomRight}>
                <h2>Análise e Relatórios</h2>
                <p>
                  Monitoramento detalhado do desempenho das campanhas e
                  fornecimento de relatórios sobre métricas como CTR (taxa de
                  cliques), CPC (custo por clique) e CPA (custo por aquisição).
                </p>
              </div>
            </div>
            <div className={styles.bottomCard}>
              <div className={styles.bottomLeft}>
                <div className={styles.leftImage}>
                  <img src="icon4.svg" alt="" />
                </div>
              </div>
              <div className={styles.bottomRight}>
                <h2>Integração com Analytics</h2>
                <p>
                  Configuração de ferramentas como Google Analytics
                  para acompanhar métricas e otimizar campanhas.
                </p>
              </div>
            </div>

            <div className={styles.bottomCard}>
              <div className={styles.bottomLeft}>
                <div className={styles.leftImage}>
                  <img src="icon2.svg" alt="" />
                </div>
              </div>
              <div className={styles.bottomRight}>
                <h2>Suporte e Manutenção</h2>
                <p>
                  Acompanhamento contínuo para ajustes, melhorias e suporte técnico,
                  garantindo que sua landing page esteja sempre atualizada.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.button}>
            <button
              onClick={() => window.open("https://wa.link/tw5aec", "_blank")}
            >
              invista em gestão de tráfego 
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
