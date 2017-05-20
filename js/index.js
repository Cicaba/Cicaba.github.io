$(function(){
	//搜素框
	var ss_top=$("#ss").offset().top;
	$(window).scroll(
		function(){
			var socrll_top = $(this).scrollTop();
			if (socrll_top>ss_top) {
				$('.hied').show();
			}else{
				$('.hied').hide();
			}
		}
	)
	$("input[id='ss']").keyup(function(){
		$("input[id='sss']").val($("input[id='ss']").val())
	})
	$("input[id='sss']").keyup(function(){
		$("input[id='ss']").val($("input[id='sss']").val())
	})
	//菜单
	$(".z_i").hover(function(){
		$(this).find('a').css("color","#f60")
	},function(){
		$(this).find('a').css("color","#000")
	})
	//二级菜单
	$(".child_menu").hover(function(){
		$(this).siblings(".z_i").addClass('hover_');
		$(this).siblings(".z_i").find('a').css("color","#f60");
	},function(){
		$(this).siblings(".z_i").removeClass('hover_');
		$(this).siblings(".z_i").find('a').css("color","#000");
	})
	//------------------------------------------------------------------------------------------
	//固定导航
	//把每一个offset().top放进数组
	var arr = [];
	$('.nav_menu').each(function(index){
		arr[index] = parseInt($(this).offset().top);
	});
	//颜色
    var color=['orange','yellow','green','blue','cyan'];
	//滚动条滚动
	$(window).scroll(function(){
		var scroll_top = $(this).scrollTop()+10;
		for (var j = 0; j<color.length; j++) {
            $('.nav .img').get(j).style.background='#f2f2f2';
            $('.nav label').eq(j).hide();
        }
		for(var i = 0; i<arr.length+1; i++){
			if (scroll_top>arr[i]&&scroll_top<arr[i+1]) {
				$('.nav .img').get(i).style.background=color[i];
                $('.nav label').eq(i).show();
                $('.nav label').eq(i).css('background',color[i]);
                $('.nav label').eq(i).css('color','#fff')
			}
		}
	})
	//改变样式
	/*$('.nav .img').hover(function(){
		var indx = $('.nav .img').index($(this));
		$('.nav label').css('background',color[indx]);
		$(this).css('background',color[indx]);
	},function(){
		var indx = $('.nav .img').index($(this));
		$(this).css('background','#f2f2f2');
	})*/
    //单击楼梯
    $('.nav .img').click(function(){
        var indx = $('.nav .img').index($(this));
        console.log('box='+$(".nav_menu").eq(indx).offset().top);
        $('.nav label').hide();
        $('.nav .img').css('background','#f2f2f2');
        $(this).css('background',color[indx]);
        $('.nav label').eq(indx).show();
        $('.nav label').eq(indx).css('background',color[indx]);
        $('.nav label').eq(indx).css('color','#fff')
        //每一楼动画滚动
        var offset_top = $(".nav_menu").eq(indx).offset().top;
        $('body,html').stop().animate({
            scrollTop:$(".nav_menu").eq(indx).offset().top+'px'
        })
        console.log('滚动条='+$(window).scrollTop());
    })
	//时间
	 setInterval(function() {
         $("#shijian").text(new Date().toLocaleString());
     },1000);
})
