import StatisticBalance from '../StatisticBalance/StatisticBalance';
import ButtonBack from '../ButtonBack/ButtonBack';
import StatisticPeriodMenu from '../StatisticPeriodMenu/StatisticPeriodMenu';
import styles from '../../sass/components/_statisticPanelBalance.module.scss';

const StatisticPanelBalance = () => {
  return (
    <>
      <ul className={styles.statisticPanelList}>
        <li className={styles.statisticPanelItemBtnBack}>
          <ButtonBack />
        </li>
        <li className={styles.statisticPanelItemPeriod}>
          <StatisticPeriodMenu />
        </li>
        <li className={styles.statisticPanelItemBalance}>
          <StatisticBalance />
        </li>
      </ul>
    </>
  );
};

export default StatisticPanelBalance;
