define(['jquery','director','doT'],function($,dor,tpl){
	
	function initFun(){
			$('.index_d').show();
			var i=0;		
			var timeBar = setInterval(function(){
		       	i+=5;
		        if(i>=100){
		            clearInterval(timeBar); 
		            window.location.hash = '#/bady';
		        }		        

		        var percentage = $('.percentage');
		   		percentage.css("width",i+"%");
   				$('.percentage1').html(i+"%");
		    },300)	 
		}	
		
		var init = setTimeout(function(){
			initFun();
		})	
		
		


				
	var bady = function(){
		clearTimeout(init);
		require(['../app/badyFun'],function(bady){
			bady.badyFun();
		})	
	}			

	var income = function(){
		clearTimeout(init);
		require(['../app/incomeFun'],function(income){
			income.incomeFun();
		})	
	}

	var refer =function(){
		clearTimeout(init);
		require(['../app/referFun'],function(refer){
			refer.referFun();
		})
	}
	
	var agency =function(){
		clearTimeout(init);
		require(['../app/agencyFun'],function(agency){
			agency.agencyFun();
		})
	}

	var service = function(){
		clearTimeout(init);
		require(['../app/serviceFun'],function(service){
			service.serviceFun();
		})
	}

	var routes ={
		'/bady':bady,
		'/income':income,
		'/refer':refer,
		'/agency':agency,
		'/service':service,
	}

	var router = Router(routes);
	router.configure({});
	router.init();
})