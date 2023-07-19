import styles from '@/src/sass/components/_createPanelExpense.module.scss';

const expenseData = [
  { name: 'Undeground', sum: '30', category: 'Transport', date: '21.11.2019' },
  { name: 'Bananas', sum: '50', category: 'Products', date: '21.11.2019' },
  {
    name: 'Kindergarten',
    sum: '8000',
    category: 'Other',
    date: '21.11.2019',
  },
  { name: 'Undeground', sum: '30', category: 'Transport', date: '21.11.2019' },
  { name: 'Undeground', sum: '30', category: 'Transport', date: '21.11.2019' },
];

const CreatePanelExpense = () => {
  return (
    <ul className={styles.container}>
      {expenseData.map(({ name, sum, category, date }, i) => (
        <li className={styles.itemList} key={i}>
          <div>
            <p className={styles.titleNameProduct}>{name}</p>
            <div className={styles.wrapCategoryDate}>
              <span className={styles.titleDateAndCategory}>{date}</span>
              <p className={styles.titleDateAndCategory}>{category}</p>
            </div>
          </div>
          <div className={styles.wrapIconSum}>
            <p className={styles.sum}>{sum} uan.</p>
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
