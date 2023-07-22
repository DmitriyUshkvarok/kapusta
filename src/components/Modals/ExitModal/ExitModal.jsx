import styles from '@/src/sass/components/_exitModal.module.scss';
import { closeModal } from '../../../redux/modal/modalSlice.js';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useLogoutMutation } from '@/src/redux/authApi/authApi';
import { useRouter } from 'next/navigation';

const ExitModal = () => {
  const router = useRouter();
  const [logOut] = useLogoutMutation();
  const [secondModal, setSecondModal] = useState(false);
  const [modalText, setModalText] = useState('Are you sure?');
  const dispatch = useDispatch();

  const handleExit = () => {
    if (!secondModal) {
      setModalText('Do you really want to leave?');
      setSecondModal(true);
    }

    if (secondModal) {
      setSecondModal(false);
      let response = logOut();
      if (!response.error) {
        router.replace('/');
      }
    }
  };

  return (
    <div className={styles.container}>
      <svg
        width={12}
        height={12}
        className={styles.closeBtn}
        onClick={() => dispatch(closeModal())}
      >
        <use xlinkHref="/sprite.svg#icon-close" />
      </svg>
      <div className={styles.textModal}>{modalText}</div>
      <button
        type="button"
        className={`${styles.btn} ${styles.btnAccept}`}
        onClick={handleExit}
      >
        Yes
      </button>
      <button
        type="button"
        className={`${styles.btn} ${styles.btnReject}`}
        onClick={() => dispatch(closeModal())}
      >
        No
      </button>
    </div>
  );
};

export default ExitModal;
