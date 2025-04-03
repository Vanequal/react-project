import styles from "../styles/Home.module.scss";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import Checkbox from "../components/UI/Checkbox";
import TelegramAnimation from "../components/UI/TelegramAnimation";
import logo from "../assets/logo-main.svg";
import background from "../assets/main-background.webp";
import { useState, useEffect } from "react";

const Home = () => {
  const [lang, setLang] = useState<"RU" | "ENG">("RU");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  return (
    <div className={styles.home} style={{ backgroundImage: `url(${background})` }}>
      <div className={styles.headerLogo}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>

      {!isMobile ? (
        // Десктопная версия
        <div className={styles.card}>
          <h1>Введите уникальный <br /> код заказа</h1>
          <Input placeholder="Введите уникальный код" />
          <Button>Подтвердить</Button>
          <div className={styles.checkboxContainer}>
            <Checkbox label="Я не робот" />
          </div>
          <p className={styles.contact}>Связаться с продавцом</p>

          <div className={styles.footer}>
            <div className={styles.langContainer}>
              <span
                className={`${styles.lang} ${lang === "RU" ? styles.active : ""}`}
                onClick={() => setLang("RU")}
              >
                RU
              </span>
              <span
                className={`${styles.lang} ${lang === "ENG" ? styles.active : ""}`}
                onClick={() => setLang("ENG")}
              >
                ENG
              </span>
            </div>
            
            <TelegramAnimation telegramLink="https://t.me/your_telegram" />
          </div>
        </div>
      ) : (
        // Мобильная версия
        <>
          <div className={styles.mobileContent}>
            <h1>Введите уникальный код заказа</h1>
            <div className={styles.mobileInput}>
              <Input placeholder="Введите уникальный код" className="w-full" />
            </div>
            <div className={styles.mobileButton}>
              <Button className="w-full">Подтвердить</Button>
            </div>
            <div className={styles.mobileCheckbox}>
              <Checkbox label="Я не робот" />
            </div>
            <p className={styles.contact}>Связаться с продавцом</p>
          </div>

          <div className={styles.mobileFooter}>
            <div className={styles.langContainer}>
              <span
                className={`${styles.lang} ${lang === "RU" ? styles.active : ""}`}
                onClick={() => setLang("RU")}
              >
                RU
              </span>
              <span
                className={`${styles.lang} ${lang === "ENG" ? styles.active : ""}`}
                onClick={() => setLang("ENG")}
              >
                ENG
              </span>
            </div>
            
            <div className={styles.telegramIcon}>
              <TelegramAnimation telegramLink="https://t.me/your_telegram" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;