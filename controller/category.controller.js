const category = require('../model/category')

module.exports = {
  createCategory: (req, res) => {
    category.create(req.body)
    .then(response => {
      res.status(200).json({
        response
      })
    })
    .catch(err => {
      console.log(err);
    })
  }
}
