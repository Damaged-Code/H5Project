const db = require('monk')('localhost/haidilao');
const order = db.get('order');

let result = 0;

async function PostOrder(req, res, next) {
	if (order.insert(JSON.parse(req.query.info))) {
		res.json({
			result: 1
		})
	}
	else {
		res.json({
			result: 0
		})
	}
}

async function GetOrder(req, res, next) {

	result = await order.find({});
	console.log(result);
	res.json({
		result: result
	})
}

module.exports = {
	'POST /order': PostOrder,
	'GET /order': GetOrder
};