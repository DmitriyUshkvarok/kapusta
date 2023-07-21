import styles from '@/src/sass/components/_confirmationExitModal.module.scss';
import { AiOutlineClose } from 'react-icons/ai';

const ConfirmationExitModal = () => {
  return (
    <div className={styles.container}>
      <AiOutlineClose className={styles.closeBtn} />
      <div className={styles.textModal}>Do you really want to leave?</div>
      <button type="button" className={`${styles.btn} ${styles.btnAccept}`}>
        Yes
      </button>
      <button type="button" className={`${styles.btn} ${styles.btnReject}`}>
        No
      </button>
    </div>
  );
};

export default ConfirmationExitModal;
