'use client';
import styles from '@/src/sass/components/_balanceTopPanel.module.scss';
import { useState } from 'react';
import DateCalendar from '../Date/Date';

const BalanceTopPanel = () => {
  const [showPopUp, setShowPopUp] = useState(false);

  const handleMouseEnter = () => {
    setShowPopUp(true);
  };

  const handleMouseLeave = () => {
    setShowPopUp(false);
  };
  return (
    <div>
      <div className={styles.container}>
        <h2 className={styles.title}>Balance:</h2>
        <div className={styles.balanceContent}>
          <p
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={styles.sumaTitle}
          >
            00.00 UAH
          </p>

          <div className={`${styles.popUp} ${showPopUp ? styles.show : ''}`}>
            <p className={styles.titlePopUp}>
              Hello! To get started, enter the current balance of your account!
            </p>
            <p className={styles.descPopUp}>
              You can't spend money until you have it
            </p>
          </div>

          <p className={styles.confirmTitle}>Confirm</p>
        </div>
      </div>
      <DateCalendar />
    </div>
  );
};

export default BalanceTopPanel;
