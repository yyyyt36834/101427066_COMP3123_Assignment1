const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
//const userModel = require('../models/user');

// // get all users
// // test
// router.get('/',(req, res,next) => {
//     userModel.find()
//     .then((users) => {
//         res.send(users);
//     })
//     .catch((err) => {
//         console.log(err);
//         next(err);
//     });
// })

// sign up user
router.post('/signup', userController.registerUser);

// user login       
router.post('/login', userController.loginUser);

module.exports = router;