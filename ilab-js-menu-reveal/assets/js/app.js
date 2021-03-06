window.addEventListener('load', function() {
    FastClick.attach(document.body);
}, false);

(function(){

	//le body
	var body = document.body;
						
	//reveal menu						
	var reveal = document.getElementsByClassName("reveal");
	Array.prototype.forEach.call(reveal, function(el, i){

		el.onclick = function() { 
				body.classList.toggle("menu-is-revealed");
		};

	});	
	
	//function to remove active class on section
	function removeActive(e){
		var section = document.getElementsByClassName("page");
		Array.prototype.forEach.call(section, function(el, i){

				el.classList.remove("active");			
	
		});					
	}
		
	//page active	
	var menuLink = document.getElementsByClassName('menu-reveal-link');
	Array.prototype.forEach.call(menuLink, function(el, i){

		el.onclick = function() { 
				removeActive();
				var content = this.innerText;
				var active = document.getElementsByClassName(content);
				active[0].classList.add("active");
				body.classList.remove("menu-is-revealed");
		};

	});
	
})();