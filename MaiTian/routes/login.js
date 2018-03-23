const db = require('monk')('localhost/MaiTian');
const admin = db.get('admin');

let userInfo;
/* GET home page. */
async function getLogin(req, res, next) {
	req.session.destroy();
	res.render('login.html')
}
async function postLogin(req, res, next) {
	userInfo = await admin.find(req.body);
	if(JSON.stringify(userInfo) !== '[]'){
		req.session.userInfo = req.body.username;
		console.log(req.session.userInfo);
		res.redirect('index')
	}
	else {
		res.redirect('/')
	}
	//
}
module.exports = {
	'GET /':getLogin,
	'POST /':postLogin
};