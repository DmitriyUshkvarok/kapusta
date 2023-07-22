import styles from '@/src/sass/components/_customSelect.module.scss';

const selectOptions = [
  { name: 'Transport', id: 1 },
  { name: 'Products', id: 2 },
  { name: 'Health', id: 3 },
  { name: 'Alcohol', id: 4 },
  { name: 'Entertainment', id: 5 },
  { name: 'Housing', id: 6 },
  { name: 'Technique', id: 7 },
  { name: 'Communal, communication', id: 8 },
  { name: 'Sports, hobbies', id: 9 },
  { name: 'Education', id: 10 },
  { name: 'Other', id: 11 },
];

export default function CustomSelect({
  isOpen,
  chooseOption,
  openSelect,
  option,
}) {
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
          {selectOptions.map(({ name, id }) => (
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
    </div>
  );
}
