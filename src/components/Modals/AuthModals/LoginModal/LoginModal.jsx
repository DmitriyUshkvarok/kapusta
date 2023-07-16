import styles from './loginModal.module.scss';

const LoginModal = ({ onFormChange }) => {
  return (
    <div>
      <h2 className={styles.title}>modal login</h2>
      <button>login</button>
      <br />
      <button onClick={onFormChange}>registration</button>
    </div>
  );
};

export default LoginModal;
