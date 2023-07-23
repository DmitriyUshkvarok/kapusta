import { selectOptionsExpense, selectOptionsIncome } from '@/src/data/data';
import styles from '@/src/sass/components/_customSelect.module.scss';

export default function CustomSelect({
  isOpen,
  chooseOption,
  openSelect,
  option,
  isEmptyField,
  path,
}) {
  const actualListSelect =
    path === 'expense' ? selectOptionsExpense : selectOptionsIncome;
  return (
    <div onClick={openSelect} tabIndex="0" className={styles.wrapCustomSelect}>
      <p className={styles.customSelect}>{chooseOption}</p>
      <svg className={styles.iconStyled} width={12} height={12}>
        <use xlinkHref="/sprite.svg#icon-select" />
      </svg>
      {isOpen && (
        <ul
          className={`${styles.customListSelect} ${isOpen ? styles.open : ''}`}
        >
          {actualListSelect.map(({ name, id }) => (
            <li
              onClick={() => option(name)}
              key={id}
              className={styles.customItem}
            >
              {name}
            </li>
          ))}
        </ul>
      )}
      {isEmptyField && (
        <span className={styles.errMsg}>This is a required field</span>
      )}
    </div>
  );
}
