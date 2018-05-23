const Task = require('../model/todo')
const Category = require('../model/category')

module.exports = {
  createTask: (req, res) => {
    Category.find({
      title: req.body.title
    })
    .then(data => {
      let categoryId = data[0]._id
      console.log(req.body.title);
      console.log('dadadadatatata', data);
      Task.create({
        task: req.body.task,
        userId: req.body.userId,
        categoryId: categoryId
      })
      .then((response) => {
        console.log('))))))))))))))))))))', response);
        res.status(200).json({
          message: 'berhasil menambahkan task'
        })
      })
      .catch(err => {
        console.log(err);
      })
    })

  },

  findTask: (req, res) => {
    Category.find({
      title: req.params.judul
    })
    .then(data => {
      console.log(data);
      categoryId = data[0]._id
      Task.find({
        categoryId: categoryId
      })
      .then(data => {
        res.status(200).json({
          data
        })
      })
      .catch(err => {
        console.log(err);
      })
    })
  },

  deleteTask: (req, res) => {
    Task.deleteOne(req.body)
    .then(response => {
      res.status(200).json({
        response
      })
    })
    .catch(err => {
      console.log(err);
    })
  },

  updateTask: (req, res) => {
    Task.findOneAndUpdate(req.body, {status: 'true'})
    .then(response => {
      res.status(200).json({
        response
      })
    })
    .then(err => {
      console.log(err);
    })
  }
}
