import { useState } from "react";

const useFormHandler = (initalState, validateFormData, onSubmit) => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setErrors({});
    setSuccessMsg("");

    const formData = new FormData(event.target);
    const validationErrors = validateFormData(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    try {
      await onSubmit(formData);
    } catch (err) {
      setErrors({
        submit:
          err.response?.data?.message || "An error occurred. Please try again.",
      });
    } finally {
      setLoading(false);
      event.target.reset();
    }
  };

  return { loading, errors, successMsg, setSuccessMsg, handleSubmit };
};

export default useFormHandler;
