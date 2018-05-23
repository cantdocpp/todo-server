var jwt = require('jsonwebtoken');

module.exports = {
  checkRole: (req, res, next) => {
    if (req.headers.token) {
      var token = req.headers.token
      jwt.verify(token, 'shhhhh', function(err, decoded) {
        console.log(decoded);
        if (decoded.role == 'admin') {
          next()
        } else {
          res.status(403).json({
            message: 'forbidden'
          })
        }
      })
    } else {
      res.status(403).json({
        message: 'forbidden'
      })
    }
  }
}
