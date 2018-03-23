const db = require('monk')('localhost/haidilao')
const focus = db.get('focus')

let result

/* GET home page. */
async function getFocus(req, res, next) {
	result = await focus.find({})
	res.json({
		result: result
	})
}

module.exports = {
	'GET /focus': getFocus,
};