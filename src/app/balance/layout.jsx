'use client';
import { usePathname } from 'next/navigation';
import { useMediaQuery } from 'react-responsive';
import BalanceTopPanel from '@/src/components/BalanceTopPanel/BalanceTopPanel';
import TransactionForm from '@/src/components/TransactionForm/TransactionForm';
import NavBalance from '@/src/components/NavBalance/NavBalance';
import ButtonBackMobile from '@/src/components/ButtonBackMobile/ButtonBackMobile';
import ReportsUser from '@/src/components/ReportsUser/ReportsUser';

import styles from '@/src/sass/components/_balanceLayout.module.scss';
import DateCalendar from '@/src/components/Date/Date';

export default function BalanceLayout({ children }) {
  const pathname = usePathname();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  if (isMobile) {
    return (
      <>
        <div className={styles.container}>
          <ButtonBackMobile pathname={pathname} />
          <ReportsUser />
          <BalanceTopPanel />
          <DateCalendar />
          {children}
        </div>
        <NavBalance />
      </>
    );
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.wrapContent}>
          <BalanceTopPanel />
          <ReportsUser />
        </div>

        <NavBalance />
        <div className={styles.wrapContentTablet}>
          <TransactionForm />
          <div className={styles.containerDesktop}>{children}</div>
        </div>
      </div>
    );
  }
}
