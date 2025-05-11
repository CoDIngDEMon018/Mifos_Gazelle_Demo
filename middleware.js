module.exports = (req, res, next) => {
  // Handle authentication
  if (req.method === 'POST' && req.path === '/authentication') {
    return res.status(200).json({
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      userId: "1",
      roles: ["Super User"]
    });
  }

  // Add custom fields to client creation
  if (req.method === 'POST' && req.path === '/clients') {
    req.body.clientId = Date.now();
    req.body.officeId = "1";
    req.body.resourceId = Date.now();
    req.body.status = {
      code: "clientStatusType.active"
    };
  }

  // Add custom fields to savings account creation
  if (req.method === 'POST' && req.path === '/savingsaccounts') {
    req.body.savingsId = Date.now();
    req.body.status = {
      code: "savingsAccountStatusType.submitted.and.pending.approval"
    };
    req.body.accountNo = `SAV${Date.now().toString().slice(-6)}`;
  }

  next();
};