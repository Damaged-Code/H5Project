const db = require('monk')('localhost/haidilao');
const news = db.get('news');

let
	result, limit = 0, offset = 0;

/* GET home page. */
async function getNews(req, res, next) {

	if (JSON.stringify(req.query) != '{}') {
		limit = parseInt(req.query.limit);
		offset = parseInt(req.query.offset) * 9
	}
	result = await news.find({}, {limit: limit, skip: offset});
	if (JSON.stringify(result) != '[]') {
		res.json({
			result: result
		})
	}
	else {
		res.json({
			result: []
		})
	}

}

module.exports = {
	'GET /news': getNews,
};