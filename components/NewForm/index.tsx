"use client";

import axios from "axios";
import { gsap } from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./styles.module.scss";

export default function NewForm() {
  const [isFormVisible, setFormVisible] = useState(false);
  const rowsRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isFormVisible) {
      // Fade-in the form with GSAP
      gsap.to(formRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        display: "block",
      });
    }
  }, [isFormVisible]);

  const handleButtonClick = () => {
    // Animate the rows to fade out and then set form to visible
    gsap.to(rowsRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      onComplete: () => {
        setFormVisible(true);
      },
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("/api/sendMail", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        toast.success("Informações enviadas com sucesso");
      } else {
        toast.error("Erro ao enviar informações");
      }
    } catch (error) {
      toast.error("Erro ao enviar informações");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <ToastContainer />
      <div className={styles.backgroundImage}></div>
      <div className={styles.content}>
        <div className={styles.leftside}>
          <h2>Nós somos</h2>
          <h3>Inteligência no Digital</h3>
          <h5>
            Com nossa abordagem estratégica, garantimos que você maximize seus
            resultados e obtenha um excelente retorno sobre o seu investimento.
          </h5>
        </div>
        <div className={styles.rightside}>
          {!isFormVisible ? (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
              ref={rowsRef}
            >
              <div className={styles.row}>
                <p>Fase 01</p> <hr /> <h5>Análise e Diagnóstico</h5>
                <Image src="/check.svg" alt="arrow" width={20} height={20} />
              </div>
              <div className={styles.row}>
                <p>Fase 02</p> <hr /> <h5>Desenvolvimento de Estratégia</h5>
                <Image src="/check.svg" alt="arrow" width={20} height={20} />
              </div>
              <div className={styles.row}>
                <p>Fase 03</p> <hr /> <h5>Implementação e Execução</h5>
                <Image src="/check.svg" alt="arrow" width={20} height={20} />
              </div>
              <div className={styles.row}>
                <p>Fase 04</p> <hr /> <h5>Monitoramento e Otimização</h5>
                <Image src="/check.svg" alt="arrow" width={20} height={20} />
              </div>
              <div className={styles.button}>
                <button onClick={handleButtonClick}>
                  Faça um orçamento agora mesmo
                  <Image src="/seta.svg" alt="arrow" width={20} height={20} />
                </button>
              </div>
            </div>
          ) : (
            <form
              ref={formRef}
              className={styles.form}
              style={{ opacity: 0, display: "none" }}
              onSubmit={handleSubmit}
            >
              <h4>
                Olá! Que bom ter você por aqui! Por favor, preencha este
                formulário com cuidado, porque essa é a maneira especial de
                nossa equipe entrar em contato com você.
              </h4>

              <label htmlFor="name">Qual é o seu nome?</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Nome"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="phone">
                Qual o seu melhor telefone para contato?
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Telefone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <label htmlFor="email">Qual é o seu principal e-mail?</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <button
                type="submit"
                disabled={loading}
                style={{
                  paddingBlock: loading ? "0px" : "18px", // Change padding when loading
                }}
              >
                {loading ? (
                  <img src="/otimizare2.gif" alt="Loading..." />
                ) : (
                  "Enviar"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
