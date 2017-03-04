(function(){

	var Text = document.getElementsByClassName('text')[0];
	var password = document.getElementsByClassName("password")[0];
	var vcode = document.getElementsByClassName("vcode")[0];
	var submit = document.getElementsByClassName("submit")[0];

	submit.addEventListener("touchstart",function(e){
		if(!user() || !psw()){
			e.preventDefault();
		}
	});

	Text.addEventListener("change",function(){
		hasValue();
	});

	password.addEventListener("change",function(){
		hasValue();
	});

	vcode.addEventListener("change",function(){
		hasValue();
	});

	function hasValue(){
		if(Text.value.trim() && password.value.trim() && vcode.value.trim()){
			submit.classList.add("active");
		}
	}

	function user(){
		var val = Text.value;

		var reg = /^[\w]+@.+\.[a-zA-Z]+/;

		var regphone = /1[3-9]{10}/;

		if(reg.test(val) || regphone.test(val)){
			return true;
		}

			return false;
	}


	function psw(){

		var val = password.vale;

		var reg = /^[\w_\-@\#\$]{8,16}/;

		if(reg.test(val)){
			return true;
		}

			return false;
	}
}());

(function(){

	var Password = document.getElementsByClassName("password")[0];
		console.log(Password)
	var ctrl = document.getElementsByClassName("pass")[0];
	var span = ctrl.getElementsByTagName("span")[0];
	var off = false;

		ctrl.addEventListener("touchstart",function(){
				
			off = off ? false : true;

			ctrl.classList.toggle("active");
			
			if(off){
				Password.setAttribute("type","text");
			}else{
				Password.setAttribute("type","password");
			}
		})
}());



