'use client';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useRegisterMutation } from '@/src/redux/authApi/authApi';
import { useRouter } from 'next/navigation';
import registrationSchema from '@/src/validationSchemas/registrationSchema';
import styleLogin from '../../../../sass/components/_loginForm.module.scss';
import { Store } from 'react-notifications-component';
import { notificationOptions } from '@/src/notificationConfig/notificationConfig';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegistrationModal = ({ onFormChange }) => {
  const [registrMutation] = useRegisterMutation();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeForm, setActiveForm] = useState('registration');

  const router = useRouter();

  const handleSubmit = async (values, { resetForm }) => {
    setIsLoading(true);
    try {
      const response = await registrMutation(values);
      if (!response.error) {
        router.replace('/balance');
      } else {
        if (response.error.status === 409) {
          Store.addNotification({
            ...notificationOptions,
            message: response.error.data.message,
          });
        } else {
          Store.addNotification({
            ...notificationOptions,
            message: response.error.data.message,
          });
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
    resetForm();
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleFormChange = () => {
    setActiveForm(activeForm === 'registration' ? 'rogin' : 'registration');
    onFormChange();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={registrationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styleLogin.form}>
          <h3 className={styleLogin.loginTitle}>
            You can log in with your Google Account:
          </h3>
          <button type="submit" className={styleLogin.btnGoogle}>
            <svg width={16} height={16} className={styleLogin.btnGoogleIcon}>
              <use xlinkHref="/sprite.svg#icon-google-symbol-1" />
            </svg>
            <span className={styleLogin.btnGoogleText}>Google</span>
          </button>
          <p className={styleLogin.loginDescription}>
            Or log in using an email and password, after registering:
          </p>
          <div className={styleLogin.loginFormGroup}>
            <label
              htmlFor="register-name"
              className={styleLogin.loginFormLabel}
            >
              Name:
            </label>
            <Field
              className={styleLogin.loginFormInput}
              type="text"
              name="name"
              placeholder="your name"
              id="register-name"
            />
            <ErrorMessage name="name">
              {(msg) => (
                <div className={styleLogin.loginFormError}>
                  {msg} <span className={styleLogin.loginFormErrorMark}>*</span>
                </div>
              )}
            </ErrorMessage>
          </div>
          <div className={styleLogin.loginFormGroup}>
            <label htmlFor="login-email" className={styleLogin.loginFormLabel}>
              Email:
            </label>
            <Field
              className={styleLogin.loginFormInput}
              type="email"
              name="email"
              placeholder="your@email.com"
              id="login-email"
            />
            <ErrorMessage name="email">
              {(msg) => (
                <div className={styleLogin.loginFormError}>
                  {msg} <span className={styleLogin.loginFormErrorMark}>*</span>
                </div>
              )}
            </ErrorMessage>
          </div>
          <div className={styleLogin.loginFormWrapper}>
            <div className={styleLogin.loginFormGroup}>
              <label
                htmlFor="login-passsword"
                className={styleLogin.loginFormLabel}
              >
                Password:
              </label>
              <Field
                className={styleLogin.loginFormInput}
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                id="login-passsword"
              />
              <ErrorMessage name="password">
                {(msg) => (
                  <div className={styleLogin.loginFormError}>
                    {msg}
                    <span className={styleLogin.loginFormErrorMark}>*</span>
                  </div>
                )}
              </ErrorMessage>
              <div
                onClick={togglePasswordVisibility}
                className={styleLogin.showPasswordWrapper}
              >
                {showPassword ? (
                  <BsEyeSlash color="grey" style={{ width: 18, height: 18 }} />
                ) : (
                  <BsEye color="grey" style={{ width: 18, height: 18 }} />
                )}
              </div>
            </div>
          </div>
          <div className={styleLogin.btnGroup}>
            <button
              type="submit"
              className={`${styleLogin.btnLogin} ${
                activeForm === 'login' ? styleLogin.activeButton : ''
              }`}
              onClick={handleFormChange}
            >
              {isLoading ? <p>Loading...</p> : 'Log in'}
            </button>
            <button
              className={`${styleLogin.btnRegistr} ${
                activeForm === 'registration' ? styleLogin.activeButton : ''
              }`}
            >
              registration
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};
export default RegistrationModal;
