import React from 'react';
import ConfirmCard from '../components/UI/ConfirmCard';
import LogoMain from '../assets/logo-main.svg';
import styles from '../styles/ConfirmSending.module.scss';

const ConfirmSending: React.FC = () => {
  return (
    <div className={styles.confirmSendingPage}>
      <div className={styles.logo}>
        <img src={LogoMain} alt="Логотип" />
      </div>
      <div className={styles.content}>
        <div className={styles.cardContainer}>
          <ConfirmCard />
        </div>
      </div>
    </div>
  );
};

export default ConfirmSending;
