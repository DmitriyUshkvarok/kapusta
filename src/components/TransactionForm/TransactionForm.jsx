import DateCalendar from '../Date/Date';
import styles from '@/src/sass/components/_transactuonForm.module.scss';

export default function TransactionForm() {
  return (
    <div className={styles.container}>
      <DateCalendar />
      <form>
        <label>
          <input type="text" />
          <input type="select" />
        </label>
      </form>
    </div>
  );
}
