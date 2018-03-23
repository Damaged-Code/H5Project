const db = require('monk')('localhost/haidilao')
const product = db.get('product')
const monk = require('monk')
let
	result, limit = 0, offset = 0

/* GET home page. */
async function getProduct(req, res, next) {
	result = await product.find({},)
	res.json({
		result: result
	})
}

async function getProductOne(req, res, next) {

	result = await product.find({_id: monk.id(req.query.id)},)
	res.json({
		result: result
	})
}

module.exports = {
	'GET /product': getProduct,
	'POST /product': getProductOne
};