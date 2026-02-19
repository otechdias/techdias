"use client";

import { useEffect, useState } from "react";
import styles from "./styles.module.scss";


const accordionData = [
  {
    question: "O que é uma landing page?",
    answer:
      "É uma página criada com o objetivo de converter visitantes em leads ou clientes, focada em uma única ação como preencher um formulário, solicitar orçamento oucomprar um produto.",
  },
  {
    question: "Por que eu preciso de uma landing page?",
    answer:
      "Landing pages aumentam significativamente as taxas de conversão, pois são projetadas para eliminar distrações e direcionar o usuário para uma ação específica.",
  },
  {
    question: "Quanto tempo leva para criar uma landing page?",
    answer:
      "O prazo varia conforme a complexidade do projeto, mas geralmente entre 5 e 10 dias úteis já é possível entregar uma página completa e funcional.",
  },
  {
    question: "Vocês oferecem manutenção após a entrega?",
    answer:
      "Sim! Oferecemos planos de suporte e manutenção para garantir que sua landing page esteja sempre atualizada e otimizada.",
  },
  {
    question: "Posso integrar minha landing page com ferramentas externas?",
    answer:
      " Claro! Fazemos integrações com CRM, WhatsApp, Google Analytics, e outras plataformas",
  },
  {
    question: "Minha landing page será responsiva?",
    answer:
      "Sim, todas as páginas são desenvolvidas para se adaptar perfeitamente a qualquer dispositivo: desktop, tablet ou smartphone.",
  },
];

const NewQuestions = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check on component mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.container}>
      
      <div className={styles.content}>
        <div className={styles.title}>
          <h2>Perguntas Frequentes!</h2>
        </div>
        <div className={styles.accordion}>
          {accordionData.map((item, index) => (
            <div
              className={`${styles.accordionItem} ${
                activeIndex === index ? styles.active : ""
              }`}
              key={index}
            >
              <div
                className={styles.accordionHeader}
                onClick={() => handleToggle(index)}
              >
                <h3>{item.question}</h3>
                <span>{activeIndex === index ? "-" : "+"}</span>
              </div>
              <div
                className={styles.accordionContent}
                style={{
                  maxHeight:
                    activeIndex === index
                      ? isMobile
                        ? "300px"
                        : "100px"
                      : "0",
                }}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.button}>
          <button
            onClick={() => window.open("https://wa.link/tw5aec", "_blank")}
          >
            dúvidas? FALE COM A NOSSA EQUIPE
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewQuestions;
