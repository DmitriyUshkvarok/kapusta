import styles from '@/src/sass/components/_exitModal.module.scss';
import { AiOutlineClose } from 'react-icons/ai';
import { closeModal } from '../../../redux/modal/modalSlice.js';
import { useDispatch } from 'react-redux';

const ExitModal = () => {
  const dispatch = useDispatch();
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
      <div className={styles.textModal}>Are you sure?</div>
      <button type="button" className={`${styles.btn} ${styles.btnAccept}`}>
        Yes
      </button>
      <button type="button" className={`${styles.btn} ${styles.btnReject}`}>
        No
      </button>
    </div>
  );
};

export default ExitModal;
