const db = require('monk')('localhost/MaiTian');
const admin = db.get('admin');
const news = db.get('news');
const news_cate = db.get('news_cate');
const monk = require('monk');
let newsInfo;
let newsinfo = {};
/* GET home page. */
async function getIndex(req, res, next) {
	if(req.session.userInfo){
		if(JSON.stringify(await news.find({})) !== '[]'){
			newsInfo = await news.find({})
		}
		//console.log(newsInfo)
		res.render('index.html',{
			username:req.session.userInfo,
			newsInfo:newsInfo
		})
	}
	else {
		res.redirect('/')
	}
}
async function postIndex(req, res, next) {
	//console.log(req.session.userInfo,req.body,'post')
	if(req.body.type == 'editor'){
		newsinfo.title = req.body.title;
		newsinfo.author = req.body.author;
		newsinfo.picUrl = req.body.picUrl;
		newsinfo.keywords = req.body.keywords;
		newsinfo.description = req.body.description;
		newsinfo.content = req.body.content;
		newsinfo.add_time = req.body.add_time;
		newsinfo.cid = req.body.category;
		newsinfo.category = (await news_cate.find({_id: monk.id(req.body.category)}))[0].name;
		//console.log(newsinfo)
		await news.update({_id: monk.id(req.body._id)}, {$set: newsinfo});
		console.log(req.body._id);
		newsInfo = await news.find({})
		//console.log(req.body)
	}
	else if(req.body.type == 'add'){
		newsinfo.title = req.body.title;
		newsinfo.author = req.body.author;
		newsinfo.picUrl = req.body.picUrl;
		newsinfo.keywords = req.body.keywords;
		newsinfo.description = req.body.description;
		newsinfo.content = req.body.content;
		newsinfo.add_time = req.body.add_time;
		newsinfo.cid = req.body.category;
		newsinfo.category = (await news_cate.find({_id: monk.id(req.body.category)}))[0].name;
		await news.insert(newsinfo);
		newsInfo = await news.find({})
	}
	else if(req.body.delNews){
		await news.remove({_id: monk.id(req.body.delNews)});
		newsInfo = await news.find({})
	}
	res.render('index.html',{
		username:req.session.userInfo,
		newsInfo:newsInfo
	})
}
module.exports = {
	'GET /index': getIndex,
	'POST /index': postIndex
};