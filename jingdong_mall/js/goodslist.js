(function() {
	var Delete = document.getElementsByClassName('delete-search')[0];
	var input = document.querySelector(".search-input");

	Delete.addEventListener("touchstart",function(){

		input.value = " ";
	})
}());

/* 商品列表的无限加载 */

(function(){

	var content = $(".content");
	var winh = $(window).height();
	var ul = $("#like-ul");

	/*
	 * describe: 创建加载的文档碎片，并且插入到content
	 * arguments : content , 要插入到的容器
	 * return ：返回插入的div jq对象
	*/

	function appendLoading(content){

		var html = "";
		var wrap;

		html += '<div class="loading">';
		html += '<img src="img/icon_loading.png">';
		html += '<span>正在加载</span>';
		html += '</div>';
		
		wrap = $(html)

		$(content).append(wrap);

		return wrap;
	}

	var loading = appendLoading(content)[0];
	var loadTop = 0;
	var isFinish = false;

	$(window).on("scroll",function(){

		//获取新添加的div到屏幕顶部的高度
		loadTop = loading.getBoundingClientRect().top;


		if(loadTop < winh && !isFinish){
			ajaxLoad();
			isFinish = true;
		}
	})
	
	function ajaxLoad(){
		$.ajax({
		  type: "GET",
		  url: "goods.json",
		  //data: { name: "John", location: "Boston"}
		}).done(function( obj ) {
		  
			var html = "";

			for(var key in obj){
				html += '<li><a href="#"><img src=" '+ obj[key]["img"] +' "><p>'+ obj[key]["describe"] +'</p><span><i>￥</i>'+ obj[key]["price"] +'</span><s>￥'+ obj[key]["s"] +'</s></a></li>';
			}

			// setTimeout为了测试作用，真正开发不需要
			setTimeout(function(){
				ul.append(html)
				isFinish = false;
			},500);
		});
	}
	
}());


// 价格的显示隐藏
!function(){

	$(".price").on("touchstart",function(){
		$(".price-layer").toggle();
	});

	$(".to-top").on("touchstart",function(){
		 $('body,html').animate({ scrollTop: 0 }, 500); 
	})

}();





(function(){
	var select = $(".select");
	var aside = $(".shx");
	var body = $("body");
	var btn = $(".bt0");

	select.on("touchstart",function(){
	
		aside.css({
			left : 0
		});
		body.toggleClass("overflow");
	});

	function sideHidden(){
		body.toggleClass("overflow");
		aside.css({
			left : "100%"
		});
	}

	btn.on("touchstart",function(){
		sideHidden()
	})


	var curX;
	var tarX;
	var sidew = $(".shx").width();
	var maxw = $(".shx_conten").width();
	var smaw = sidew - maxw;
	

	aside.on("touchstart",function(e){
		// 获取第一个手指的事件对象changedTouches[0]
		curX = e.changedTouches[0].pageX;

		aside.on("touchmove",function(e){
			//获取第一个手指的x轴
			
			tarX = e.changedTouches[0].pageX;
			//判断x轴移动超过了30像素
			if(tarX - curX > 30){
				sideHidden();
			}		
		})
	
		//点击半透明筛选层消失
		if(smaw > curX){
			sideHidden();
		}
	})


}());


(function(){
	var bt_img1 = document.getElementsByClassName("pos1")[0];
	var content1 = document.getElementsByClassName("content1")[0]
	var List1 = document.getElementsByClassName("list1")[0];
	var finish = true;


	bt_img1.addEventListener("touchstart",function(){
		if(finish){
			finish = false;
			bt_img1.setAttribute("src","img/icon (2).png");
			List1.style.height= "2.565"+"rem";
			content1.style.height= "3.565"+"rem";
		}else{
			bt_img1.setAttribute("src","img/icon (1).png");
			List1.style.height= "0"+"rem";
			content1.style.height= "0.9375"+"rem";
			finish = true;
		}	
			
	});
}());



(function(){
	var bt_img = document.getElementsByClassName("pos")[0];
	var List = document.getElementsByClassName("list")[0];
	var li = List.getElementsByTagName("li");
	var finish = true;


	bt_img.addEventListener("touchstart",function(){
		if(finish){
			finish = false;
			bt_img.setAttribute("src","img/icon (1).png");
			List.style.height= "0";
		}else{
			bt_img.setAttribute("src","img/icon (2).png");
			List.style.height= "2.6094"+"rem";
			finish = true;
		}	
			
	});

	for (var i = 0; i <li.length; i++) {
		li[i].addEventListener("touchstart",function(){
			for (var j = 0; j<li.length; j++) {
				li[j].className = "";
			}			
			this.className = "bg";
		})
	}
}())