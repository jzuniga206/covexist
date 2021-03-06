const express = require('express');
const authRouter = express.Router();

const BcryptController = require('../controllers/BcryptController');

//signup and create new board
authRouter.post(
  '/signup',
  BcryptController.signup,
  BcryptController.login,
  (req, res) => {
    //on success of board creation, send back unique ID string
    res.redirect('/');
  }
);

authRouter.post('/login', BcryptController.login, (req, res) => {
  res.redirect('/');
});

// //login check
// authRouter.get('/isUser', BcryptController.login, (req, res) => {
//   //check if board and login string exist
//   res.redirect('/');
// });

module.exports = authRouter;
