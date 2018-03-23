const db = require('monk')('localhost/haidilao')
const product_cate = db.get('product_cate')

let
	result, limit = 0, offset = 0

/* GET home page. */
async function getProductCate(req, res, next) {
    result = await product_cate.find({}, )
	res.json({
		result: result
	})
}

module.exports = {
	'GET /productcate': getProductCate,
};