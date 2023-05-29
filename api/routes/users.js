const express = require('express');
const router = express.Router();

router.get('/createUser', (req, res) => {
  // for creating user account
  console.log(req.body); // Log the form data received from CreateUserForm
  res.sendStatus(200); // Send a response indicating successful data logging
});

router.get('/loadUsers', (req, res) => {
  // for load user accounts
});

router.get('/loadUsers/:id', (req, res) => {
  // for load specific user account
  res.send(req.params.id);
});

module.exports = router;
