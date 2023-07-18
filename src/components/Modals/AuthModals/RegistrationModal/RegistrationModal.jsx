'use client';
import * as yup from 'yup';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useRegisterMutation } from '@/src/redux/authApi/authApi';
import { useRouter } from 'next/navigation';
import styleLogin from '../../../../sass/components/_loginForm.module.scss';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const schema = yup.object().shape({
  name: yup
    .string()
    .min(4, 'Name should be at least 4 characters')
    .max(64, 'Name should not exceed 64 characters')
    .matches(
      /^[a-zA-Zа-яА-ЯёЁ][a-zA-Zа-яА-ЯёЁ0-9.%+\-_]*( [a-zA-Zа-яА-ЯёЁ0-9.%+\-_]+)?$/,
      'Invalid name format'
    )
    .required('name is required'),
  email: yup
    .string()
    .email('Invalid email')
    .test('email-format', 'Invalid email format', (value) => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(value);
    })
    .required(),
  password: yup
    .string()
    .min(8)
    .max(64)
    .matches(/^[^\s]+$/, 'Password should not contain spaces')
    .required(),
});

const RegistrationModal = ({ onFormChange }) => {
  const [registrMutation] = useRegisterMutation();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (values, { resetForm }) => {
    setIsLoading(true);
    try {
      const response = await registrMutation(values);
      if (!response.error) {
        router.replace('/balance');
      } else {
        if (response.error.status === 401) {
          // toast.error(response.error.data.message);
        } else {
          // toast.error('An error occurred. Please try again.');
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

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
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
            <ErrorMessage name="name">{(msg) => <div>{msg}</div>}</ErrorMessage>
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
              {(msg) => <div>{msg}</div>}
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
                {(msg) => <div>{msg}</div>}
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
              className={styleLogin.btnLogin}
              onClick={onFormChange}
            >
              {isLoading ? <p>Loading...</p> : 'Log in'}
            </button>
            <button onClick={onFormChange} className={styleLogin.btnRegistr}>
              registration
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};
export default RegistrationModal;
