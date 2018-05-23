const User = require('../model/user.js')
const Category = require('../model/category');
const Todo = require('../model/todo');
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
  registerUser: (req, res) => {
    User.create({
      email: req.body.email,
      password: req.body.password
    })
    .then((response) => {
      console.log(req.body);
      console.log(response);
      res.status(200).json({
        message: 'success creating user data'
      })
    })
    .catch(err => {
      console.log(err);
    })
  },

  loginUser: (req, res) => {
    User.findOne({
      email: req.body.email
    })
    .then(user => {
      const hashedPassword = user.password
      if(user) {
        if (bcrypt.compareSync(req.body.password, hashedPassword)) {
          var token = jwt.sign({ email: user.email, id: user._id }, 'shhhhh');
          console.log('testing');
          res.status(200).json({
            token: token,
            id: user._id,
            email: user.email
          })
        }
      }

    })
    .catch(err => {
      console.log(err);
    })
  },

  findTaskAndCategory: (req, res) => {
    Todo.find({userId: req.headers.id})
    .then(task => {
      Category.find({userId: req.headers.id})
      .then(category => {
        var headerId = req.headers.id
        res.status(200).json({
          task: task,
          category: category
        })
      })
    })
    .catch(err => {
      console.log(err);
    })
  },

  loginFacebook: (req, res) => {
    // User.findOne({
    //
    // })
    console.log(req.body);
    res.send('masuk')
  }
}
