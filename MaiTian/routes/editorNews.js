const db = require('monk')('localhost/MaiTian');
const newsInfo = db.get('news');
const monk = require('monk');
const admin = db.get('admin');
const category = db.get('news_cate');
/* GET home page. */
let id;
let news;
let cate;
async function getEditorNews(req, res, next) {
	if(req.session.userInfo){
		//console.log(newsInfo)
		cate = await category.find({});
		res.render('editorNews.html',{
			username:req.session.userInfo,
			cate:cate
		})
	}
	else {
		res.redirect('/')
	}
}
async function postEditorNews(req, res, next) {
	if(req.body.add){
		cate = await category.find({});
		res.render('editorNews.html',{
			username:req.session.userInfo,
			cate:cate,
			type:'add'
		})
	}
	else {
		if(req.body.editorNews){
			id = monk.id(req.body.editorNews);
			news = await newsInfo.find({_id: id});
			//cate = await category.find({_id:monk.id(news[0].cid)})
			cate = await category.find({})
			//console.log(cate)
		}
		res.render('editorNews.html',{
			username:req.session.userInfo,
			news:news,
			cate:cate,
			type:'editor'
		})
	}
	//
}
module.exports = {
	'GET /editorNews':getEditorNews,
	'POST /editorNews':postEditorNews
};