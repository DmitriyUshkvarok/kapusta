import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../redux/modal/modalSlice.js';
import { Portal } from 'react-portal';
import styles from '../../../sass/components/_exitModal.module.scss';

import ExitModal from '../ExitModal/ExitModal.jsx';
import ConfirmationExitModal from '../ConfirmationExitModal/ConfirmationExitModal.jsx';

const Modal = () => {
  const { componentName } = useSelector((store) => store.modal);

  const componentsLookup = {
    exitModal: ExitModal,
    confirmationexitmodal: ConfirmationExitModal,
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
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const dispatch = useDispatch();
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
