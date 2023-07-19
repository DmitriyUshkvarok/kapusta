'use client';
import { useMediaQuery } from 'react-responsive';
import styles from '@/src/sass/components/_createPanelExpense.module.scss';

const expenseData = [
  { name: 'Undeground', sum: '30', category: 'Transport', date: '21.11.2019' },
  { name: 'Bananas', sum: '50', category: 'Products', date: '21.11.2019' },
  {
    name: 'Kindergarten',
    sum: '20 000',
    category: 'Other',
    date: '21.11.2019',
  },
  { name: 'Undeground', sum: '30', category: 'Transport', date: '21.11.2019' },
  { name: 'Undeground', sum: '30', category: 'Transport', date: '21.11.2019' },
  { name: 'Bananas', sum: '50', category: 'Products', date: '21.11.2019' },
  {
    name: 'Kindergarten',
    sum: '20 000',
    category: 'Other',
    date: '21.11.2019',
  },
  { name: 'Bananas', sum: '50', category: 'Products', date: '21.11.2019' },
  {
    name: 'Kindergarten',
    sum: '20 000',
    category: 'Other',
    date: '21.11.2019',
  },
  { name: 'Bananas', sum: '50', category: 'Products', date: '21.11.2019' },
  {
    name: 'Kindergarten',
    sum: '20 000',
    category: 'Other',
    date: '21.11.2019',
  },
];

const CreatePanelExpense = () => {
  const isTablet = useMediaQuery({ minWidth: 768 });

  return (
    <ul className={styles.container}>
      {expenseData.map(({ name, sum, category, date }, i) => (
        <li className={styles.itemList} key={i}>
          <div className={styles.wrapFlexContainer}>
            <p className={styles.titleNameProduct}>{name}</p>
            {isTablet ? (
              <>
                <span
                  style={{ order: 1 }}
                  className={styles.titleDateAndCategory}
                >
                  {date}
                </span>
                <p style={{ order: 3 }} className={styles.titleDateAndCategory}>
                  {category}
                </p>
              </>
            ) : (
              <div className={styles.wrapCategoryDate}>
                <span className={styles.titleDateAndCategory}>{date}</span>
                <p className={styles.titleDateAndCategory}>{category}</p>
              </div>
            )}
          </div>
          <div className={styles.wrapIconSum}>
            <p className={styles.sum}>{sum}.00 uan.</p>
            <svg width={18} height={18}>
              <use xlinkHref="/sprite.svg#icon-delete-1" />
            </svg>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CreatePanelExpense;
