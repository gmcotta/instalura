import { useEffect, useState } from 'react';

export default function useForm({ initialValues, onSubmit, validateSchema }) {
  const [values, setValues] = useState(initialValues);
  const [isFormDisabled, setIsFormDisabled] = useState(true);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  async function validateValues(currentValues) {
    try {
      await validateSchema(currentValues);
      setErrors({});
      setIsFormDisabled(false);
    } catch (err) {
      const formattedErrors = err.inner.reduce((errorObjAcc, currentError) => {
        const fieldName = currentError.path;
        const errorMessage = currentError.message;
        return {
          ...errorObjAcc,
          [fieldName]: errorMessage,
        };
      }, {});
      setIsFormDisabled(true);
      setErrors(formattedErrors);
    }
  }

  useEffect(() => {
    validateValues(values);
  }, [values]);

  return {
    values,
    isFormDisabled,
    setIsFormDisabled,
    errors,
    touched,
    handleSubmit(event) {
      event.preventDefault();
      onSubmit(values);
    },
    handleChange(event) {
      const fieldName = event.target.getAttribute('name');
      const { value } = event.target;

      setValues((currentValues) => ({
        ...currentValues,
        [fieldName]: value,
      }));
    },
    handleBlur(event) {
      const fieldName = event.target.getAttribute('name');
      setTouched((currentValues) => ({
        ...currentValues,
        [fieldName]: true,
      }));
    },
  };
}
