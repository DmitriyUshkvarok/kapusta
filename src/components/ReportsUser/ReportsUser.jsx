import Link from 'next/link';
import styles from '@/src/sass/components/_reportsUser.module.scss';

export default function ReportsUser() {
  return (
    <div className={styles.container}>
      <Link className={styles.linkStyled} href="/statistic">
        <p> Reports</p>
      </Link>
      <svg width={22} height={22}>
        <use xlinkHref="/sprite.svg#icon-bar_chart-24px-1" />
      </svg>
    </div>
  );
}
