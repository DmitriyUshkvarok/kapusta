import Link from 'next/link';
import styles from '@/src/sass/components/_buttonBackMobile.module.scss';

export default function ButtonBackMobile({ pathname }) {
  return (
    <Link
      className={styles.linkStyled}
      href={{
        pathname: '/transaction',
        query: { name: pathname },
      }}
    >
      <span>
        <svg width={18} height={18}>
          <use xlinkHref="/sprite.svg#icon-keyboard_backspace-24px-1" />
        </svg>
      </span>
      <span>to transaction</span>
    </Link>
  );
}
