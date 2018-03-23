$(function () {
	Cookies.set('users',{user:['112345678978-12345678']});
	var username = $('#username'),
	    usernamemsg = $('#usernamemsg'),
	    password = $('#password'),
	    passmsg = $('#passmsg'),
	    passSth = $('.passSth span'),
	    confirm_password = $('#confirm_password'),
	    singUp = $('#singUp'),
	    codeinfo = $('#codeinfo'),
	    code = $('#code'),
	    userconfirm = false,
	    passconfirm = false,
	    passconfirm1 = false,
	    codeconfirm = false;
	username.on({
		change:function () {
			if(userConfirm(username.val())){
				usernamemsg.text('用户已存在')
			}
			else {
				if(userCheck(username.val())){
					usernamemsg.text('格式正确');
					userconfirm = true
				}
				else {
					usernamemsg.text('格式错误')
				}
			}
		}
	});
	password.on({
		change:function () {
			switch (passCheck(password.val())){
				case 'a':
					passSth.eq(0).css('background-color','#ff3f41');
					passconfirm = true;
					break;
				case 'b':
					passSth.eq(0).css('background-color','#ff8651');
					passSth.eq(1).css('background-color','#ff8651');
					passconfirm = true;
					break;
				case 'c':
					passSth.eq(0).css('background-color','#2db3a6');
					passSth.eq(1).css('background-color','#2db3a6');
					passSth.eq(2).css('background-color','#2db3a6');
					passconfirm = true;
					break;
				case 'e':
				default:
					passmsg.text('密码格式错误');
					passSth.eq(0).css('background-color','');
					passSth.eq(1).css('background-color','');
					passSth.eq(2).css('background-color','');
					break;
			}
		}
	            });
	confirm_password.on({
		change:function () {
			if(confirm_password.val() == password.val() && passconfirm){
				passconfirm1 = true
			}
		}
		});
	singUp.click(function () {
		console.log(userconfirm);
		if(passconfirm1 && userconfirm && codeconfirm){
			var users = JSON.parse(Cookies.get('users'));
			users.user.push(`${username.val()}-${password.val()}`);
			Cookies.set('users',users);
			alert('注册成功！')
		}
	});
	function codeInfo() {
		var a = ~~(Math.random()*10),
		    b = ~~(Math.random()*10),
		    c = ~~(Math.random()*10),
		    d = ~~(Math.random()*10),
		    str = a+''+b+''+c+''+d;
		codeinfo.text(str);
		code.change(function () {
			if(code.val()==codeinfo.text()){
				codeconfirm = true
			}
		})
	}
	codeInfo();
	function userConfirm(username) {
		var users = JSON.parse(Cookies.get('users'));
		for(let user of users.user){
			if(username == user.split('-')[0]){
				return true
			}
		}
	}
	function userCheck(username) {
		var reg = /^1[0-9]{10}/;
		return reg.test(username)
	}
	function passCheck(pass) {
		var numReg = /^[0-9]{5,12}$/,
		    numReg1 = /^[0-9]{13}$/,
		    cReg = /^[a-zA-Z]{5,12}$/,
		    cReg1 = /^[a-zA-Z]{13}$/,
		    numReg1_ = /^(?!\d+$)(?![a-zA-Z]+$)[a-zA-Z\d]{6,8}$/,
			numReg2 = /^(?!\d+$)(?![a-zA-Z]+$)[a-zA-Z\d]{9,13}$/,
			numReg3 = /^(?!\d+$)(?![a-zA-Z]+$)[a-zA-Z\d]{13}$/,
		    Reg = /^(?!\d+$)(?![a-zA-Z]+$)(?![@#$%^&]+$)[\da-zA-Z@#$%^&]{8}$/;
		if(numReg.test(pass) || cReg.test(pass) || numReg1_.test(pass)){
			return 'a'
		}
		else if(numReg1.test(pass) || cReg1.test(pass) || numReg2.test(pass)){
			return 'b'
		}
		else if(numReg3.test(pass) || Reg.test(pass)){
			return 'c'
		}
		else {
			return 'e'
		}
	}
});
