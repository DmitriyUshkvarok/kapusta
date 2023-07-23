'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '@/src/sass/components/_navBalance.module.scss';

export default function NavBalance() {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <ul className={styles.listNav}>
        <li
          className={`${styles.itemNav} ${
            pathname === '/balance/expense' ? styles.active : ''
          }`}
        >
          <Link className={styles.linkStyled} href="/balance/expense">
            expense
          </Link>
        </li>
        <li
          className={`${styles.itemNav} ${
            pathname === '/balance/income' ? styles.active : ''
          }`}
        >
          <Link className={styles.linkStyled} href="/balance/income">
            income
          </Link>
        </li>
      </ul>
    </div>
  );
}
