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
              Desenhado para garantir um avanço que não apenas atende, mas
              supere suas expectativas.
            </h4>
          </div>
          <div className={styles.top}>
            <h1>O que nós oferecemos:</h1>
          </div>
          <div className={styles.bottom}>
            <div className={styles.bottomCard}>
              <div className={styles.bottomLeft}>
                <div className={styles.leftImage}>
                  <img src="icon5.svg" alt="" />
                </div>
              </div>
              <div className={styles.bottomRight}>
                <h2>Planejamento Estratégico</h2>
                <p>
                  Desenvolvimento de uma estratégia de tráfego pago
                  personalizada com base nos objetivos de negócios do cliente,
                  público-alvo e análise da concorrência.
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
                <h2>Estratégias de Publicidade de Influenciadores</h2>
                <p>
                  Coordenação de campanhas pagas em colaboração com
                  influenciadores para aumentar o alcance e a credibilidade da
                  marca.
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
                <h2>Consultoria em Branding e Posicionamento</h2>
                <p>
                  Orientação sobre como alinhar campanhas de tráfego pago com a
                  estratégia geral de branding e posicionamento da marca.
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
                <h2>Gerenciamento de Orçamento</h2>
                <p>
                  Alocação e ajuste de orçamento para diferentes campanhas e
                  plataformas para garantir a máxima eficiência e retorno sobre
                  o investimento.
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
                <h2>Estratégias de Publicidade Local</h2>
                <p>
                  Implementação de campanhas focadas em áreas geográficas
                  específicas, incluindo otimização para buscas locais e
                  anúncios direcionados para negócios com localização física.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.button}>
            <button
              onClick={() => window.open("https://wa.link/0yw7lb", "_blank")}
            >
              invista em gestão de tráfego <img src="/arrow2.svg" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
