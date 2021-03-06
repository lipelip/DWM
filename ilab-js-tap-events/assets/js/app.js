window.addEventListener('load', function() {
    FastClick.attach(document.body);
}, false);

(function(){
	
	var button = document.getElementsByTagName('button')[0];
	var output = document.getElementsByTagName('div')[0];
	
	button.addEventListener('mouseover', function(){
		/* Event is trigger once every time you hover the button */
		console.log("Mouseover");
		output.innerHTML += "Mouseover <br />";
	});
	
	button.addEventListener('mousemove', function(){
		/* Event is trigger as long as you move hover the button */
		console.log("Mousemove");
		output.innerHTML += "Mousemove <br />";
	});
	
	button.addEventListener('mouseout', function(){
		/* Event is trigger once every time you leave the button */
		console.log("Mouseout");
		output.innerHTML += "Mouseout <br />";
	});
	
	button.addEventListener('mousedown', function(){
		/* Event is trigger once every time you press the button (active) */
		console.log("Mousedown");
		output.innerHTML += "Mousedown <br />";
	});
	
	button.addEventListener('mouseup', function(){
		/* Event is trigger once every time you stop pressing the button */
		console.log("Mouseup");
		output.innerHTML += "Mouseup <br />";
	});
	
	button.addEventListener('click', function(){
		/* Event is trigger once the button was pressed */
		console.log("click");
		output.innerHTML += "Click <br />";
	});
	
	button.addEventListener('touchstart', function(){
		console.log("touchstart");
		output.innerHTML += "Touchstart <br />";
	});
	
	button.addEventListener('touchmove', function(){
		console.log("touchmove");
		output.innerHTML += "Touchmove <br />";
	});
	
	button.addEventListener('touchend', function(){
		console.log("touchend");
		output.innerHTML += "Touchend <br />";
	});
	
	button.addEventListener('touchcancel', function(){
		console.log("touchcancel");
		output.innerHTML += "Touchcancel <br />";
	});
	
	
	
	/*
	
		Notice that the when you clicked a button
		The MOUSEDOWN is triggered first
		then the MOUSEUP
		then the CLICK	
		
		on mobile we have:
		over, move, down, up, click
		
		mousemove is only triggered once
		so IOS2.0 introduce touchevent
		
		start>move>end>cancel
		
	*/
	
})();