var express = require('express');
var router = express.Router();
var controllerCategory = require('../controller/category.controller')

router.post('/create', controllerCategory.createCategory)

module.exports = router;
