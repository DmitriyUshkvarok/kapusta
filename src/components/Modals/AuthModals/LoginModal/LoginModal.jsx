'use client';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useLoginMutation } from '@/src/redux/authApi/authApi';
import { useRouter } from 'next/navigation';
import loginschema from '@/src/validationSchemas/loginSchemas';
import styleLogin from '../../../../sass/components/_loginForm.module.scss';
import { Store } from 'react-notifications-component';
import { notificationOptions } from '@/src/notificationConfig/notificationConfig';

const initialValues = {
  email: '',
  password: '',
};

function LoginModal({ onFormChange }) {
  const [loginMutation] = useLoginMutation();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeForm, setActiveForm] = useState('login');

  const router = useRouter();

  const handleSubmit = async (values, { resetForm }) => {
    setIsLoading(true);
    try {
      const response = await loginMutation(values);
      if (!response.error) {
        router.replace('/balance');
      } else {
        if (response.error.status === 401) {
          Store.addNotification({
            ...notificationOptions,
            message: response.error.data.message,
            type: 'danger',
          });
        } else {
          Store.addNotification({
            ...notificationOptions,
            message: 'An error occurred. Please try again.',
            type: 'danger',
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
    setActiveForm(activeForm === 'login' ? 'registration' : 'login');
    onFormChange();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={loginschema}
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
                  {msg}
                  <span className={styleLogin.loginFormErrorMark}>*</span>
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
            >
              {isLoading ? <p>Loading...</p> : 'Log in'}
            </button>
            <button
              onClick={handleFormChange}
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
}
export default LoginModal;
