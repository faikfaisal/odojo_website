import { useState } from 'react';

// Contact Form Component
const ContactForm = () => {
  const MAX_NAME_LENGTH = 30;
  const MIN_MESSAGE_LENGTH = 100;

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  // Validation rules
  const validateForm = () => {
    const newErrors = {};

    // Name validation (max 30 characters)
    if (formState.name.length > MAX_NAME_LENGTH) {
      newErrors.name = `Name must be less than ${MAX_NAME_LENGTH} characters`;
    }

    // Email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Message validation (minimum 100 characters)
    if (formState.message.length < MIN_MESSAGE_LENGTH) {
      newErrors.message = `Message must be at least ${MIN_MESSAGE_LENGTH} characters`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [id]: value,
    }));
    // Clear error when user starts typing
    if (errors[id]) {
      setErrors((prev) => ({
        ...prev,
        [id]: '',
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate before submission
    if (!validateForm()) {
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '145d66ad-3cb4-48c8-aa5e-ff7394a88f27',
          name: formState.name,
          email: formState.email,
          message: formState.message,
          subject: `New Contact Form Submission from ${formState.name}`,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormState({
          name: '',
          email: '',
          message: '',
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          value={formState.name}
          onChange={handleChange}
          maxLength={MAX_NAME_LENGTH}
          className={`mt-1 block w-full border ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          } rounded-md shadow-sm p-2`}
          required
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name}</p>
        )}
        <p className="mt-1 text-sm text-gray-500">
          {formState.name.length}/{MAX_NAME_LENGTH} characters
        </p>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          value={formState.email}
          onChange={handleChange}
          className={`mt-1 block w-full border ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          } rounded-md shadow-sm p-2`}
          required
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows="4"
          value={formState.message}
          onChange={handleChange}
          className={`mt-1 block w-full border ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          } rounded-md shadow-sm p-2`}
          required
        ></textarea>
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message}</p>
        )}
        <p className="mt-1 text-sm text-gray-500">
          {formState.message.length} characters (minimum {MIN_MESSAGE_LENGTH})
        </p>
      </div>

      <div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
      </div>

      {status === 'success' && (
        <div className="p-4 text-sm text-green-700 bg-green-100 rounded-md">
          Thank you for your message! We'll get back to you soon.
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 text-sm text-red-700 bg-red-100 rounded-md">
          Sorry, there was an error sending your message. Please try again or
          email us directly.
        </div>
      )}
    </form>
  );
};

export default ContactForm;
