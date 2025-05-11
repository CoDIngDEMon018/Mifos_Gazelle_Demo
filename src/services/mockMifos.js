// src/services/mockMifos.js
// Mock implementations simulating Mifos client and account creation for demo

/**
 * Simulates creating a Mifos client (e.g., a new user) based on registration data
 * @param {{ firstName: string, lastName: string, regNo: string }} registrationData
 * @returns {Promise<{ id: string, name: string, externalId: string, accounts: any[] }>}
 */
export const createMifosClient = async (registrationData) => {
  // Simulate network/API delay
  await new Promise(resolve => setTimeout(resolve, 800));

  // Return a mock client object
  return {
    id: `CLIENT-${Date.now()}`,                      // Unique client identifier
    name: `${registrationData.firstName} ${registrationData.lastName}`,
    externalId: registrationData.regNo,               // Link back to registration number
    accounts: []                                      // Initial empty accounts list
  };
};

/**
 * Simulates opening a savings account for the given client ID
 * @param {string} clientId
 * @returns {Promise<{ id: string, type: string, productId: string, balance: number, clientId: string }>}
 */
export const createMifosAccount = async (clientId) => {
  // Simulate network/API delay
  await new Promise(resolve => setTimeout(resolve, 600));

  // Return a mock account object
  return {
    id: `ACCOUNT-${Date.now()}`,                 // Unique account identifier
    type: 'Savings',                             // Account type
    productId: 'CHILD-SAVINGS-001',              // Mock product code
    balance: 0,                                  // Starting balance
    clientId                                     // Link back to the client
  };
};

/**
 * High-level helper that registers a client and then opens an account
 * @param {{ firstName: string, lastName: string, regNo: string }} registrationData
 * @returns {Promise<{ client: object, account: object }>}
 */
export const registerClientAndAccount = async (registrationData) => {
  // Create the client in Mifos
  const client = await createMifosClient(registrationData);

  // Create a default savings account for the new client
  const account = await createMifosAccount(client.id);

  // Attach account to client record
  client.accounts.push(account);

  // Return both objects for demo display
  return { client, account };
};
