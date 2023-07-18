'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMediaQuery } from 'react-responsive';
import BalanceTopPanel from '@/src/components/BalanceTopPanel/BalanceTopPanel';
import TransactionForm from '@/src/components/TransactionForm/TransactionForm';
import NavBalance from '@/src/components/NavBalance/NavBalance';
import ButtonBackMobile from '@/src/components/ButtonBackMobile/ButtonBackMobile';

export default function BalanceLayout({ children }) {
  const pathname = usePathname();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  if (isMobile) {
    return (
      <div>
        <ButtonBackMobile pathname={pathname} />
        <BalanceTopPanel />
        {children}

        <NavBalance />
      </div>
    );
  } else {
    return (
      <div>
        <BalanceTopPanel />
        <NavBalance />
        <TransactionForm />
        {children}
      </div>
    );
  }
}
