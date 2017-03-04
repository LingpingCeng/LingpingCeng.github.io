(function(){

	var size = document.getElementById("size");
	var choose = document.getElementsByClassName("choose")[0];
	var oppen = document.getElementsByClassName("oppen")[0];
	
	size.addEventListener("touchstart",function(){
		choose.style.display = "block";
		
	});

	oppen.addEventListener("touchstart",function(){
			choose.style.display = "none";
		});
}());

(function(){
	var Div2 = document.getElementsByClassName("div2")[0];
	var Aa = Div2.getElementsByTagName("a");
	var Back = document.getElementsByClassName("back")[0];
	var ltb = document.getElementById("leftTabBox");
	var con = document.getElementsByClassName("content")[0];
	var Scroll = document.getElementsByClassName("scroll")[0];
	var Scrolltop = Scroll.getBoundingClientRect().top;
	var Windowh = window.innerHeight;
	var winh = window.innerHeight/2;
	var Height = Scrolltop - winh;

		Aa[1].addEventListener("touchstart",function(e){

			e.preventDefault();

			ltb.style.height = "100%";
		});
	
	Back.addEventListener("touchstart",function(e){
		e.preventDefault();
		ltb.style.height = 0;

	});

}());


// (function(){

// 	var Btn1 = document.getElementsByClassName("btn1")[0];
// 	var wrap =document.getElementsByClassName("wrap")[0];
// 	var Hui  = document.getElementsByClassName("hui")[0];

// 	Btn1.addEventListener("touchstart",function(){
// 		wrap.style.left= 0;
// 	});

// 	Hui.addEventListener("touchstart",function(){
// 		wrap.style.left= "-100%";
// 	});
// }());