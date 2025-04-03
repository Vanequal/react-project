import React from 'react';
import DLCBadge from './DLCBadge';
import ActivationTimer from './ActivationTimer';
import DLCImg from '../../assets/DLC-img.png';
import styles from '../../styles/ConfirmCard.module.scss';

const ConfirmCard: React.FC = () => {
  return (
    <div className={styles.confirmCard}>
      <div className={styles.imageContainer}>
        <img src={DLCImg} alt="DLC" />
      </div>
      
      <h1 className={styles.cardTitle}>
       <p>Command &amp; Conquer™ Red Alert™ 3- Uprising</p>
      </h1>
      
      <div className={styles.orderInfo}>
        <span className={styles.orderNumber}><p>Заказ #99999999</p></span>
        <DLCBadge />
        <ActivationTimer time="00:00:00" />
      </div>
      
      <div className={styles.footerText}>
        <p>Для активации DLC нужна <br /> основная игра на аккаунте.</p>
      </div>
    </div>
  );
};

export default ConfirmCard;
