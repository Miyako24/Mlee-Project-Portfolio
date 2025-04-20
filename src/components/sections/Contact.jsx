import React, {useState } from "react";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateField = (name, value) => {
    let error = "";
    if (!value.trim()) {
      error = "This field is required";
    } else if (name === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        error = "Invalid email address";
      }
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));

    
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    Object.entries(formData).forEach(([name, value]) => {
      validateField(name, value);
      if (!value.trim() || (name === "email" && errors.email)) {
        valid = false;
      }
    });

    if (valid) {
      console.log("Form submitted:", formData);
      
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit} noValidate>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.message && <p className="error">{errors.message}</p>}

        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;