'use client';
import styles from '../../sass/components/_diagramExpense.module.scss';
import { useMediaQuery } from 'react-responsive';

const dataDiagram = [
  { id: 1, name: 'Курица', expense: 1000 },
  { id: 2, name: 'Рыба', expense: 1700 },
  { id: 3, name: 'Печенье', expense: 600 },
  { id: 4, name: 'Свинина', expense: 1500 },
  { id: 5, name: 'Говядина', expense: 3500 },
  { id: 6, name: 'Колбаса', expense: 200 },
  { id: 7, name: 'Чай', expense: 100 },
  { id: 8, name: 'Хлеб', expense: 900 },
  { id: 9, name: 'Крупы', expense: 800 },
  { id: 10, name: 'Кетчуп', expense: 300 },
];
const DiagramaExpense = () => {
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

export default DiagramaExpense;
