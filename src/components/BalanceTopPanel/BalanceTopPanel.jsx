'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const BalanceTopPanel = () => {
  // const router = useRouter();

  return (
    <div>
      {/* <Link href="/expense/transactionExpense">to transaction</Link> */}
      {/* <Link href="/statistic">Reports</Link> */}
      <div>
        <h2>Balance:</h2>
        <div>
          <p>00.00 UAH</p>
          <p>Confirm</p>
        </div>
      </div>
    </div>
  );
};

export default BalanceTopPanel;
