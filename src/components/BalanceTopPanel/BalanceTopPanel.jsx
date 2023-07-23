'use client';
import styles from '@/src/sass/components/_balanceTopPanel.module.scss';
import { useState } from 'react';

const BalanceTopPanel = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [amount, setAmount] = useState('');
  const [isAmountSet, setIsAmountSet] = useState(false);

  const handleMouseEnter = () => {
    setShowPopUp(true);
  };

  const handleMouseLeave = () => {
    setShowPopUp(false);
  };

  const handleChangeSum = (e) => {
    setAmount(e.target.value);
  };

  const submitSum = (e) => {
    e.preventDefault();
    setIsAmountSet(true);
  };
  return (
    <div>
      <div className={styles.container}>
        <h2 className={styles.title}>Balance:</h2>
        <form
          autoComplete="off"
          onSubmit={(e) => submitSum(e)}
          className={styles.balanceContent}
        >
          <input
            name="balance"
            type="text"
            value={isAmountSet ? `${amount} UAH` : amount}
            readOnly={isAmountSet}
            placeholder="00.00 UAH"
            onChange={(e) => handleChangeSum(e)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={styles.sumaTitle}
          />

          <div
            style={{ display: isAmountSet && 'none' }}
            className={`${styles.popUp} ${showPopUp ? styles.show : ''}`}
          >
            <p className={styles.titlePopUp}>
              Hello! To get started, enter the current balance of your account!
            </p>
            <p className={styles.descPopUp}>
              You can not spend money until you have it
            </p>
          </div>

          <button
            disabled={isAmountSet}
            type="submit"
            className={styles.confirmTitle}
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default BalanceTopPanel;
