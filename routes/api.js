var express = require('express');
var router = express.Router();
var controllerApi = require('../controller/api.controller')

router.get('/weather', controllerApi.checkWeather)

module.exports = router;
