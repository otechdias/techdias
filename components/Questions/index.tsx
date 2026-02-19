"use client";

import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

const accordionData = [
  {
    question: "Como vocês criam estratégias de tráfego pago personalizadas?",
    answer:
      "Desenvolvemos estratégias personalizadas iniciando com uma análise detalhada dos seus objetivos de marketing e do seu público-alvo. Com base nessas informações, criamos campanhas específicas que incluem seleção de plataformas, definição de orçamento e desenvolvimento de anúncios. Nossas estratégias são continuamente otimizadas para garantir que você obtenha o melhor retorno sobre o investimento.",
  },
  {
    question: "Quais plataformas de anúncios vocês gerenciam?",
    answer:
      "Gerenciamos campanhas em plataformas líderes como Google Ads, Facebook Ads, Instagram Ads e LinkedIn Ads, entre outras. Escolhemos as plataformas mais eficazes para atingir seu público-alvo e maximizar o impacto das suas campanhas.",
  },
  {
    question: "Como vocês determinam o orçamento ideal para minhas campanhas?",
    answer:
      "Analisamos seus objetivos de marketing, o custo médio por clique no seu setor e o volume de tráfego desejado para definir um orçamento adequado. Trabalhamos com você para ajustar o orçamento e otimizar as campanhas de acordo com o desempenho e as necessidades.",
  },
  {
    question: "Como vocês medem o sucesso das campanhas?",
    answer:
      "Utilizamos métricas-chave como retorno sobre o investimento (ROI), custo por clique (CPC), custo por aquisição (CPA) e taxa de conversão para medir o sucesso das campanhas. Fornecemos relatórios detalhados e análises para acompanhar o desempenho e identificar oportunidades de melhoria.",
  },
  {
    question:
      "Com que frequência vocês fornecem relatórios sobre o desempenho das campanhas?",
    answer:
      "Oferecemos relatórios detalhados com a frequência que melhor se adapta às suas necessidades, podendo ser semanal, quinzenal ou mensal. Os relatórios incluem análises de desempenho, insights e recomendações para otimizar suas campanhas.",
  },
  {
    question:
      "Vocês realizam testes A/B para melhorar os resultados das campanhas?",
    answer:
      "Sim, realizamos testes A/B para comparar diferentes versões de anúncios e páginas de destino. Isso nos permite identificar quais elementos geram melhores resultados e ajustar suas campanhas para maximizar a eficácia.",
  },
  {
    question:
      "Como vocês lidam com a concorrência nas campanhas de tráfego pago?",
    answer:
      "Monitoramos a concorrência e ajustamos suas campanhas para garantir que você se destaque. Analisamos estratégias de concorrentes, ajustamos lances e otimizamos os anúncios para garantir que você obtenha o melhor posicionamento possível.",
  },
  {
    question: "Quando posso esperar ver resultados das campanhas?",
    answer:
      "Você pode começar a ver resultados iniciais em algumas semanas após o início das campanhas. A otimização contínua pode levar alguns meses para atingir o desempenho ideal, dependendo de vários fatores, como o setor e o orçamento.",
  },
  {
    question: "Oferecem suporte contínuo e consultoria para minhas campanhas?",
    answer:
      "Sim, oferecemos suporte contínuo e consultoria. Nossa equipe está sempre disponível para responder a perguntas, fornecer orientação e ajustar campanhas conforme necessário para atender às suas necessidades.",
  },
  {
    question:
      " Como vocês garantem que as campanhas estão alinhadas com a minha marca?",
    answer:
      "Trabalhamos em estreita colaboração com você para entender sua marca, valores e objetivos. Nossas campanhas são projetadas para refletir sua identidade de marca e alinhadas com seus objetivos de marketing. Revisamos e ajustamos continuamente para garantir que sua marca esteja bem representada.",
  },
];

const Questions = () => {
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
      </div>
    </div>
  );
};

export default Questions;
