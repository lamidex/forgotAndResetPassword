const express = require('express');
const { signup, login, verifyOtp, forgotPassword, resetPassword } = require('../controllers/user.controller');
const router = express.Router();


router.post('/signup', signup)
router.post('/login', login)
router.put('/otp', verifyOtp)
router.put('/forgotPassword', forgotPassword)
router.put('/resetPassword',resetPassword)





module.exports = router;