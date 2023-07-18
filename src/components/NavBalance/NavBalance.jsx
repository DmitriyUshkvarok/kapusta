import Link from 'next/link';

export default function NavBalance() {
  return (
    <ul>
      <li>
        <Link href="/balance/expense">expense</Link>
      </li>
      <li>
        <Link href="/balance/income">income</Link>
      </li>
    </ul>
  );
}
