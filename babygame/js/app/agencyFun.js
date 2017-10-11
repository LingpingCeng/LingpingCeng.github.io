define(['jquery','doT','director'],function($,tpl,dor){
	var agencyFun = function(){
		$('#sec').load("views/income.html",function(){
			var agency_tpl = tpl.template($('#agency').html());
			$('#sec').html(agency_tpl);
			$('.footer').show();

			var add_m = document.getElementsByClassName('add_m')[0];
			var exchange = document.getElementsByClassName('exchange')[0];
			var ag_bgg = document.getElementById('ag_bgg');
			var recharge1 = ag_bgg.getElementsByClassName('recharge1')[0];
			var guan = recharge1.getElementsByClassName('guan')[0];
			var trade = ag_bgg.getElementsByClassName('trade')[0];
			var bi = trade.getElementsByClassName('bi')[0];
			var duih = trade.getElementsByClassName('duih')[0];
			var shib = trade.getElementsByClassName('shib')[0];
			var sb_jix = shib.getElementsByClassName('sb_jix')[0];
			var bt_trade = trade.getElementsByClassName('bt_trade')[0];
			var ipt = trade.getElementsByClassName('ipt')[0];
			var jix = trade.getElementsByClassName('jix')[0];
			var success = trade.getElementsByClassName('success')[0];
			var ag_species = document.getElementById('ag_species');
			var speed =true;
			var inmoney = ag_species.innerHTML;
			var chzs =recharge1.getElementsByClassName('chz');
			//兑换
			exchange.addEventListener('touchstart',function(){
				ag_bgg.style.display = 'block';
				trade.style.display = 'block';
			},false);
			//关闭窗口函数
			function close(ga,rg,dh,sc,sb){
				ga.addEventListener('touchstart',function(){
					ag_bgg.style.display = 'none';
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
				ag_bgg.style.display = 'block';
				recharge1.style.display = 'block';				
			},false)
			//兑换点击
			bt_trade.addEventListener('touchstart',function(){
				if(inmoney){}
				if(speed){					
					success.style.display='block';
					duih.style.display='none';
					ipt.value='';
					ag_species.innerHTML=" ";
				}else{
					duih.style.display='none';
					shib.style.display='block';
					ipt.value='';
					ag_species.innerHTML=inmoney;
				}
			},false)
	
			for(var i=0;i<chzs.length;i++){
				chzs[i].index=i;
				chzs[i].addEventListener('touchstart',function(){
					var index = this.index;
					switch(index){
						case 0:
							ag_species.innerHTML=Number(ag_species.innerHTML)+10;
							break;
						case 1:
							ag_species.innerHTML=Number(ag_species.innerHTML)+20;
							break;
						case 2:
							ag_species.innerHTML=Number(ag_species.innerHTML)+50;
							break;
						case 3:
							ag_species.innerHTML=Number(ag_species.innerHTML)+100;
							break;
						case 4:
							ag_species.innerHTML=Number(ag_species.innerHTML)+200;
							break;
					}
						
				},false);
			}
			
			var bady_agency = document.getElementsByClassName('bady_agency')[0];
			var tbnt = bady_agency.getElementsByClassName('tbnt');
			var agb = document.getElementById('agb');
			var ag_close = agb.getElementsByClassName('ag_close')[0];
			var create_d = agb.getElementsByClassName('create_d')[0];
			var team_d = agb.getElementsByClassName('team_d')[0];
			var attention_d = agb.getElementsByClassName('attention_d')[0];
				ag_close.addEventListener('touchstart',function(){
					agb.style.display='none';
				},false)
				for(var i=0;i<tbnt.length;i++){
					tbnt[i].index=i;
					tbnt[i].addEventListener('touchstart',function(){
						console.log(1)
						var index = this.index;
						switch(index){
							case 0:
								agb.style.display='block';
								create_d.style.display = 'block';
								team_d.style.display = 'none';
								attention_d.style.display = 'none';
								break;
							case 1:
								agb.style.display='block';
								create_d.style.display = 'none';
								team_d.style.display = 'none';
								attention_d.style.display = 'block';
								break;
							case 2:
								agb.style.display='block';
								create_d.style.display = 'none';
								team_d.style.display = 'block';
								attention_d.style.display = 'none';
								break;
						}
							
					},false);
				}


		})
	}
	
	
	return {
		agencyFun:agencyFun
	}	
})
