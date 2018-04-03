const db = require('monk')('localhost/ElementApi')
const menus = db.get('menus')

let result = 0

async function GetMenus(req, res, next) {
  result = await menus.find({})
  if (JSON.stringify(result) != '[]') {
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
  'GET /menus': GetMenus,
}
