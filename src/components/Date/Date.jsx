import getAndTransformDate from '@/src/auxiliaryFunctions/getAndTransformDate';
import styles from '@/src/sass/components/_data.module.scss';
export default function DateCalendar() {
  const formattedDate = getAndTransformDate();

  return (
    <div className={styles.container}>
      <svg width={20} height={20}>
        <use xlinkHref="/sprite.svg#icon-calendar" />
      </svg>
      <p className={styles.timeTitle}>{formattedDate}</p>
    </div>
  );
}
