window.addEventListener('load', function() {
    FastClick.attach(document.body);
}, false);

(function(){
	

	var start = {};
	var end = {};
	var tracking = false;
	var thresholdTime = 500;
	var thresholdDistance = 100;
	var div = document.getElementsByTagName('div')[0];

	gestureStart = function(e) {
		div.innerHTML = '';
		if (e.touches.length>1) {
			tracking = false;
			return;
		} else {
			tracking = true;
			/* Hack - would normally use e.timeStamp but it's whack in Fx/Android */
			start.t = new Date().getTime();
			start.x = e.targetTouches[0].clientX;
			start.y = e.targetTouches[0].clientY;
		}
		console.dir(start);
	};
	
	gestureMove = function(e) {
		if (tracking) {
			e.preventDefault();
			end.x = e.targetTouches[0].clientX;
			end.y = e.targetTouches[0].clientY;
		}
	}
	
	gestureEnd = function(e) {
		tracking = false;
		var now = new Date().getTime();
		var deltaTime = now - start.t;
		var deltaX = end.x - start.x;
		var deltaY = end.y - start.y;
		/* work out what the movement was */
		if (deltaTime > thresholdTime) {
			/* gesture too slow */
			return;
		} else {
			if ((deltaX > thresholdDistance)&&(Math.abs(deltaY) < thresholdDistance)) {
				div.innerHTML = 'swipe right';
			} else if ((-deltaX > thresholdDistance)&&(Math.abs(deltaY) < thresholdDistance)) {
				div.innerHTML = 'swipe left';
			} else if ((deltaY > thresholdDistance)&&(Math.abs(deltaX) < thresholdDistance)) {
				div.innerHTML = 'swipe down';
			} else if ((-deltaY > thresholdDistance)&&(Math.abs(deltaX) < thresholdDistance)) {
				div.innerHTML = 'swipe up';
			} else {
				div.innerHTML = '';
			}
		}
	}

	div.addEventListener('touchstart', gestureStart, false);
	div.addEventListener('touchmove', gestureMove, false);
	div.addEventListener('touchend', gestureEnd, false);

	//source: http://patrickhlauke.github.io/touch/swipe/
		
})();