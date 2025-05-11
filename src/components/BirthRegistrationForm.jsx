import React, { useState } from 'react';

export default function BirthRegistrationForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: 'female',
    birthDate: '',
    motherName: '',
    fatherName: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'Required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Required';
    if (!formData.birthDate) newErrors.birthDate = 'Invalid date';
    if (!formData.motherName.trim()) newErrors.motherName = 'Required';
    if (!formData.fatherName.trim()) newErrors.fatherName = 'Required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <h2>New Birth Registration</h2>

      <fieldset>
        <legend>Child Details</legend>

        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            value={formData.firstName}
            onChange={handleChange}
            aria-label="Child's first name"
            aria-invalid={!!errors.firstName}
          />
          {errors.firstName && <div className="error">{errors.firstName}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            value={formData.lastName}
            onChange={handleChange}
            aria-label="Child's last name"
            aria-invalid={!!errors.lastName}
          />
          {errors.lastName && <div className="error">{errors.lastName}</div>}
        </div>

        <div className="form-group">
          <label>Gender:</label>
          <div role="group" aria-label="Child's gender">
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleChange}
              /> Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleChange}
              /> Male
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="birthDate">Date of Birth:</label>
          <input
            id="birthDate"
            name="birthDate"
            type="date"
            required
            value={formData.birthDate}
            onChange={handleChange}
            aria-label="Child's date of birth"
            aria-invalid={!!errors.birthDate}
          />
          {errors.birthDate && <div className="error">{errors.birthDate}</div>}
        </div>
      </fieldset>

      <fieldset>
        <legend>Parent/Guardian Details</legend>

        <div className="form-group">
          <label htmlFor="motherName">Mother's Name:</label>
          <input
            id="motherName"
            name="motherName"
            type="text"
            required
            value={formData.motherName}
            onChange={handleChange}
            aria-label="Mother's full name"
            aria-invalid={!!errors.motherName}
          />
          {errors.motherName && <div className="error">{errors.motherName}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="fatherName">Father's Name:</label>
          <input
            id="fatherName"
            name="fatherName"
            type="text"
            required
            value={formData.fatherName}
            onChange={handleChange}
            aria-label="Father's full name"
            aria-invalid={!!errors.fatherName}
          />
          {errors.fatherName && <div className="error">{errors.fatherName}</div>}
        </div>
      </fieldset>

      <button type="submit" className="submit-button">
        Register Birth
      </button>
    </form>
  );
}