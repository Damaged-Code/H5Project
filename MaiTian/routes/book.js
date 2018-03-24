const db = require('monk')('localhost/haidilao');
const book = db.get('book');

let result = 0;
/* GET home page. */
async function PostBook(req, res, next) {
  res.json({
    data: result
  })
}

module.exports = {
  'POST /book': PostBook
};
