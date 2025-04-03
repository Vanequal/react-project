import React, { useState } from 'react';
import styles from '../../styles/ProfileCheckCard.module.scss';
import Button from './Button';
import ButtonInline from './ButtonInline';
import TelegramAnimation from './TelegramAnimation';
import avatar from '../../assets/avatar.png';

const ProfileCheckCard: React.FC = () => {
  const [lang, setLang] = useState<'RU' | 'ENG'>('RU');

  return (
    <div className={styles.profileCheckCard}>
      <h1 className={styles.header}>Проверка профиля</h1>
      
      <div className={styles.avatarWrapper}>
        <img src={avatar} alt="Avatar" className={styles.avatar} />
      </div>
      
      <div className={styles.profileText}>
        <p>Steam никнейм покупателя. Проверьте <br /> перед покупкой!{' '} <br /></p>
        <a href="https://steamcommunity.com/profiles/steamid64" target="_blank" rel="noopener noreferrer">
          https://steamcommunity.com/profiles/steamid64
        </a>
      </div>
      
      <div className={styles.buttons}>
        <Button>Это мой аккаунт 1 мин 59 с</Button>
        <ButtonInline>Сменить аккаунт</ButtonInline>
      </div>
      
      <div className={styles.footer}>
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
          <TelegramAnimation />
        </div>
      </div>
    </div>
  );
};

export default ProfileCheckCard;
