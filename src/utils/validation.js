// utils/validation.js
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateForm = (formState) => {
  const errors = {};

  if (formState.name.length > 50) {
    errors.name = 'Name must be less than 50 characters';
  }

  if (!validateEmail(formState.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (formState.message.length < 20) {
    errors.message = 'Message must be at least 20 characters';
  }

  return errors;
};
