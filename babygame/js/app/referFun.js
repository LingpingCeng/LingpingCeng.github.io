define(['jquery','doT','director'],function($,tpl,dor){
	var referFun = function(){
		$('#sec').load("views/income.html",function(){
			var refer_tpl =tpl.template($('#refer').html());
			$('#sec').html(refer_tpl);
			$('.footer').show();

			var add_m = document.getElementsByClassName('add_m')[0];
			var exchange = document.getElementsByClassName('exchange')[0];
			var rf_bgg = document.getElementById('rf_bgg');
			var recharge1 = rf_bgg.getElementsByClassName('recharge1')[0];
			var guan = recharge1.getElementsByClassName('guan')[0];
			var trade = rf_bgg.getElementsByClassName('trade')[0];
			var bi = trade.getElementsByClassName('bi')[0];
			var duih = trade.getElementsByClassName('duih')[0];
			var shib = trade.getElementsByClassName('shib')[0];
			var sb_jix = shib.getElementsByClassName('sb_jix')[0];
			var bt_trade = trade.getElementsByClassName('bt_trade')[0];
			var ipt = trade.getElementsByClassName('ipt')[0];
			var jix = trade.getElementsByClassName('jix')[0];
			var success = trade.getElementsByClassName('success')[0];
			var rf_species = document.getElementById('rf_species');
			var speed =true;
			var inmoney = rf_species.innerHTML;
			var chzs =recharge1.getElementsByClassName('chz');
			var change = document.getElementsByClassName('change');
			var change_y = document.getElementsByClassName('change_y')[0];
			var change_s = document.getElementsByClassName('change_s')[0];
			var icom = document.getElementById('icom');
			var footlist = document.getElementsByClassName('foot_ul')[0].children;	
			for(var i=0;i<change.length;i++){
				change[i].index=i;
				change[i].addEventListener('touchstart',function(){
					var index = this.index;
					switch(index){
						case 0 :
							rf_bgg.style.display = 'block';
							trade.style.display = 'block';
							ipt.value=change_y.innerText;
						break;
						case 1:
							rf_bgg.style.display = 'block';
							trade.style.display = 'block';
							ipt.value=change_s.innerText;
							break;
					}
				},false)
			}
			icom.addEventListener('touchstart',function(){
			var footlist = document.getElementsByClassName('foot_ul')[0].children;	
				window.location.hash ="#/income";
				
				for(var j=0;j<footlist.length;j++){
					footlist[j].className = " ";	
				}
				footlist[1].className='foot_bg';
				
					
										
				
			},false);
			//兑换
			exchange.addEventListener('touchstart',function(){
				rf_bgg.style.display = 'block';
				trade.style.display = 'block';
			},false);
			//关闭窗口函数
			function close(ga,rg,dh,sc,sb){
				ga.addEventListener('touchstart',function(){
					rf_bgg.style.display = 'none';
					rg.style.display = 'none';
					dh.style.display='block';
					sc.style.display='none';
					sb.style.display='none';					
				},false);				
			}
			close(guan,recharge1,duih,success,shib);
			close(bi,trade,duih,success,shib);
			close(jix,trade,duih,success,shib);
			close(sb_jix,trade,duih,success,shib);
			//关闭窗口函数end
			add_m.addEventListener('touchstart',function(){
				rf_bgg.style.display = 'block';
				recharge1.style.display = 'block';				
			},false)
			//兑换点击
			bt_trade.addEventListener('touchstart',function(){
				if(inmoney){}
				if(speed){					
					success.style.display='block';
					duih.style.display='none';
					ipt.value='';
					rf_species.innerHTML=" ";
				}else{
					duih.style.display='none';
					shib.style.display='block';
					ipt.value='';
					rf_species.innerHTML=inmoney;
				}
			},false)
	
			for(var i=0;i<chzs.length;i++){
				chzs[i].index=i;
				chzs[i].addEventListener('touchstart',function(){
					var index = this.index;
					switch(index){
						case 0:
							rf_species.innerHTML=Number(rf_species.innerHTML)+10;
							break;
						case 1:
							rf_species.innerHTML=Number(rf_species.innerHTML)+20;
							break;
						case 2:
							rf_species.innerHTML=Number(rf_species.innerHTML)+50;
							break;
						case 3:
							rf_species.innerHTML=Number(rf_species.innerHTML)+100;
							break;
						case 4:
							rf_species.innerHTML=Number(rf_species.innerHTML)+200;
							break;
					}
						
				},false);
			}
















			 			
		})
	}

    return {
		referFun:referFun
	}
})
