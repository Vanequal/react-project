import React, { useState, useEffect } from 'react';
import ConfirmCard from '../components/UI/ConfirmCard';
import ProfileCheckCard from '../components/UI/ProfileCheckCard';
import Button from '../components/UI/Button';
import ButtonInline from '../components/UI/ButtonInline';
import TelegramAnimation from '../components/UI/TelegramAnimation';
import DLCBadge from '../components/UI/DLCBadge';
import ActivationTimer from '../components/UI/ActivationTimer';
import logo from '../assets/logo-main.svg';
import desktopBackground from '../assets/DLC-background.png';
import mobileBackground from '../assets/DLC-background-mobile.png';
import avatar from '../assets/avatar.png';
import styles from '../styles/ConfirmSending.module.scss';

const ConfirmSending: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [lang, setLang] = useState<'RU' | 'ENG'>('RU');

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <div
      className={styles.confirmSendingPage}
      style={{ backgroundImage: `url(${isMobile ? mobileBackground : desktopBackground})` }}
    >
      {isMobile ? (
        <>
          <div className={styles.mobileHeader}>
            <div className={styles.headerLeft}>
              <img src={logo} alt="Логотип" />
            </div>
            <div className={styles.headerCenter}>
              <p>Для активации DLC нужна <br /> основная игра на аккаунте</p>
            </div>
          </div>

          {/* Мобильный контент */}
          <div className={styles.mobileContent}>
            <div className={styles.avatarWrapper}>
              <img src={avatar} alt="Avatar" className={styles.avatar} />
            </div>
            <div className={styles.badgeTimerRow}>
              <DLCBadge />
              <ActivationTimer time="00:00:00" />
            </div>
            <div className={styles.title}>
              <p>Command &amp; Conquer™ Red Alert™ 3- Uprising</p>
            </div>
            <div className={styles.orderInfo}>
              <p>Заказ #99999999</p>
              <p>
                Steam никнейм покупателя. Проверьте перед покупкой!
                <br />
                <a
                  href="https://steamcommunity.com/profiles/steamid64"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://steamcommunity.com/profiles/steamid64
                </a>
              </p>
            </div>
            <div className={styles.buttons}>
              <Button>Это мой аккаунт 1 мин 59 с</Button>
              <ButtonInline>Сменить аккаунт</ButtonInline>
            </div>
          </div>

          <div className={styles.mobileFooter}>
            <div className={styles.langContainer}>
              <span
                className={`${styles.lang} ${lang === 'RU' ? styles.active : ''}`}
                onClick={() => setLang('RU')}
              >
                RU
              </span>
              <span
                className={`${styles.lang} ${lang === 'ENG' ? styles.active : ''}`}
                onClick={() => setLang('ENG')}
              >
                ENG
              </span>
            </div>
            <div className={styles.telegramAnimation}>
              <TelegramAnimation telegramLink="https://t.me/your_telegram" />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.logo}>
            <img src={logo} alt="Логотип" />
          </div>
          <div className={styles.cardsContainer}>
            <ConfirmCard 
             gameTitle="Command & Conquer™ Red Alert™ 3- Uprising"
             orderNumber="Заказ #99999999"
             timerTime="00:00:00"
             />
            <ProfileCheckCard 
              headerText="Проверка профиля"
              profileUrl="https://steamcommunity.com/profiles/steamid64"
              buttoninlinetext="Сменить аккаунт"
              showMainButton={true}
              friendRequestMessage={false}
              showSellerLink={false}
              buttonMainText="Это мой аккаунт 1 мин 59 с"
              steamNickname='Steam никнейм покупателя. Проверьте <br /> перед покупкой! <br />'
              showClose={false}
              />
          </div>
        </>
      )}
    </div>
  );
};

export default ConfirmSending;
