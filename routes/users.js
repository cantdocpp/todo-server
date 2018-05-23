var express = require('express');
var router = express.Router();
const authRole = require('../middlewares/authrole');
const taskController = require('../controller/task.controller');
const userController = require('../controller/user.controller');

/* GET users listing. */
router.get('/', authRole.checkRole, function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/createtask', taskController.createTask)

router.get('/getcategoryandtask', userController.findTaskAndCategory)

router.get('/gettask/:judul', taskController.findTask)

router.delete('/deletetask', taskController.deleteTask)

router.put('/updatetask', taskController.updateTask)

module.exports = router;
