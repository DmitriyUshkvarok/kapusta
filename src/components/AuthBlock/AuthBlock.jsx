'use client';
import LoginModal from '../Modals/AuthModals/LoginModal/LoginModal';
import RegistrationModal from '../Modals/AuthModals/RegistrationModal/RegistrationModal';
import { useState } from 'react';

const AuthBlock = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const handleFormChange = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <div>
      {isLoginForm ? (
        <LoginModal onFormChange={handleFormChange} />
      ) : (
        <RegistrationModal onFormChange={handleFormChange} />
      )}
    </div>
  );
};

export default AuthBlock;
