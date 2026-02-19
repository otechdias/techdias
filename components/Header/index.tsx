"use Client";
import Image from "next/image";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftside}>
          <Image src="/newLogo.svg" alt="Logo" width={50} height={50} />
          <h4>otimizare</h4>
        </div>
        <div className={styles.middle}>
          <h5>Why Us</h5>
          <h5>Services</h5>
          <h5>Our Process</h5>
          <h5>Payments</h5>
          <h5>FAQs</h5>
        </div>
        <div className={styles.rightside}>
          <button>Entre em contato</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
