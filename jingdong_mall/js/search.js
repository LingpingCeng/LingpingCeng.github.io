(function(){
	var del =document.querySelector(".delete-search");
	var input = document.querySelector(".search-input");

	del.addEventListener("touchstart",function(){
		input.value = "";
	})
}());

(function(){

	var input = document.querySelector(".search-input");
	var list = document.querySelector(".store-list");
	var clear = document.querySelector(".clear");
	var form = document.getElementsByTagName("form")[0]
	var store = [];

	form.addEventListener("submit",function(){
		setHistory();
	})

	// 页面一打开初始化li
	localforage.getItem('keystore').then(function(value){
		
		value && createHistory(value);
	});


	// 设置localstorage
	function setHistory(){

		//获取搜索框的值
		var key = input.value;

		//获取localstorage
		localforage.getItem('keystore', function(err, value) {
		   
			if(value == null){

				store.push(key);
				localforage.setItem('keystore', store);
			}else{

				// 如果存在keystore
				// value是localstorage保存的数组
				store = value;

				console.log(store)

				if(store.indexOf(key) == -1){

					store.unshift(key);

					// 如果数组长度超出，截取数组
					store.length > 20 && (store.length = 20);

					localforage.setItem('keystore', store);
				}
			}
		});	
	}


	// 创建生成li
	function createHistory(arr){

		var html = "";

		arr.forEach(function(e,i){
			html += "<li>"+ e +"</li>"
		})

		list.innerHTML = html;
	}

	// 删除localstorage
	clear.addEventListener("touchstart",function(){
		localforage.clear().then(function(){
			list.innerHTML = "";

			//重新设置keystore为空，因为clear数组还有空的内容
			localforage.setItem('keystore', []);
		})
	})
}())