define(['jquery','doT','director'],function($,tpl,dor){
	var badyFun = function(){		
		$('#sec').load("views/income.html",function(){
			var bady_d = $('#bady').html();
			$('#sec').html(bady_d );
			$('.footer').show();
			
		/*投诉规则*/
		var rules = document.getElementById('rules');
		var complaints = rules.getElementsByTagName('div')
		var rule = document.getElementsByClassName('rule')[0];
		var add_servic = document.getElementsByClassName('add_servic')[0];
		var complaint = document.getElementsByClassName('complaint')[0];
		var opens = document.getElementsByClassName('open');
		var cl_list = document.getElementsByClassName('cl_list')[0];
		var cl_lis =cl_list.getElementsByTagName('li');
		var bgg = document.getElementById('bgg');
		var hint = document.getElementsByClassName('hint')[0];//普通
		var hint_list = hint.getElementsByClassName('hint_list')[0];
		var seleft=0;
		var start_b=document.getElementsByClassName('start_b')[0];
		
		var Jaudio = document.getElementById('Jaudio');
		
//		function audioAutoPlay(id){//全局控制播放函数
//		    var audio = document.getElementById(id),
//		        play = function(){
//		            audio.play();
//		            document.removeEventListener("touchstart",play, false);
//		        };
//		    audio.play();
//		    document.addEventListener("touchstart",play, false);
//		}
//		 
//		var isAppInside=/micromessenger/i.test(navigator.userAgent.toLowerCase())||/yixin/i.test(navigator.userAgent.toLowerCase());
//		if(!isAppInside){//给非微信易信浏览器
//		  audioAutoPlay();
//		}
		
		
		//提示点击
		function tishi(){}
		setTimeout(function(){
			start_b.style.display="none";
		},700)
			
		
		function bouding(obj,pos){
			return obj.getBoundingClientRect()[pos];
		}
		
		//显示条
		function shift(hl,h,sl,slt){
			setInterval(function(){
				sl-=5;
				hl.style.left=sl+'px';
				if(hl.offsetLeft<=-bouding(h,'width')*3){
					sl=0;				
				}
			},100);
		}
		shift(hint_list,hint,seleft);

		var tall= document.getElementsByClassName('tall')[0];
		var tall_two = document.getElementsByClassName('tall_two')[0];
		var hint = document.getElementsByClassName('hint')[0];
		var bady_d = document.getElementsByClassName('bady_d')[0];
		var bb_lists = document.getElementsByClassName('b_lists')[0];
		var tall_lists = document.getElementsByClassName('tall_lists')[0];
		var begins = document.getElementsByClassName('begins')[0];
		var gbc=1;
		var zeng = true;
		//普高场切换
		tall.addEventListener('touchstart',function(){
			if(zeng){
				if(gbc==1){
					gbc=2;
					hint.style.background="#c5a639";
					hint.style.borderBottomColor="#ab8a13";
					hint.style.borderTopColor="#ab8a13";
					bady_d.style.background="url(img/background-yellow.png) 0 0 no-repeat";
					bady_d.style.backgroundSize="100% 100%";				
					tall_two.style.display= 'block';
					tall.style.display= 'none';
					tall_lists.style.display='block';
					bb_lists.style.display = 'none';
					begins.style.background = "#d9b109";
					$('.now_line').empty();
					$('.nl').empty();
					aptr();				
					switc(_blis);
				}
			}

		});		
		tall_two.addEventListener('touchstart',function(){
			if(zeng){
				if(gbc==2){
					gbc=1;
					hint.style.background="#3882b8";
					hint.style.borderBottomColor="#1d5a86";
					hint.style.borderTopColor="#1d5a86";
					bady_d.style.background="url(img/background.png) 0 0 no-repeat";
					bady_d.style.backgroundSize="100% 100%";
					tall.style.display= 'block';
					tall_two.style.display= 'none';
					tall_lists.style.display='none';
					bb_lists.style.display = 'block';
					begins.style.background = "#1086d7";
					$('.now_line').empty();
					$('.nl').empty();
					aptr();
					switc(blis);
				}
			}
		});
		/*投诉*/
		var rules = document.getElementById('rules');
		var complaints = rules.getElementsByTagName('div')
		var rule = document.getElementsByClassName('rule')[0];
		var add_servic = document.getElementsByClassName('add_servic')[0];
		var complaint = document.getElementsByClassName('complaint')[0];
		var opens = document.getElementsByClassName('open');
		var cl_list = document.getElementsByClassName('cl_list')[0];
		var cl_lis =cl_list.getElementsByTagName('li');
		function close(e,r,t,h){
			for(var i=0;i<e.length;i++){
				e[i].index=i;
				e[i].addEventListener('touchstart',function(){
					var index=this.index;
					switch(index){
						case 0:
							r.style.display="none";
							break;
						case 1:
							t.style.display ="none";
							break;
						case 2:
							h.style.display="none";
							break;
					}
				})
			}
		}		
		close(opens,complaint,rule,add_servic);
		function report(a,b,c,d){
			for(var i=0;i<a.length;i++){
				a[i].index=i;
				a[i].addEventListener('touchstart',function(){
					var index=this.index;
					switch(index){				
						case 0:
							b.style.display ="block";
							
							break;
						case 1:
							c.style.display = "block";
							break;
						case 2:
							d.style.display='block';
							break;
					}
				})			
			}
		}
		report(complaints,complaint,rule,add_servic,rule);	
		var cl=true;
		function inform(n,b){
			for(var i=0;i<n.length;i++){
				n[i].addEventListener('touchstart',function(){
					if(cl){
						cl=false;
						for(var i =0;i<n.length;i++){
							n[i].className='';
						}
						this.classList.add('bacg');
						setTimeout(function(){
							alert('感谢您的反馈，正在核实...');
							b.style.display ="none";
							cl=true;
						},1000)
					}
				})
			}
		}
		inform(cl_lis,complaint);
		/*投诉end*/
		//提现兑换
		var add_m =document.getElementsByClassName('add_m')[0];
		var exchange=document.getElementsByClassName('exchange')[0];
		var recharge=document.getElementById('recharge');
		var trade = document.getElementById('trade');
		var guan = document.getElementsByClassName('guan')[0];
		var bi = document.getElementsByClassName('bi')[0];
		var recharge1 =document.getElementsByClassName('recharge1')[0];
		var chzs =recharge1.getElementsByClassName('chz');	
		add_m.addEventListener('touchstart',function(){
			recharge.style.display="block";
		})
		guan.addEventListener('touchstart',function(){
			recharge.style.display="none";
		})
		exchange.addEventListener('touchstart',function(){
			trade.style.display="block";
		})
		bi.addEventListener('touchstart',function(){
			trade.style.display="none";
		})			
		for(var i=0;i<chzs.length;i++){
			chzs[i].index=i;
			chzs[i].addEventListener('touchstart',function(){
				var index = this.index;
				switch(index){
					case 0:
						species.innerHTML=Number(species.innerHTML)+10;
						break;
					case 1:
						species.innerHTML=Number(species.innerHTML)+20;
						break;
					case 2:
						species.innerHTML=Number(species.innerHTML)+50;
						break;
					case 3:
						species.innerHTML=Number(species.innerHTML)+100;
						break;
					case 4:
						species.innerHTML=Number(species.innerHTML)+200;
						break;
				}
					
			})
		}
		//提现兑换end
		//娃娃
		//随机生成娃娃
		var now=document.getElementById("now");
		var now_l=now.getElementsByClassName("now_line");
		var nn=document.getElementById("n");
		var blists = document.getElementsByClassName('b_lists')[0];
		var _blists= document.getElementsByClassName('tall_lists')[0];
		var blis = blists.getElementsByTagName('li'); 
		var _blis = _blists.getElementsByTagName('li');
		var nl=nn.children;
		var shuzhi;
		var ids;
		var neir;
		
		function ranone(num){
			return Math.round(Math.random()*num);
		}
		//后台获取数据
		var ar = [6,10,15,30,"?"];
		var art = [12,24,32,50,"?"];
		var ert = [24,48,64,80,"?"];
		var _ar = [58,88,108,200,"?"];
		var _art = [108,158,208,308,"?"];
		var _ert = [208,308,408,608,"?"];
	
		function switc(bs){			
			for(var i=0;i<bs.length;i++){
				bs[i].index=i;
				bs[i].addEventListener('touchstart',function(){
					//dishi();
					farm = true;
					for(var i=0;i<bs.length;i++){
						bs[i].className="";
					}
					$('.now_line').empty();
					$('.nl').empty();
					this.className="act";
					ids=this.index;
					aptr();
				})
			}
		}
		switc(blis);
		function g_css(obj,css){
			return Math.round(parseInt(getComputedStyle(obj)[css]));
		}
		
		function shade(obj){
			var shine = document.createElement('div');
			shine.setAttribute('class',shine);
			obj.appendChild(shine);
		}
		//随机生成娃娃
		function shk(obj,w,h,sh,gg,num,a,at,et){
			for (var j=0;j<5;j++) {
				var r=ranone(ar.length-1);
				var ww=document.createElement("div");
				var hb=document.createElement("div");
				var shine = document.createElement('div');
				ww.setAttribute("class",w);
				hb.setAttribute("class",h);
				shine.setAttribute('class',sh);
				ww.style.background="url(img/"+gg+(j)+".png)0 0 no-repeat";
				ww.style.backgroundSize="100% 100%";
				neir=ar[r];
				if(ids==0){
					neir = a[r]
				}else if(ids==1){
					neir = at[r]
				}else if(ids==2){
					neir = et[r];
				}
				if(gg=='big'){
					hb.innerText=neir;
					ww.appendChild(hb);
					ww.appendChild(shine);
					obj.appendChild(ww);
				}else{
					hb.innerText=neir;
					ww.appendChild(hb);
					ww.appendChild(shine);
					obj.appendChild(ww);
				}								
			}
		}
		function aptr(){
			for (var i=0;i<now_l.length;i++) {
				if(gbc==2){						
					shk(now_l[i],"ww","hb",'shine',"h",1,_ar,_art,_ert);
					shk(nl[i],"ww2","hb2",'shine',"s",1,_ar,_art,_ert);
				}else if(gbc==1){
					shk(now_l[i],"ww","hb",'shine',"big",1,ar,art,ert);
					shk(nl[i],"ww2","hb2",'shine',"small",1,ar,art,ert);						
				}
			}		
		}
		aptr();
		
		//娃娃移动
		var speed = now.offsetLeft;
		var speeds= 0;	
		var baieirh;
		function pear(aa,objs){
			aa += 6;
			objs.style.left = objs.offsetLeft+ -aa  +"px";											
			if(objs.offsetLeft <= g_css(objs, "width")/-2) {
				clearInterval(baieirh);
				objs.appendChild(objs.children[0]);
				objs.style.left = 0 + "px";
				objs.children[1].innerHTML = "";
				aptr();
				dishi();
				aa = 0;
			}
		}
		function apple(bb,obj){
			bb += 3;
			obj.style.left = obj.offsetLeft + bb + "px";
			if(obj.offsetLeft>=0){
				clearInterval(baieirh);
				obj.insertBefore(obj.children[1],obj.children[0]);
				obj.style.left=-g_css(obj,'width')/2+'px';
				obj.children[0].innerHTML = "";
				aptr();
				dishi();
				bb = 0;
			}
		}
		function dishi(){
			clearInterval(baieirh);
			baieirh = setInterval(function(){
				pear(speed,now);
				apple(speeds,nn);
			},80);
		}	
		dishi()
		//娃娃end
		
		function bouding(obj,pos){
			return obj.getBoundingClientRect()[pos];
		}
		//夹娃娃
		var jia=document.getElementsByClassName('jia')[0];
		var jia_ww= document.getElementById('jia_ww');
		var clamp = document.getElementById('clamp');
		var clamptop = parseInt(getComputedStyle(clamp)['top']);			
		var clampheight=clamp.offsetHeight;
		var jia_ww=document.getElementById('jia_ww');
		var jia_top=bouding(jia_ww,"top");
		var jj=document.getElementById("j");	
		var wws=now.getElementsByClassName("ww");
		var clip = document.getElementsByClassName('clip')[0];
		var c_bt1 =document.getElementsByClassName('c_bt1')[0];
		var noclip = document.getElementsByClassName('noclip')[0];
		var nc_bt1 = document.getElementsByClassName('nc_bt1')[0];
		var money =clip.getElementsByClassName('money')[0];
		var nomoney = document.getElementsByClassName('nomoney')[0];
		var species = document.getElementById('species');
		var begin = document.getElementsByClassName('begin')[0];
		var dowm;
		var back;
		var farm =true;
		var sf =30;
		var gold;
		var hongbao=6;
		var jiatop1;
		//开始游戏按钮		
			begin.addEventListener('touchstart',function(event){
				event.preventDefault();
					if(farm){
					farm = false;
					zeng = false;
					clearInterval(dowm);
					if(species.innerHTML>0){												
						var spec =Number(species.innerHTML);
						if(gbc==1){							
							if(ids==0){
								if(spec>0){
									species.innerHTML=spec-5;							
									
								}else{
									alert('没钱了，老板，请充值')
								}
							}else if(ids==1){
								species.innerHTML=spec-10;
							}else if(ids==2){
								species.innerHTML=spec-20;
							}
						}else{
							if(ids==0){
								species.innerHTML=spec-50;							
							}else if(ids==1){
								species.innerHTML=spec-100;
							}else if(ids==2){
								species.innerHTML=spec-200;
							}
						}
						dowm=setInterval(function(){
							var jiatop0=bouding(jia_ww,"top");
							var nowtop =bouding(now,"top");	
							clamp.style.top=clamp.offsetTop+2+'px';
							if(jiatop0>=nowtop){	
								var tt=false;
								jia.className='jiajin';
								clearInterval(dowm);
								for(var i=0;i<wws.length;i++){
									//判断是否夹中
									if(bouding(jj,'left')>=bouding(wws[i],'left')&&bouding(jj,'right')<=bouding(wws[i],'right')){
										tt=!tt;
										var news=wws[i].cloneNode(true);
										news.style.width='3rem';
										news.style.height='3.6667rem';
										news.style.position='absolute';
										news.style.top=0;										
										gold=news.children[0].innerText
										var news_f=wws[i].parentNode;
										jia_ww.appendChild(news);
										wws[i].style.background = '';
										wws[i].innerHTML = '';	
										break;
									}
								}
								if(tt){
									var complain3=document.getElementsByClassName('complain3')[0];
										var qian = news.children[0].innerHTML;
										money.innerText=qian;
										if(qian==="?"){
											//var ar=arr(nums);
											//mon_show.innerHTML=ar[ran(4)]+"元";
										}else{
											//mon_show.innerHTML=qian+"元";
										}
										//概率匹配
										if(hongbao==6){
											
											back=setInterval(function(){
												clamp.style.top=clamp.offsetTop-3+'px';
												var jiatop=bouding(jia_ww,"top");
												if(jiatop<=jia_top){
													
													clearInterval(back);
													jia_ww.removeChild(jia_ww.children[0]);
													clip.style.display="block";
													jia.className='jia';
													bad = setInterval(function(){
														addElementDiv();														
													},200);													
												}
											},1000/60);
											c_bt1.addEventListener('touchstart',function(){
												clip.style.display="none";
												clearInterval(bad);
												farm=true;
												zeng = true;
											});
										//概率不匹配	
										}else{
											var qian = news.children[0].innerHTML;
											nomoney.innerText='3';
											back=setInterval(function(){
												clamp.style.top=clamp.offsetTop-3+'px';
												var jiatop=bouding(jia_ww,"top");
												if(complain3top >= jiatop){	
													clearInterval(back);
													var new_jia = jia_ww.children[0].cloneNode(true);
													new_jia.style.position='absolute';
													new_jia.style.top=bouding(jia_ww,"top")+"px";
													new_jia.style.left=bouding(jia_ww,"left")+"px";
													jia_ww.removeChild(jia_ww.children[0]);
													new_jia.className="ww";
													document.getElementsByTagName("body")[0].appendChild(new_jia);
													var kk;
													var jian=0;
													kk = setInterval(function(){
														jian+=3;
														new_jia.style.top=new_jia.offsetTop+jian+'px';
														jia.className='jia';
														if(bouding(new_jia,'top')>=bouding(bgg,'top')){
															clearInterval(kk);
															document.getElementsByTagName("body")[0].removeChild(new_jia);
														}														
													},60)
													bac = setInterval(function(){
														farm = false;
														clamp.style.top=clamp.offsetTop-3+'px';
														var jiatop=bouding(jia_ww,"top");
														if(bouding(jia_ww,'top')<=jia_top){
															clearInterval(bac);
															farm=true;
															setTimeout(function(){	
																console.log(11)
																noclip.style.display="block";
															},1000)
															nc_bt1.addEventListener('touchstart',function(){
																noclip.style.display="none";
																farm=true;
																zeng = true;
															})
														}
													},100)
												}
											},1000/70)
											var complain3top = bouding(complain3,'top');											
										}
								}else{
									back=setInterval(function(){
										farm = false;
										clamp.style.top=clamp.offsetTop-3+'px';	
										var jiatop=bouding(jia_ww,"top");
										if(jiatop<=jia_top){
											clearInterval(back);	
											noclip.style.display="block";
											jia.className='jia';
											nc_bt1.onclick = function(){
												noclip.style.display="none";
												zeng = true;
												farm=true;
												lgc = true;
											}
										}
									},1000/60)									
								}								
							}						
						},5);
						
					}else{
						alert('金币不足');
						recharge.style.display="block";
						
					}
				}
				
			})
		/*宝箱*/
		var chest =document.getElementsByClassName('chest')[0];		
		var popupbox = document.getElementsByClassName('popupbox')[0];
		var popupbox_d = document.getElementsByClassName('popupbox_d')[0];
		var popupbox_dv =document.getElementsByClassName('popupbox_dv')[0];		
		var baos =popupbox_dv.getElementsByClassName('bao');
		var popupbox_op=document.getElementsByClassName('popupbox_op')[0];
		var clearbox1 =popupbox_op.getElementsByClassName('clearbox1')[0];
		var clearbox2 =popupbox_op.getElementsByClassName('clearbox2')[0];
		var boxone =popupbox_op.getElementsByClassName('boxone')[0];
		var guessl = clearbox1.getElementsByClassName('guessl')[0];
		var guessr = clearbox2.getElementsByClassName('guessr')[0];
		var boxthree  =popupbox_op.getElementsByClassName('boxthree ')[0];
		var occlude =document.getElementsByClassName('occlude')[0];
		var popupone =document.getElementsByClassName('popupone')[0];
		var doubles =document.getElementsByClassName('double')[0];
		var figure = document.getElementsByClassName('figure')[0];
		var guize = popupbox.getElementsByClassName('guize')[0];
		var shuoming =popupbox.getElementsByClassName('shuoming')[0];
		var guanm = shuoming.getElementsByClassName('guanm')[0];
		var scope = document.getElementsByClassName('scope')[0];
		var big =document.getElementsByClassName('big')[0];
		var litle =document.getElementsByClassName('litle')[0];
		var warn = document.getElementsByClassName('warn')[0];
		var star =document.getElementsByClassName('star')[0];
		var imgs =star.getElementsByTagName('div');
		var face =-1;
		var numb;
		var xianshi=false;
		var lengths=imgs.length
		var cont =figure.innerHTML;
		var baoxian = true;
		var _baoxian = true;
		var doub = true;
		var _index;
		doubles.addEventListener('touchstart',function(){
			if(figure.innerHTML>0&&doub){				
				figure.innerHTML=figure.innerHTML*2;
			}else{
				alert('游戏进行中...');
			}
		});
		
		chest.addEventListener('touchstart',function(){
			popupbox.style.display='block';
		});
		
		guize.addEventListener('touchstart',function(){
			shuoming.style.display="block";
			popupbox_d.style.display='none';
		});
		
		guanm.addEventListener('touchstart',function(){
			shuoming.style.display='none';
			popupbox_d.style.display='block';							
		});							
		for(var j =0;j<baos.length;j++){
				baos[j].index=j;
			
			baos[j].addEventListener('touchstart',function(){
				if(figure.innerHTML>0){
					_index=this.index;
					switch(_index){
						case 0:
							if(parseInt(species.innerHTML)  >=  parseInt(figure.innerHTML)){
								popupbox_dv.style.display='none';
								popupbox_op.style.display='block';
								boxone.className="boxones";
								guessl.innerText= 5;
								species.innerHTML=species.innerHTML-figure.innerHTML;
								scope.innerText="猜猜另一个箱子比"+5+"大还是小(范围0-9)";
								doub=false;
								break;
							}else{
								alert('余额不足，请充值');
							}
						case 1:
						if(parseInt(species.innerHTML)  >=  parseInt(figure.innerHTML)){
							popupbox_dv.style.display='none';
							popupbox_op.style.display='block';
							boxthree .className="boxthrees";
							guessr.innerText=5;
							species.innerHTML=species.innerHTML-figure.innerHTML;
							scope.innerText="猜猜另一个箱子比"+5+"大还是小(范围0-9)";
							doub=false;
							break;
						}else{
							alert('余额不足，请充值');
						}
					}
				}else{
					alert("很遗憾没有通关")
				}
			});

		}
			big.addEventListener('touchstart',function(){
				if(baoxian){
					baoxian=false;
					var ours =Math.round(Math.random()*9);
					face++;
					if(_index==0){
						setTimeout(function(){
							boxthree.className="boxthrees";
							guessr.innerText=ours;
							if(ours>5){
								console.log('你中奖了')
								figure.innerHTML=figure.innerText*2;
								species.innerHTML =  parseInt(species.innerHTML)  + parseInt(figure.innerHTML);
							}else{								
								console.log('你没中奖了，哈哈');
								figure.innerHTML=0;
							}
						},1500);						
					}else{
						setTimeout(function(){
							boxone.className="boxones";
							guessl.innerText=ours;
							if(ours>5){
								console.log('你中奖了')
								figure.innerHTML=figure.innerText*2;
								species.innerHTML =  parseInt(species.innerHTML)  + parseInt(figure.innerHTML);
							}else{								
								console.log('你没中奖了，哈哈')
								figure.innerHTML=0;
							}
						},1500);
					}
					if(face <=9&&figure.innerHTML>=5){
						for(var i=0;i<lengths;i++){
							if(face<lengths){
								imgs[face].className="imgs";
							}											
						}						
						setTimeout(function(){
							clearbox1.className="boxone clearbox1";
							clearbox2.className="boxthree clearbox2";
							scope.innerText="任选一个宝箱(内涵数字0-9)打开";
							guessl.innerText= ' ';
							guessr.innerText= " ";
							popupbox_dv.style.display='block';
							popupbox_op.style.display='none';							
							baoxian = true;	
							doub = true;
						},3000);
					}else{
						alert('本局结束');						
					}	
				}
			});
			litle.addEventListener('touchstart',function(){
				if(baoxian){
					baoxian=false;
					var ours =Math.round(Math.random()*9);
					face++;
					if(_index==0){
						setTimeout(function(){
							boxthree.className="boxthrees";
							guessr.innerText=ours;
							if(ours<5){
								console.log('你中奖了')
								figure.innerHTML=figure.innerText*2;
								species.innerHTML =  parseInt(species.innerHTML)  + parseInt(figure.innerHTML);
							}else{								
								console.log('你没中奖了，哈哈');
								figure.innerHTML=0;
							}
						},1500);
					}else{
						setTimeout(function(){
							boxone.className="boxones";
							guessl.innerText=ours;
							if(ours<5){
								console.log('你中奖了');
								figure.innerHTML=figure.innerText*2;
								species.innerHTML =  parseInt(species.innerHTML)  + parseInt(figure.innerHTML);
							}else{								
								console.log('你没中奖了，哈哈');
								figure.innerHTML=0;
							}
						},1500);
					}
					if(face <=9&&figure.innerHTML>=5){
						for(var i=0;i<lengths;i++){
							if(face<lengths){
								imgs[face].className="imgs";
							}											
						}						
						setTimeout(function(){
							clearbox1.className="boxone clearbox1";
							clearbox2.className="boxthree clearbox2";
							scope.innerText="任选一个宝箱(内涵数字0-9)打开";
							guessl.innerText= ' ';
							guessr.innerText= " ";
							popupbox_dv.style.display='block';
							popupbox_op.style.display='none';							
							baoxian = true;
							doub = true;
						},3000);
					}else{
						alert('本局结束');						
					}
				}
			});	
		occlude.addEventListener('touchstart',function(){
			popupbox.style.display='none';
			popupbox_dv.style.display='block';
			popupbox_op.style.display='none';
			popupbox_op.style.display='none';
			scope.innerText="任选一个宝箱(内涵数字0-9)打开";
			figure.innerHTML=5;
			for(var i=0;i<lengths;i++){				
				imgs[i].className=" ";						
				face =-1										
			}
		},false);	
		/*宝箱end	*/	

		
		var jtp=1;
		var footer = document.getElementsByClassName('footer')[0];
		var clip = document.getElementsByClassName("clip")[0];		
		var czao = document.getElementsByClassName('czao')[0];
		var bad;
		function addElementDiv() {
			var f = ranone(4);
			var div = document.createElement("div");	
			var out = Math.round(Math.random()*300+10);
			var l = out;
			var t = 10;
			var r = 0;
			div.innerHTML = '<img src="img/debris'+f+'.png" />';			
			div.style.width = 50 + "px";
			div.style.height = 50 + "px";
			div.style.overflow = "hidden";
			div.style.position = "absolute"
			div.style.zIndex = 1;
			div.style.left = out + "px";
			div.style.top = 10 + "px";
			var ur = setInterval(function(){
				t+=3;			
				if(out >= l+100){
					r = 0;				
				}else if(out <= l){
					r = 1;
				};				
				if(r == 0){					
					out--;
				}else if(r == 1){					
					out++
				}				
				if(t >= bouding(footer,'top')){
					clearInterval(ur)
					clearInterval(bad);
					czao.removeChild(czao.childNodes[0]);
				}				
				div.style.left = out + "px";
				div.style.top = t + "px";
			},20);			
			czao.appendChild(div);
		}                                           



















		})
	}
	
	
	return {
		badyFun:badyFun
	}	
})
