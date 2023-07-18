import Link from 'next/link';

export default function ButtonBackMobile({ pathname }) {
  return (
    <Link
      href={{
        pathname: '/transaction',
        query: { name: pathname },
      }}
    >
      to transaction
    </Link>
  );
}
