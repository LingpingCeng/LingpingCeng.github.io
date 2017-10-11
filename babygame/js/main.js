require.config({
	baseUrl:'js/lib',
	paths:{
		'jquery':'jquery.min',
		'flexible' :'flexible',
		'director':'director.min',
		"doT":'doT.min',
//		'index':'../app/index',
	}
})
	require(['jquery'],function($){
				
	});
	
	require(['flexible'],function(flex){
				
	});

	require(['director'],function(dor){
				
	});

	require(['doT'],function(tpl){
				
	});

	require(['app/index'],function(id){
				
	});