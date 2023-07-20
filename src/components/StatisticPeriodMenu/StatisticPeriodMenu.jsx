'use client';
import { useState } from 'react';
import { format, addMonths, subMonths } from 'date-fns';
import styles from '../../sass/components/_statisticPeriodMenu.module.scss';

const StatisticPeriodMenu = () => {
  const [currentPeriod, setCurrentPeriod] = useState(new Date());

  const handlePreviousMonth = () => {
    setCurrentPeriod((prevPeriod) => subMonths(prevPeriod, 1));
  };
  const handleNextMonth = () => {
    setCurrentPeriod((prevPeriod) => addMonths(prevPeriod, 1));
  };
  return (
    <>
      <p className={styles.statisticPeriodTitle}>Currrent period:</p>
      <div className={styles.statisticPeriodwrapper}>
        <button
          type="button"
          onClick={handlePreviousMonth}
          className={styles.statisticPeriodBtnPrev}
        >
          <svg width={16} height={16}>
            <use xlinkHref="/sprite.svg#icon-prev" />
          </svg>
        </button>
        <div className={styles.statisticPeriodText}>
          {format(currentPeriod, 'MMMM yyyy')}
        </div>
        <button
          type="button"
          onClick={handleNextMonth}
          className={styles.statisticPeriodBtnNext}
        >
          <svg width={16} height={16}>
            <use xlinkHref="/sprite.svg#icon-next" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default StatisticPeriodMenu;
