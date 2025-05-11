// src/components/ProcessStepper.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './ProcessStepper.css';

export default function ProcessStepper({ currentStep }) {
  const steps = [
    'Start Registration',
    'Submit to OpenCRVS',
    'Create Mifos Client',
    'Create Savings Account',
    'Complete'
  ];

  return (
    <div className="stepper">
      {steps.map((label, index) => (
        <div 
          key={label} 
          className={`step ${index <= currentStep ? 'active' : ''}`}
          role="progressbar"
          aria-label={`Step ${index + 1}: ${label}`}
          aria-current={index === currentStep ? 'step' : undefined}
        >
          <div className="step-circle">{index + 1}</div>
          <div className="step-label">{label}</div>
        </div>
      ))}
    </div>
  );
}

ProcessStepper.propTypes = {
  /** Zero-based index of the current active step */
  currentStep: PropTypes.number.isRequired
};