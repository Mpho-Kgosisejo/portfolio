new WOW().init();
initCanvas();

$(document).ready(function(){
	
	$('#slideShow > div:gt(0)').hide();

	setInterval(function() {
		$('#slideShow > div:first')
		.slideUp(400)
		.next()
		.slideDown(400)
		.end()
		.appendTo('#slideShow');
		
		initCanvas();
	}, 5500);
	
	$(".home").click(function(e){
		e.preventDefault();
		
		$('html,body').animate({
			scrollTop: $('#home').offset().top
		}, 1000);
	});
	
	$(".skills").click(function(e){
		e.preventDefault();
		
		$('html,body').animate({
			scrollTop: $('#skills').offset().top
		}, 1000);
	});
	
	$(".about").click(function(e){
		e.preventDefault();
		
		$('html,body').animate({
			scrollTop: $('#about').offset().top
		}, 1000);
	});
	
	$(".projects").click(function(e){
		e.preventDefault();
		
		$('html,body').animate({
			scrollTop: $('#projects').offset().top
		}, 1000);
	});
	
	$(".contacts").click(function(e){
		e.preventDefault();
		
		$('html,body').animate({
			scrollTop: $('#fluid').offset().top
		}, 1000);
	});
	
	$(window).scroll(function(){
		var scrollPos = $(window).scrollTop();
		
		if($(document).width() > 805){
			if(scrollPos < 10){
				$('#nav').css('background','rgba(34,56,77,0)');
			}
			else if(scrollPos < 20){
				$('#nav').css('background','rgba(34,56,77,0.2)');
			}
			else if(scrollPos < 30){
				$('#nav').css('background','rgba(34,56,77,0.3)');
			}
			else if(scrollPos < 40){
				$('#nav').css('background','rgba(34,56,77,0.4)');
			}
			else if(scrollPos < 50){
				$('#nav').css('background','rgba(34,56,77,0.5)');
			}
			else if(scrollPos < 60){
				$('#nav').css('background','rgba(34,56,77,0.6)');
			}
			else if(scrollPos < 70){
				$('#nav').css('background','rgba(34,56,77,0.7)');
			}
			else if(scrollPos > 100){
				$('#nav').css('background','rgba(34,56,77,0.8)');
			}
		}
		
		scroll(scrollPos);
	});
	
	var scrollPos = $(window).scrollTop();
	scroll(scrollPos);

});

function autoScroll(element){
	$('html,body').animate({
		scrollTop: $(element).offset().top
	}, 1000);
}

function readFile(file_path, output_error = false){
	let content = null;

	try{
		content = require(file_path);
	}catch(exc) {
		if (output_error)
			console.log(exc);
	}
	return (content);
}

function scroll(scrollPos){
	//if($(document).width() > 768){
		if(scrollPos > 100){
			$('#nav').addClass('alt-color');
			$('#nav .collapse').addClass('alt');
			$('#nav .navbar-header .home img').addClass('alt');
			
			if($(document).width() > 480){
				$('#nav .navbar-header #crcl').addClass('alt');
			}
			
			//$('#navbar').css('background','#eee');
		}else{
			$('#nav').removeClass('alt-color');
			$('#nav .collapse').removeClass('alt');
			$('#nav .navbar-header .home img').removeClass('alt');
			
			if($(document).width() > 480){
				$('#nav .navbar-header #crcl').removeClass('alt');
			}
			//$('#navbar').css('background','transparent');
		}
	/*}/*else{
		$('#nav').addClass('alt-color');
		$('#nav .collapse').addClass('alt');
		$('#nav .navbar-header .home img').addClass('alt');
		$('#nav').css('padding-left','10px');
	}*/
}

function closeFlash(){
	//$('#fixed-flash').css('display', 'none');
	$('#fixed-flash').addClass('bounceOutUp');
}

function hideloader(){
	$('.loader-wrapper').css('display', 'none');
}

function initCanvas(){
	var el = document.getElementById('graph');
	
	var options = {
		percent:  el.getAttribute('data-percent') || 25,
		size: el.getAttribute('data-size') || 160,
		lineWidth: el.getAttribute('data-line') || 2,
		rotate: el.getAttribute('data-rotate') || 0
	}

	var canvas = document.createElement('canvas');
	var span = document.createElement('span');
	span.textContent = options.percent + '%';
		
	if (typeof(G_vmlCanvasManager) !== 'undefined') {
		G_vmlCanvasManager.initElement(canvas);
	}

	var ctx = canvas.getContext('2d');
	canvas.width = canvas.height = options.size;

	el.appendChild(span);
	el.appendChild(canvas);

	ctx.translate(options.size / 2, options.size / 2); // change center
	ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg

	//imd = ctx.getImageData(0, 0, 240, 240);
	var radius = (options.size - options.lineWidth) / 2;

	var drawCircle = function(color, lineWidth, percent) {
			percent = Math.min(Math.max(0, percent || 1), 1);
			ctx.beginPath();
			ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
			ctx.strokeStyle = color;
			ctx.lineCap = 'round'; // butt, round or square
			ctx.lineWidth = lineWidth
			ctx.stroke();
	};

	drawCircle('#dddddd', options.lineWidth, 100 / 100);
	drawCircle('#7a7a7a', options.lineWidth, options.percent / 100);
}

