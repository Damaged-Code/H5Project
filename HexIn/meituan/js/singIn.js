$(function () {
	var username = $('#username'),
	    password = $('#password'),
	    usermsg = $('#usermsg'),
	    passmasg = $('#passmasg'),
	    singIn = $('#singIn'),
	    passCheck = $('#passCheck'),
	    flag = false,
		users = JSON.parse(Cookies.get('users'));
	if(Boolean(Cookies.get('checked'))){
		var newusers = (JSON.parse(Cookies.get('newusers'))).user;
		username.val(newusers[0].split('-')[0]);
		password.val(newusers[0].split('-')[1])
	}
	singIn.click(function () {
		var user = users.user;
		for(let info of user){
			if(username.val()==info.split('-')[0] && password.val()==info.split('-')[1]){
				alert('登录成功');
				flag = true;
				break
			}
			else {
				alert('用户名或密码错误');
				flag = false;
				break
			}
		}
		if(passCheck.is(':checked') && flag){
			Cookies.set('checked', 'true');
			Cookies.set('newusers',{user:[`${username.val()}-${password.val()}`]},{ expires: 365 })
		}
		else {

		}
	})
});