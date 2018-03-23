
const db = require('monk')('localhost/MaiTian')
const news = db.get('news')

let result
/* GET home page. */
async function getNews(req, res, next) {
	result = await news.find({})
	res.json({
		data:result
	         })
}

module.exports = {
	'GET /getNews':getNews,
};