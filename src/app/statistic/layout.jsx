import StatisticPanelBalance from '@/src/components/StatisticPanelBalance/StatisticPanelBalance';
import StatisticExpenseIncomePanel from '@/src/components/StatisticExpenseIncomePanel/StatisticExpenseIncomePanel';
import styles from '../../sass/components/_statistic-page.module.scss';

export default function StatisticLayout({ children }) {
  return (
    <>
      <section className={styles.statisticPage}>
        <div>
          <StatisticPanelBalance />
        </div>
        <div>
          <StatisticExpenseIncomePanel />
        </div>
        {children}
        <div className={styles.additionalBackground}></div>
      </section>
    </>
  );
}
