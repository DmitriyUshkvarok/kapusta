import styles from '../../sass/components/_statisticExpenseIncomePanel.module.scss';

const StatisticExpenseIncomePanel = () => {
  return (
    <section>
      <ul className={styles.incomeExpensesPanelWrapper}>
        <li className={styles.expensesItem}>
          <p className={styles.expensesTitle}>Expenses:</p>
          <div className={styles.expensesCount}>- 18 000.00 UAH.</div>
        </li>
        <li>
          <svg className={styles.incomeExpenseIcon} width={5} height={70}>
            <use xlinkHref="/sprite.svg#icon-line-vertical" />
          </svg>
        </li>
        <li className={styles.incomeItem}>
          <p className={styles.incomeTitle}>Income:</p>
          <div className={styles.incomeCount}>+ 45 000.00 UAH.</div>
        </li>
      </ul>
    </section>
  );
};

export default StatisticExpenseIncomePanel;
