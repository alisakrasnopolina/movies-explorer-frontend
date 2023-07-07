import React, { useCallback } from 'react';
const validator = require('validator');

function useFormWithValidation() {
  
  const [formValues, setFormValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (evt) => {
    const target = evt.target;
    const { value, name } = target;

    if (name === 'name' && target.validity.patternMismatch && value !== '') {
      target.setCustomValidity("Name может содержать только латиницу, кириллицу, пробел или дефис.")
    } else if (name === 'email' && !validator.isEmail(value) && value !== '') {
      target.setCustomValidity("Необходимо указать e-mail в формате name@domain.zone")
    } else {
      target.setCustomValidity("")
    }

    setFormValues({
      ...formValues, 
      [name]: value 
    });

    setErrors({
      ...errors,
       [name]: target.validationMessage
    });

    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newIsValid = false, newErrors = {}) => {
      setFormValues(newValues);
      setIsValid(newIsValid);
      setErrors(newErrors);
    },
    [setFormValues, setErrors, setIsValid]
  );

  return { formValues, errors, setErrors, isValid, handleChange, resetForm, setIsValid };
}

export default useFormWithValidation;