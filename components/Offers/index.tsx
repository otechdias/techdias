"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import styles from "./styles.module.scss";
gsap.registerPlugin(ScrollTrigger);

export default function Offers() {
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
          <div className={styles.top}>
            <h1>O que nós oferecemos?</h1>
          </div>
          <div className={styles.bottom}>
            <div className={styles.bottomCard}>
              <div className={styles.bottomLeft}>
                <div className={styles.leftImage}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M14.5466 6.2419C15.3791 5.34445 15.7954 4.89572 16.1335 4.8402C16.2665 4.81834 16.329 4.81848 16.462 4.84093C16.7998 4.89795 17.2157 5.35029 18.0475 6.25496C18.8973 7.17925 19.9766 8.11427 21.0959 8.46512C21.9976 8.74779 23.219 8.74333 24.2028 8.67049C24.9641 8.61412 25.3447 8.58593 25.6089 8.7357C25.6967 8.7855 25.7708 8.84336 25.8404 8.91654C26.0496 9.13661 26.1064 9.46635 26.22 10.1258C26.6254 12.4791 27.1136 16.8106 25.8861 19.6279C24.7551 22.2238 21.6861 24.6387 19.3235 26.2012C18.2123 26.9361 17.6567 27.3035 16.7458 27.4251C16.5055 27.4572 16.0861 27.4654 15.8447 27.4429C14.9297 27.3574 14.3591 27.0117 13.2179 26.3202C10.6876 24.787 7.33458 22.3501 6.1264 19.6279C4.88138 16.8227 5.37381 12.4974 5.78521 10.1391C5.90127 9.47377 5.9593 9.14111 6.17242 8.92045C6.24297 8.84741 6.31893 8.78919 6.4078 8.74005C6.67626 8.5916 7.05779 8.62611 7.82085 8.69512C8.96121 8.79825 10.4461 8.827 11.5154 8.46512C12.6217 8.09072 13.6964 7.15837 14.5466 6.2419Z"
                      fill="white"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                  </svg>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M27.75 16C27.8881 16 28.0003 16.1119 27.9974 16.25C27.9531 18.3762 27.3444 20.4541 26.2317 22.2699C25.0754 24.1569 23.4198 25.6873 21.4479 26.692C19.476 27.6967 17.2647 28.1366 15.0585 27.963C12.8523 27.7893 10.737 27.009 8.94658 25.7082C7.15617 24.4074 5.76036 22.6368 4.91345 20.5922C4.06655 18.5476 3.80154 16.3086 4.14774 14.1227C4.49394 11.9369 5.43786 9.88941 6.87513 8.20658C8.25824 6.58717 10.0464 5.36618 12.0548 4.66701C12.1852 4.62162 12.3264 4.69373 12.3691 4.82504L15.4948 14.4452C15.7961 15.3723 16.66 16 17.6347 16H27.75Z"
                      fill="white"
                      stroke="white"
                      stroke-width="1.5"
                    />
                    <path
                      d="M17.1445 4.59672C17.1018 4.46541 17.1736 4.32394 17.3063 4.28577C18.3364 3.98949 19.4199 3.92234 20.4806 4.09033C21.6236 4.27136 22.7076 4.72035 23.6438 5.40058C24.5801 6.08081 25.342 6.97297 25.8674 8.00411C26.355 8.96092 26.6259 10.0122 26.6625 11.0834C26.6672 11.2214 26.5548 11.3334 26.4167 11.3334L20.2416 11.3334C19.7 11.3334 19.2201 10.9847 19.0527 10.4696L17.1445 4.59672Z"
                      fill="white"
                      stroke="white"
                      stroke-width="1.5"
                    />
                  </svg>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M12.6667 28H6.66667V23.6476C6.66667 21.3978 6.66667 20.2729 7.23962 19.4843C7.42465 19.2296 7.64863 19.0056 7.90331 18.8206C8.69191 18.2476 9.81683 18.2476 12.0667 18.2476H12.6667V18.1333C12.6667 15.641 12.6667 14.3949 13.2026 13.4667C13.5536 12.8586 14.0586 12.3536 14.6667 12.0026C15.5949 11.4667 16.841 11.4667 19.3333 11.4667V7C19.3333 5.34315 20.6765 4 22.3333 4C23.9902 4 25.3333 5.34315 25.3333 7V28H19.3333H12.6667Z"
                      fill="white"
                    />
                    <path
                      d="M28 28H25.3333M4 28H6.66667M19.3333 28H12.6667M19.3333 28V11.4667M19.3333 28H25.3333M12.6667 28H6.66667M12.6667 28V18.2476M6.66667 28V23.6476C6.66667 21.3978 6.66667 20.2729 7.23962 19.4843C7.42465 19.2296 7.64863 19.0056 7.90331 18.8206C8.69191 18.2476 9.81683 18.2476 12.0667 18.2476H12.6667M12.6667 18.2476V18.1333C12.6667 15.641 12.6667 14.3949 13.2026 13.4667C13.5536 12.8586 14.0586 12.3536 14.6667 12.0026C15.5949 11.4667 16.841 11.4667 19.3333 11.4667V11.4667M19.3333 11.4667V7C19.3333 5.34315 20.6765 4 22.3333 4V4C23.9902 4 25.3333 5.34315 25.3333 7V28"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M27.75 16C27.8881 16 28.0003 16.1119 27.9974 16.25C27.9531 18.3762 27.3444 20.4541 26.2317 22.2699C25.0754 24.1569 23.4198 25.6873 21.4479 26.692C19.476 27.6967 17.2647 28.1366 15.0585 27.963C12.8523 27.7893 10.737 27.009 8.94658 25.7082C7.15617 24.4074 5.76036 22.6368 4.91345 20.5922C4.06655 18.5476 3.80154 16.3086 4.14774 14.1227C4.49394 11.9369 5.43786 9.88941 6.87513 8.20658C8.25824 6.58717 10.0464 5.36618 12.0548 4.66701C12.1852 4.62162 12.3264 4.69373 12.3691 4.82504L15.4948 14.4452C15.7961 15.3723 16.66 16 17.6347 16H27.75Z"
                      fill="white"
                      stroke="white"
                      stroke-width="1.5"
                    />
                    <path
                      d="M17.1445 4.59672C17.1018 4.46541 17.1736 4.32394 17.3063 4.28577C18.3364 3.98949 19.4199 3.92234 20.4806 4.09033C21.6236 4.27136 22.7076 4.72035 23.6438 5.40058C24.5801 6.08081 25.342 6.97297 25.8674 8.00411C26.355 8.96092 26.6259 10.0122 26.6625 11.0834C26.6672 11.2214 26.5548 11.3334 26.4167 11.3334L20.2416 11.3334C19.7 11.3334 19.2201 10.9847 19.0527 10.4696L17.1445 4.59672Z"
                      fill="white"
                      stroke="white"
                      stroke-width="1.5"
                    />
                  </svg>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M12.6667 28H6.66667V23.6476C6.66667 21.3978 6.66667 20.2729 7.23962 19.4843C7.42465 19.2296 7.64863 19.0056 7.90331 18.8206C8.69191 18.2476 9.81683 18.2476 12.0667 18.2476H12.6667V18.1333C12.6667 15.641 12.6667 14.3949 13.2026 13.4667C13.5536 12.8586 14.0586 12.3536 14.6667 12.0026C15.5949 11.4667 16.841 11.4667 19.3333 11.4667V7C19.3333 5.34315 20.6765 4 22.3333 4C23.9902 4 25.3333 5.34315 25.3333 7V28H19.3333H12.6667Z"
                      fill="white"
                    />
                    <path
                      d="M28 28H25.3333M4 28H6.66667M19.3333 28H12.6667M19.3333 28V11.4667M19.3333 28H25.3333M12.6667 28H6.66667M12.6667 28V18.2476M6.66667 28V23.6476C6.66667 21.3978 6.66667 20.2729 7.23962 19.4843C7.42465 19.2296 7.64863 19.0056 7.90331 18.8206C8.69191 18.2476 9.81683 18.2476 12.0667 18.2476H12.6667M12.6667 18.2476V18.1333C12.6667 15.641 12.6667 14.3949 13.2026 13.4667C13.5536 12.8586 14.0586 12.3536 14.6667 12.0026C15.5949 11.4667 16.841 11.4667 19.3333 11.4667V11.4667M19.3333 11.4667V7C19.3333 5.34315 20.6765 4 22.3333 4V4C23.9902 4 25.3333 5.34315 25.3333 7V28"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M14.5466 6.2419C15.3791 5.34445 15.7954 4.89572 16.1335 4.8402C16.2665 4.81834 16.329 4.81848 16.462 4.84093C16.7998 4.89795 17.2157 5.35029 18.0475 6.25496C18.8973 7.17925 19.9766 8.11427 21.0959 8.46512C21.9976 8.74779 23.219 8.74333 24.2028 8.67049C24.9641 8.61412 25.3447 8.58593 25.6089 8.7357C25.6967 8.7855 25.7708 8.84336 25.8404 8.91654C26.0496 9.13661 26.1064 9.46635 26.22 10.1258C26.6254 12.4791 27.1136 16.8106 25.8861 19.6279C24.7551 22.2238 21.6861 24.6387 19.3235 26.2012C18.2123 26.9361 17.6567 27.3035 16.7458 27.4251C16.5055 27.4572 16.0861 27.4654 15.8447 27.4429C14.9297 27.3574 14.3591 27.0117 13.2179 26.3202C10.6876 24.787 7.33458 22.3501 6.1264 19.6279C4.88138 16.8227 5.37381 12.4974 5.78521 10.1391C5.90127 9.47377 5.9593 9.14111 6.17242 8.92045C6.24297 8.84741 6.31893 8.78919 6.4078 8.74005C6.67626 8.5916 7.05779 8.62611 7.82085 8.69512C8.96121 8.79825 10.4461 8.827 11.5154 8.46512C12.6217 8.09072 13.6964 7.15837 14.5466 6.2419Z"
                      fill="white"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                  </svg>
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
        </div>
      </div>
    </>
  );
}
