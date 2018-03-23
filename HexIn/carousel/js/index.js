$(function() {
	$( "#main" ).draggable({ handle: "#drag" });
});
$(function () {
	var content_main = $('#content .content_main'),
	    list = $('#content_list ul li'),
	    pre = $('#pre'),
	    next = $('#next'),
	    index = 0,
	    main = $('#main'),
		timer = null;
	main.hover(function () {
		clearInterval(timer)
	},function () {
		timer = setInterval(function () {
			if(index < 3){
				index++
			}
			if(index === 3){
				index = 0
			}
			imgPlay(index)
		},2000)
	});
	list.hover(function () {
		clearInterval(timer);
		index = $(this).index();
		imgPlay(index)
	},function () {
		timer = setInterval(function () {
			if(index < 3){
				index++
			}
			if(index === 3){
				index = 0
			}
			imgPlay(index)
		},2000)
	});
	pre.click(function () {
		if(index > 0){
			index--;
			imgPlay(index)
		}
	});
	next.click(function () {
		if (index < 2){
			index++;
			imgPlay(index)
		}
	});
	pre.hover(function () {
		clearInterval(timer)
	},function () {
		timer = setInterval(function () {
			if(index < 3){
				index++
			}
			if(index === 3){
				index = 0
			}
			imgPlay(index)
		},2000)
	});
	next.hover(function () {
		clearInterval(timer)
	},function () {
		timer = setInterval(function () {
			if(index < 3){
				index++
			}
			if(index === 3){
				index = 0
			}
			imgPlay(index)
		},2000)
	});
	timer = setInterval(function () {
		if(index < 3){
			index++
		}
		if(index === 3){
			index = 0
		}
		imgPlay(index)
	}, 2000);

	function imgPlay(index) {
		list.removeClass('active_list');
		list.eq(index).addClass('active_list');
		content_main.removeClass('active');
		content_main.eq(index).addClass('active')
	}
});