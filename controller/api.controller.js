module.exports = {
  checkWeather: (req, res) => {
    axios.get('https://api.darksky.net/forecast/db7817040be6c880a61df4b472451f1b/6.1751,106.8650')
    .then(function(response) {
      console.log(response)
      console.log('sdfdsfsdfdsf');
      res.status(200).json({
        response
      })
    })
    .catch(function(err) {
      console.log(err);
    })
  }
}
