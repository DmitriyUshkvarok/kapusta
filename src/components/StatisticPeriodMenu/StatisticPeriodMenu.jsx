'use client';
import { useState } from 'react';
import { format, addMonths, subMonths } from 'date-fns';

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
      <p>Currrent period:</p>
      <div>
        <button type="button" onClick={handlePreviousMonth}>
          <svg width={16} height={16}>
            <use xlinkHref="/sprite.svg#icon-prev" />
          </svg>
        </button>
        <div>{format(currentPeriod, 'MMMM yyyy')}</div>
        <button type="button" onClick={handleNextMonth}>
          <svg width={16} height={16}>
            <use xlinkHref="/sprite.svg#icon-next" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default StatisticPeriodMenu;
