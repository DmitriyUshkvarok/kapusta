import Link from 'next/link';
import styles from '../../sass/components/_incomeList.module.scss';
import { dataIncome } from './dataIncome';

const IncomeList = () => {
  return (
    <>
      <section className={styles.incomeSection}>
        <div className={styles.pageСhanger}>
          <Link href="/statistic/income">
            <svg width={10} height={10}>
              <use xlinkHref="/sprite.svg#icon-prev" />
            </svg>
          </Link>
          <p className={styles.pageNameIncome}>income</p>
          <Link href="/statistic/expenses">
            <svg width={10} height={10}>
              <use xlinkHref="/sprite.svg#icon-next" />
            </svg>
          </Link>
        </div>
        <div className={styles.pageIncomeList}>
          {dataIncome.map((item, index) => (
            <>
              <div className={styles.pageIncomeItem} key={index}>
                <div className={styles.pageIncomeAmount}>{item.amount}</div>
                <div className={styles.iconDecorWrapper}>
                  <div className={styles.iconDecor}></div>
                  <svg width={65} height={56}>
                    <use xlinkHref={`/sprite.svg#${item.icon}`} />
                  </svg>
                </div>
                <p className={styles.pageIncomeItemName}>{item.name}</p>
              </div>
              {(index + 1) % 3 === 0 && index !== dataIncome.length - 1 && (
                <div className={styles.borderBottom}></div>
              )}
              {index === dataIncome.length - 1 && index % 3 !== 2 && (
                <div className={styles.borderBottom}></div>
              )}
            </>
          ))}
        </div>
      </section>
    </>
  );
};

export default IncomeList;
