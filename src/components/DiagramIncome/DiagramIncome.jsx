'use client';
import styles from '../../sass/components/_diagramIncome.module.scss';
import { useMediaQuery } from 'react-responsive';

const dataDiagram = [
  { id: 1, name: 'my', expense: 25000 },
  { id: 2, name: 'wife', expense: 20000 },
];
const DiagramIncome = () => {
  const isMobileView = useMediaQuery({ maxWidth: 768 });

  const maxExpense = Math.max(...dataDiagram.map((item) => item.expense));

  return (
    <div className={styles.diagramContainer}>
      <div
        className={`${styles.diagramList} ${
          isMobileView ? styles.mobileView : ''
        }`}
      >
        <ul className={styles.diagramLineBottomList}>
          {Array.from({ length: 9 }, (_, index) => (
            <li className={styles.diagramLineBottom} key={index}></li>
          ))}
        </ul>
        {dataDiagram.map((item) => (
          <div className={styles.diagramListItem} key={item.id}>
            <div className={styles.diagramListItemName}>{item.name}</div>
            <div
              className={styles.diagramColumn}
              style={{
                height: isMobileView
                  ? '15px'
                  : `${(item.expense / maxExpense) * 100}%`,
                width: isMobileView
                  ? `${(item.expense / maxExpense) * 100}%`
                  : undefined,
              }}
            ></div>
            <p className={styles.diagramExpenseCount}>
              {item.expense}
              <span className={styles.diagramExpenseCountText}>uah</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiagramIncome;
