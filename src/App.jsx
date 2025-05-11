// src/App.jsx

import React, { useState } from 'react';
import BirthRegistrationForm from './components/BirthRegistrationForm';
import ProcessStepper from './components/ProcessStepper.jsx';
import ResultDisplay from './components/ResultDisplay';
import { submitBirthRegistration } from './services/mockOpenCRVS';
import { createMifosClient, createMifosAccount } from './services/mockMifos';
import './styles/main.css';
import './styles/theme.css';

const steps = [
  'Submit to OpenCRVS',
  'Create Mifos Client',
  'Create Mifos Account',
  'Complete'
];

export default function App() {
  const [currentStep, setCurrentStep] = useState(-1); // -1 = form
  const [clientInfo, setClientInfo] = useState(null);
  const [accountInfo, setAccountInfo] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData) => {
    setError(null);
    setLoading(true);

    try {
      // Step 0: Submit to OpenCRVS
      setCurrentStep(0);
      const registration = await submitBirthRegistration(formData);

      // Step 1: Create Mifos Client
      setCurrentStep(1);
      const client = await createMifosClient(registration);
      setClientInfo(client);

      // Step 2: Create Mifos Account
      setCurrentStep(2);
      const account = await createMifosAccount(client.id);
      setAccountInfo(account);

      // Step 3: Complete
      setCurrentStep(3);
    } catch (err) {
      console.error(err);
      setError(err.message || 'An unexpected error occurred');
      setCurrentStep(-1);
    } finally {
      setLoading(false);
    }
  };

  const handleRetry = () => {
    setError(null);
    setCurrentStep(-1);
    setClientInfo(null);
    setAccountInfo(null);
  };

  return (
    <div className="app-container">
      <h1>Birth Registration → Financial Inclusion Demo</h1>

      {/* Step indicator */}
      <ProcessStepper steps={steps} currentStep={currentStep} />

      {/* Error display */}
      {error && (
        <div className="error-message">
          <p><strong>Error:</strong> {error}</p>
          <button onClick={handleRetry}>Start Over</button>
        </div>
      )}

      {/* Registration form */}
      {currentStep === -1 && !error && (
        <BirthRegistrationForm onSubmit={handleSubmit} disabled={loading} />
      )}

      {/* Loading state */}
      {loading && currentStep >= 0 && currentStep < steps.length - 1 && (
        <p className="loading">Processing: {steps[currentStep]}…</p>
      )}

      {/* Result display */}
      {currentStep === steps.length - 1 && clientInfo && accountInfo && (
        <ResultDisplay client={clientInfo} account={accountInfo} />
      )}
    </div>
  );
}
