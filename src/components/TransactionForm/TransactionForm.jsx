'use client';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import DateCalendar from '../Date/Date';
import CustomSelect from '../CustomSelect/CustomSelect';
import transactionSchema from '@/src/validationSchemas/transactionsSchema';
import getActualPath from '@/src/auxiliaryFunctions/getActualPath';
import styles from '@/src/sass/components/_transactuonForm.module.scss';

export default function TransactionForm({ pathname }) {
  const [isOpen, setIsOpen] = useState(false);
  const [chooseOption, setChooseOption] = useState('Product category');
  const [isEmptyField, setIsEmptyField] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const path = getActualPath(pathname);

  const handleOpenSelectOptions = () => {
    setIsOpen(!isOpen);
  };
  const handleChooseOption = (name) => {
    setChooseOption(name);
    setIsEmptyField(false);
  };

  const handleResetForm = () => {
    setChooseOption('Product category');
  };

  const handleSubmit = (values, action) => {
    if (chooseOption === 'Product category') {
      setIsEmptyField(true);
      return;
    }
    const data = { ...values, category: chooseOption, date: new Date() };
    console.log(data);
    action.resetForm();
    setChooseOption('Product category');
    setIsEmptyField(false);
  };

  return (
    <div className={styles.container}>
      {!isMobile && <DateCalendar />}
      <Formik
        initialValues={{ description: '', sum: '' }}
        validationSchema={transactionSchema}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <Form autoComplete="off" className={styles.form}>
            <label className={`${styles.label} ${styles.labelForDesc}`}>
              <Field
                className={`${styles.input} ${styles.inputByDecs}`}
                type="text"
                name="description"
                placeholder="Product description"
              />
              <ErrorMessage name="description">
                {(msg) => (
                  <div className={`${styles.err} ${styles.errMsgForDesc}`}>
                    {msg}
                  </div>
                )}
              </ErrorMessage>
            </label>
            <CustomSelect
              isOpen={isOpen}
              chooseOption={chooseOption}
              openSelect={handleOpenSelectOptions}
              option={handleChooseOption}
              isEmptyField={isEmptyField}
              path={path}
            />
            <label className={`${styles.label} ${styles.labelForSum}`}>
              <Field
                placeholder="0,00"
                className={`${styles.input} ${styles.inputBySum}`}
                type="text"
                pattern="[0-9]*"
                name="sum"
              />
              <ErrorMessage name="sum">
                {(msg) => (
                  <div className={`${styles.err} ${styles.errMsgForSum}`}>
                    {msg}
                  </div>
                )}
              </ErrorMessage>
              <span className={styles.containerByIcon}>
                <svg width={20} height={20}>
                  <use xlinkHref="/sprite.svg#icon-calculator" />
                </svg>
              </span>
            </label>

            <div className={styles.btnContainer}>
              <button
                className={`${styles.btn} ${styles.btnSubmit}`}
                type="submit"
              >
                Input
              </button>
              <button
                onClick={handleResetForm}
                className={`${styles.btn} ${styles.btnClear}`}
                type="reset"
              >
                Clear
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
