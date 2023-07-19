import BalanceTopPanel from '../BalanceTopPanel/BalanceTopPanel';
import ButtonBack from '../ButtonBack/ButtonBack';
import StatisticPeriodMenu from '../StatisticPeriodMenu/StatisticPeriodMenu';
import styles from '../../sass/components/_statisticPanelBalance.module.scss';

const StatisticPanelBalance = () => {
  return (
    <>
      <ul className={styles.statisticPanelList}>
        <li>
          <ButtonBack />
        </li>
        <li>
          <BalanceTopPanel />
        </li>
        <li>
          <StatisticPeriodMenu />
        </li>
      </ul>
    </>
  );
};

export default StatisticPanelBalance;
