import styles from '../../sass/components/_statisticBalance.module.scss';
const StatisticBalance = () => {
  return (
    <>
      <div>
        <p className={styles.statisticBalanceText}>Balance:</p>
        <div className={styles.statisticBalanceBlock}>55 000.00 UAH</div>
      </div>
    </>
  );
};

export default StatisticBalance;
