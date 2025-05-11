// src/components/ResultDisplay.jsx
import React from 'react';
import PropTypes from 'prop-types';

export default function ResultDisplay({ client, account, error, loading }) {
  if (loading) {
    return (
      <div className="loading">
        <p>Processing registration...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <h2>Registration Failed</h2>
        <p>{error.message || 'Unknown error occurred'}</p>
      </div>
    );
  }

  return (
    <div className="result">
      <h2>Registration Successful! 🎉</h2>
      
      <div className="result-group">
        <h3>Client Details</h3>
        <p><strong>ID:</strong> {client.clientId}</p>
        <p><strong>Name:</strong> {`${client.firstName} ${client.lastName}`}</p>
        <p><strong>Date of Birth:</strong> {new Date(client.birthDate).toLocaleDateString()}</p>
        <p><strong>External ID:</strong> {client.externalId || 'N/A'}</p>
      </div>
      
      <div className="result-group">
        <h3>Account Details</h3>
        <p><strong>Account ID:</strong> {account.accountId}</p>
        <p><strong>Type:</strong> {account.type}</p>
        <p><strong>Product Name:</strong> {account.productName}</p>
        <p><strong>Status:</strong> {account.status}</p>
      </div>
    </div>
  );
}

ResultDisplay.propTypes = {
  client: PropTypes.shape({
    clientId: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    birthDate: PropTypes.string,
    externalId: PropTypes.string
  }),
  account: PropTypes.shape({
    accountId: PropTypes.string,
    type: PropTypes.string,
    productName: PropTypes.string,
    status: PropTypes.string
  }),
  error: PropTypes.object,
  loading: PropTypes.bool
};