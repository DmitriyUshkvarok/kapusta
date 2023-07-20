import StatisticPanelBalance from '@/src/components/StatisticPanelBalance/StatisticPanelBalance';
import styles from '../../sass/components/_statistic-page.module.scss';

export default function StatisticLayout({ children }) {
  return (
    <>
      <section className={styles.statisticPage}>
        <div>
          <StatisticPanelBalance />
        </div>
        <p>panel income and expense</p>
        {children}
      </section>
      ;
    </>
  );
}
