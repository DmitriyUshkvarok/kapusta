'use client';
import { useRouter } from 'next/navigation';

const ButtonBack = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <button type="button" onClick={handleBack}>
      <svg width={16} height={16}>
        <use xlinkHref="/sprite.svg#icon-keyboard_backspace-24px-1" />
      </svg>
      <span>Main page</span>
    </button>
  );
};

export default ButtonBack;
