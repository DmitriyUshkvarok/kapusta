'use client';
import { useRouter } from 'next/navigation';
import TransactionForm from '@/src/components/TransactionForm/TransactionForm';

export default function Transaction() {
  const router = useRouter();

  return (
    <>
      <div onClick={() => router.back()}>back</div>
      <TransactionForm />
    </>
  );
}
