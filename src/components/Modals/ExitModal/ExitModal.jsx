import styles from '@/src/sass/components/_exitModal.module.scss';
import { AiOutlineClose } from 'react-icons/ai';

const ExitModal = () => {
  return (
    <div className={styles.container}>
      <AiOutlineClose className={styles.closeBtn} />
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
