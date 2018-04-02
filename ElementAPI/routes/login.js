const db = require('monk')('localhost/ElementApi')
const user = db.get('user')

let result = 0,
  username = '',
  password = '',
  body = 0

async function GetLogin(req, res, next) {
  console.log(req.params, req.query)
  /* username = req.params.username
  password = req.params.password
  result = await user.find({ username: username, password: password })
  if (JSON.stringify(result) != '[]') {
    res.json({
      data: 1,
    })
  } else {
    res.json({
      data: 0,
    })
  } */
}

module.exports = {
  'POST /login': GetLogin,
}
