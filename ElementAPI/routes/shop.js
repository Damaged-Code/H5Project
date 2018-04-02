const db = require('monk')('localhost/ElementApi')
const shop = db.get('shopsInfo')

let result = 0,
  limit = 8,
  offset = 0
/* GET home page. */
async function GetShop(req, res, next) {
  let list = []
  limit = req.query.limit || 8
  offset = req.query.offset || 0
  result = await shop.find({})
  if ((offset + 1) * limit < result.length) {
    for (let i = offset * limit; i < (offset + 1) * limit; i++) {
      list.push(result[i])
    }
    res.json({
      data: list,
    })
  } else {
    res.json({
      data: 0,
    })
  }
}
async function PostShop(req, res, next) {
  result = await shop.find({ name: { $regex: `${req.query.keywords}` } })
  if (JSON.stringify(result) !== '[]') {
    res.json({
      data: result,
    })
  } else {
    res.json({
      data: 0,
    })
  }
}

module.exports = {
  'GET /shop': GetShop,
  'POST /shop': PostShop,
}
