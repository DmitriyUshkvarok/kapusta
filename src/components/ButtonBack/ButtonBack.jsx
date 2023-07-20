'use client';
import { useRouter } from 'next/navigation';
import styles from '../../sass/components/_buttonBack.module.scss';

const ButtonBack = () => {
  const router = useRouter();

  const handleBack = () => {
    router.replace('/balance');
  };
  return (
    <button type="button" onClick={handleBack} className={styles.buttonBack}>
      <svg width={16} height={16} className={styles.buttonBackIcon}>
        <use xlinkHref="/sprite.svg#icon-keyboard_backspace-24px-1" />
      </svg>
      <span className={styles.buttonBackText}>Main page</span>
    </button>
  );
};

export default ButtonBack;
