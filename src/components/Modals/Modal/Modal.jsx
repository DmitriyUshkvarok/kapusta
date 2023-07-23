import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../redux/modal/modalSlice.js';
import { Portal } from 'react-portal';
import styles from '../../../sass/components/_modal.module.scss';
import ExitModal from '../ExitModal/ExitModal.jsx';

const Modal = () => {
  const dispatch = useDispatch();
  const { componentName } = useSelector((store) => store.modal);

  const componentsLookup = {
    exitModal: ExitModal,
  };
  let renderComponent;

  if (componentName) {
    const SelectComponent = componentsLookup[componentName.name];
    if (SelectComponent) {
      renderComponent = <SelectComponent componentName={componentName} />;
    }
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Escape') {
        dispatch(closeModal());
      }
    };

    document.body.classList.add('modal-open');
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('modal-open');
    };
  }, [dispatch]);

  const handleBackdropClick = (e) => {
    const backdrop = document.querySelector(`.${styles.modalBackdrop}`);
    if (e.target === backdrop) {
      dispatch(closeModal());
    }
  };

  return (
    <Portal>
      <div className={styles.modalBackdrop} onClick={handleBackdropClick}>
        <div className={styles.modalContent}>{renderComponent}</div>
      </div>
    </Portal>
  );
};

export default Modal;
