/**
 * Mock implementation of OpenCRVS birth registration APIs
 * for local demo/testing purposes.
 */

/**
 * Simulates submitting a birth registration.
 * @param {Object} data - Birth registration data
 * @param {string} data.firstName
 * @param {string} data.lastName
 * @param {string} data.dateOfBirth - YYYY-MM-DD
 * @param {string} data.parentName
 * @returns {Promise<Object>} Resolves with registration record
 */
export const submitBirthRegistration = async ({ firstName, lastName, dateOfBirth, parentName }) => {
  // Simulate network/API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  const regNo = `B${Math.floor(100000000 + Math.random() * 900000000)}`;
  const registrationDate = new Date().toISOString().split('T')[0];

  return {
    regNo,
    firstName,
    lastName,
    parentName,
    dateOfBirth,
    registrationDate,
    status: 'PENDING'
  };
};

/**
 * Simulates verifying a previously submitted birth registration.
 * @param {string} regNo - Registration number to verify
 * @returns {Promise<Object>} Resolves with verification result
 */
export const verifyBirthRegistration = async (regNo) => {
  // Simulate immediate verification response
  return {
    regNo,
    verified: true,
    verifiedDate: new Date().toISOString().split('T')[0],
    child: {
      firstName: 'Mock',
      lastName: 'Data'
    }
  };
};

/**
 * (Optional) Simulates fetching a birth registration record.
 * @param {string} regNo
 * @returns {Promise<Object>} Resolves with the record or throws if not found
 */
export const getBirthRegistration = async (regNo) => {
  // In a real implementation, you might check against an in-memory store.
  // Here we just return a placeholder.
  await new Promise(resolve => setTimeout(resolve, 500));
  return {
    regNo,
    firstName: 'Mock',
    lastName: 'Data',
    dateOfBirth: '2025-01-01',
    parentName: 'Demo Parent',
    registrationDate: '2025-01-02',
    status: 'VERIFIED'
  };
};
