const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller.js')

router.post('/', userController.loginUser)

router.post('/fb', userController.loginFacebook)

module.exports = router
