import Link from 'next/link';

const Logo = () => {
  return (
    <div>
      <Link href="/balance">
        <svg width={90} height={31}>
          <use xlinkHref="/sprite.svg#icon-logo" />
        </svg>
      </Link>
    </div>
  );
};

export default Logo;
