import * as yup from 'yup';

const transactionSchema = yup.object().shape({
  description: yup
    .string()
    .min(3, 'Too Short!')
    .max(100, 'Too Long!')
    .required('This is a required field'),
  sum: yup.number().min(2).required('This is a required field'),
});

export default transactionSchema;
