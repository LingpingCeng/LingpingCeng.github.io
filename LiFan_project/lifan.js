	(function(){
		var bt_left =document.getElementById('banner_left');
		var bt_right=document.getElementById("banner_right");
		var banner0=document.getElementsByClassName("banner_center")[0];
		var ul = banner0.getElementsByTagName("ul")[0];
		var li = ul.getElementsByTagName("li")[0];
		var li_W=li.offsetWidth;
		var indexa =0;
		var finish=false;

		bt_left.onclick = function(){
			if(!finish){
				finish=true;
				man(true);
			}
			
		}

		bt_right.onclick = function(){
			if(!finish){
				finish=true;
				man(false);
			}
			
		}

		function man(cool){
			if(cool){
				indexa++;
			}else{
				indexa--;
			}

			if(indexa>0){
				indexa=-2;
			}else if(indexa<-2){
				indexa=0;
			}
			console.log(indexa*li_W);
			ul.setAttribute("style","left:"+ indexa*li_W + "px")

		}

		ul.addEventListener("transitionend",function(){//监听运动结束

			finish = false;
		});

	}());

		
 // 文档 

(function(){

	var btn1 = document.getElementById("right");
	var btn2 = document.getElementById("left");
	var UL = document.getElementById("middle_right_div2_ul");
	var oDiv  = document.getElementById("middle_right_div2");
	var LI = UL.getElementsByTagName("li")[0];
	var li_with = LI.offsetWidth;
	var ul_width = li_with*5;
	var left = UL.offsetLeft;
	var lg = UL.innerHTML;
		lg = lg + lg;
	UL.innerHTML=lg;
	UL.style.width=ul_width+"px";
	var iNow = 0;
	var timer = null;
	var finish=false;				

		btn1.onclick = function(){
			if(!finish){
				finish=true;
				change(false);
			}											
		}

		btn2.onclick = function(){
			if(!finish){
				finish=true;
				change(true);
			}
		}

		clearInterval(timer);
		timer = setInterval(function(){
			change(false);
		},1500);

		oDiv.onmouseover = function(){
			clearInterval(timer);
		}

		oDiv.onmouseout = function(){
			clearInterval(timer);
			timer = setInterval(function(){
				change(false);
			},1500);
		}


		function change(BOOL){

			if(BOOL){
				iNow++;
			}else{
				iNow--;
			}

			if(iNow > 0){
				iNow = -3;
				
			}else if(iNow<=-4){
				iNow = 0;
			}
			UL.setAttribute("style","left:"+iNow*li_with+"px");
		}
	
			UL.addEventListener("transitionend",function(){
				finish=false;
			})

}());


(function(){

			var DIV = document.getElementById("head_3_02_div");
			var ul11=DIV.getElementsByTagName("ul")[0];
			var li11=ul11.getElementsByTagName("li")[0];
			var button1=document.getElementById("bottom_right");
			var button2=document.getElementById("bottom_left");
			var li_W = li11.offsetWidth;
			var Left=ul11.offsetLeft;
			var index = 0;
			var stop;
			var finish = false;

				button1.onclick=function(){
					if(!finish){
						finish = true;
						elm(false)
					}

				}

				button2.onclick=function(){
					if(!finish){
						finish = true;
						elm(true)
					}
				}

					clearInterval(stop);
				DIV.onmouseover=function(){
					clearInterval(stop);
				}

				DIV.onmouseout=function(){
					clearInterval(stop);
					stop = setInterval(function(){
							elm(false);
						},1500);
				}

				ul11.addEventListener("transitionend",function(){//监听运动结束
						finish = false;
				})


				stop = setInterval(function(){
							elm(false);
						},1500);

				function elm(apple){

					if(apple){
						index++;
					}else{
						index--;
					}
					// console.log(index);
					if(index > 0){
						index=-2;
					}else if(index <-2){
						index=0;
					}
					ul11.setAttribute("style","left:" + index * li_W +"px");
				}
				ul11.addEventListener("transitionend",function(){
					finish=false;
				});
}());





// 科技智能舒适

(function(){

				var Div0 = document.getElementById("Kehead_middle_text");
                var ul22 =Div0.getElementsByTagName("ul")[0];
                // var lfet22=ul22.offsetLeft;
                var li11=ul22.getElementsByTagName("li")[0];
                var li11_w=li11.offsetWidth;
                var Btn1 =document.getElementById("Kehead_middle_btn_r");
                var Btn2 = document.getElementById("Kehead_middle_btn_l");
                var index0=0;
                var stop0;
                var finish=false;

                Btn1.onclick=function(brother){
                	
                	if(!finish){
                		console.log(1111)
                		finish=true;
                		sister(false);
                	}                	
                }

                Btn2.onclick=function(brother){
                	if(!finish){
                		finish=true;
                		sister(true);
                	}
                }

                Div0.onmouseover=function(){
                	clearInterval(stop0);
                }

                	clearInterval(stop0);
                Div0.onmouseout=function(){
                	stop0= setInterval(function(){
               		sister(false);
                	},1500);
                }


               stop0= setInterval(function(){
               		sister(false);
                },1500);

                 function sister(brother){
                 	if(brother){
             			index0++;
                 	}else{
                 		index0--;
                 	}

                 	if(index0 > 0){
                 		index0 = -2;
                 	}else if(index0 < -2){
                 		index0 = 0;
                 	}
                 	ul22.setAttribute("style","left:" + index0 * li11_w +"px");
                 }

                ul22.addEventListener("transitionend",function(){
					finish=false;
				});

}());


// 体验人性设计
(function(){

 var Div1 =document.getElementById("tiyan_3");
                    var ul33 =Div1.getElementsByTagName("ul")[0];
                    var left33=ul33.offsetleft;
                    var li33 =ul33.getElementsByTagName("li")[0];
                    var li33_w=li33.offsetWidth;
                    var Next =document.getElementById("tybtn_right");
                    var Prev=document.getElementById("tybtn_left");
                    var nunb = 0;
                    var stop1;
                    var finish = false;

                    Next.onclick = function(zz){
                    	if(!finish){
                    		finish=true;
                    		fuck(false);
                    	}
                    	
                    }

                    Prev.onclick = function(zz){
                    	if(!finish){
                    		finish=true;
                    		fuck(true);
                    	}
                    	
                    }

                    Div1.onmouseover=function(){
                    	clearInterval(stop1);
                    }

                    	clearInterval(stop1);
                     Div1.onmouseout=function(){
                    	stop1=setInterval(function(){
                    		fuck(false);
                    	},1500)
                    }

                    stop1=setInterval(function(){
                    		fuck(false);
                    },2000)

                    function fuck(zz){
                    	if(zz){
                    		nunb++;
                    	}else{
                    		nunb--;
                    	}

                    	if(nunb > 0){
                    		nunb = -4;
                    	}else if(nunb <-4){
                    		nunb =0;
                    	}
                    	ul33.setAttribute("style","left:"+ nunb*li33_w +"px");
                    }
                    ul33.addEventListener("transitionend",function(){
                    	finish=false;
                    })
	
}());










