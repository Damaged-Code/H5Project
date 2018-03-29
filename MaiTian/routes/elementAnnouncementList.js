const db = require('monk')('localhost/Element')
const announcementList = db.get('announcementList')

let data = 0,
  limit = 5,
  offset = 0,
  list = [],
  result = {}

/* GET home page. */
async function GetAnnouncementList(req, res, next) {
  list = []
  data = await announcementList.find({})
  if ((offset + 1) * limit < data[0].list.length) {
    for (let i = offset * limit; i < (offset + 1) * limit; i++) {
      list.push(data[0].list[i])
    }
    result.list = list
    res.json({
      data: result
    })
  } else {
    res.json({
      data: result
    })
  }
}

module.exports = {
  'GET /announcementList': GetAnnouncementList
}
