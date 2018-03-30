const db = require('monk')('localhost/ElementApi')
const shop = db.get('shopsInfo')

let result = 0
/* GET home page. */
async function GetShop(req, res, next) {
  result = await shop.find({})
  res.json({
    data: result
  })
}

module.exports = {
  'GET /shop': GetShop
}
