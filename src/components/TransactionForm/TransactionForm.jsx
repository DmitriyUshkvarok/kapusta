'use client';
import { useMediaQuery } from 'react-responsive';
import DateCalendar from '../Date/Date';
import styles from '@/src/sass/components/_transactuonForm.module.scss';

export default function TransactionForm() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <div className={styles.container}>
      {!isMobile && <DateCalendar />}
      <form className={styles.form}>
        <label className={styles.label}>
          <input type="text" />
        </label>
        <div>
          <p className={styles.label}>Select product</p>
          <ul>
            <li>Products</li>
            <li>Holiday</li>
            <li>Other</li>
          </ul>
        </div>
        <label>
          <input type="text" />
        </label>
        <div>
          <button type="submir">Input</button>
          <button type="reset">Clear</button>
        </div>
      </form>
    </div>
  );
}
