'use client';
import { useRouter, usePathname } from 'next/navigation';
import TransactionForm from '@/src/components/TransactionForm/TransactionForm';
import styles from '@/src/sass/components/_balanceLayout.module.scss';

export default function Transaction() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <div onClick={() => router.back()}>
        <svg width={18} height={18}>
          <use xlinkHref="/sprite.svg#icon-keyboard_backspace-24px-1" />
        </svg>
      </div>
      <TransactionForm pathname={pathname} />
    </div>
  );
}
