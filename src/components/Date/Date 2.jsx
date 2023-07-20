import styles from '@/src/sass/components/_data.module.scss';
export default function DateCalendar() {
  const today = new Date();

  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();

  const formattedDate = `${day}.${month}.${year}`;

  return (
    <div className={styles.container}>
      <svg width={20} height={20}>
        <use xlinkHref="/sprite.svg#icon-calendar" />
      </svg>
      <p className={styles.timeTitle}>{formattedDate}</p>
    </div>
  );
}
