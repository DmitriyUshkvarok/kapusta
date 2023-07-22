'use client';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import DateCalendar from '../Date/Date';
import CustomSelect from '../CustomSelect/CustomSelect';
import transactionSchema from '@/src/validationSchemas/transactionsSchema';
import styles from '@/src/sass/components/_transactuonForm.module.scss';

export default function TransactionForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [chooseOption, setChooseOption] = useState('Product category');

  const isMobile = useMediaQuery({ maxWidth: 767 });

  const handleOpenSelectOptions = () => {
    setIsOpen(!isOpen);
  };
  const handleChooseOption = (name) => {
    setChooseOption(name);
  };

  const handleResetForm = (values) => {
    setChooseOption('Product category');
  };

  const handleSubmit = (values, action) => {
    const data = { ...values, category: chooseOption };
    console.log(data);
    action.resetForm();
    setChooseOption('Product category');
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
            <label className={styles.label}>
              <Field
                className={styles.input}
                type="text"
                name="description"
                placeholder="Product description"
              />
              <ErrorMessage name="description">
                {(msg) => <div>{msg}</div>}
              </ErrorMessage>
            </label>
            <CustomSelect
              isOpen={isOpen}
              chooseOption={chooseOption}
              openSelect={handleOpenSelectOptions}
              option={handleChooseOption}
            />
            <label className={styles.labelForSum}>
              <Field
                placeholder="0,00"
                className={styles.inputBySum}
                type="text"
                name="sum"
              />
              <ErrorMessage name="sum">
                {(msg) => <div className={styles.errMsgStyled}>{msg}</div>}
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
