'use client';
import styles from '@/src/sass/components/_balanceTopPanel.module.scss';

const BalanceTopPanel = () => {
  return (
    <div>
      <div className={styles.container}>
        <h2 className={styles.title}>Balance:</h2>
        <div className={styles.balanceContent}>
          <p className={styles.sumaTitle}>00.00 UAH</p>
          <p className={styles.confirmTitle}>Confirm</p>
        </div>
      </div>
    </div>
  );
};

export default BalanceTopPanel;
