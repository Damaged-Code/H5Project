const db = require('monk')('localhost/haidilao');
const shop = db.get('shop');
const monk = require('monk');
let
	result, limit = 0, offset = 0;

/* GET home page. */
async function getShop(req, res, next) {
	result = await shop.find({},);
	res.json({
		result: result
	})
}

async function getShopOne(req, res, next) {
	result = await shop.find({_id: monk.id(req.query.id)},);
	res.json({
		result: result
	})
}

module.exports = {
	'GET /shop': getShop,
	'POST /shop': getShopOne
};