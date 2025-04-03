import React from 'react';
import styles from '../../styles/ActivationTimer.module.scss';

interface ActivationTimerProps {
  time: string;
}

const ActivationTimer: React.FC<ActivationTimerProps> = ({ time }) => {
  return (
    <div className={styles.activationTimer}>
      <span>Время на&nbsp;активацию {time}</span>
    </div>
  );
};

export default ActivationTimer;
