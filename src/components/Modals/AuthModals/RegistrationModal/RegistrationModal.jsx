import Link from 'next/link';

const RegistrationModal = ({ onFormChange }) => {
  return (
    <div>
      <h2>modal register</h2>
      <button onClick={onFormChange}>login</button>
      <br />
      <button>registration</button>
    </div>
  );
};

export default RegistrationModal;
