'use client';
import { useMediaQuery } from 'react-responsive';
import DateCalendar from '../Date/Date';
import styles from '@/src/sass/components/_transactuonForm.module.scss';
import { useState } from 'react';

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

export default function TransactionForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [chooseOption, setChooseOption] = useState('Product category');
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const handleOpenSelectOptions = () => {
    setIsOpen(!isOpen);
  };
  const handleChooseOption = (name) => {
    setChooseOption(name);
  };

  return (
    <div className={styles.container}>
      {!isMobile && <DateCalendar />}
      <form className={styles.form}>
        <label className={styles.label}>
          <input
            className={styles.input}
            type="text"
            placeholder="Product description"
          />
        </label>
        <div
          onClick={handleOpenSelectOptions}
          tabIndex="0"
          className={styles.wrapCustomSelect}
        >
          <p className={styles.customSelect}>{chooseOption}</p>
          <svg className={styles.iconStyled} width={12} height={12}>
            <use xlinkHref="/sprite.svg#icon-select" />
          </svg>
          {isOpen && (
            <ul
              className={`${styles.customListSelect} ${
                isOpen ? styles.open : ''
              }`}
            >
              {selectOptions.map(({ name, id }) => (
                <li
                  onClick={() => handleChooseOption(name)}
                  key={id}
                  className={styles.customItem}
                >
                  {name}
                </li>
              ))}
            </ul>
          )}
        </div>
        <label className={styles.labelForSum}>
          <input className={styles.inputBySum} type="text" />
          <span className={styles.containerByIcon}>
            <svg width={20} height={20}>
              <use xlinkHref="/sprite.svg#icon-calculator" />
            </svg>
          </span>
        </label>
        <div className={styles.btnContainer}>
          <button className={`${styles.btn} ${styles.btnSubmit}`} type="submir">
            Input
          </button>
          <button className={`${styles.btn} ${styles.btnClear}`} type="reset">
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}
