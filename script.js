// JavaScript
$(function(){
	
	var
	  winW = $(window).width(),
		winH = $(window).height(),
		nav = $('#mainnav ul a'),
		curPos = $(this).scrollTop();
	
	if (winW > 880){
		var headerH =20;
	}
	else{
		var headerH =60;
	}
	
	$(nav).on('click', function(){
		nav.removeClass('active');
  	var $el = $(this),
		id = $el.attr('href');
 		$('html, body').animate({
   		scrollTop: $(id).offset().top - headerH
 		}, 500);
		$(this).addClass('active');
		if (winW < 880){
			$('#menuWrap').next().slideToggle();
			$('#menuBtn').removeClass('close');
		}
 		return false;
	});
	
	$('.panel').hide();
	$('#menuWrap').toggle(function(){
		$(this).next().slideToggle();
		$('#menuBtn').toggleClass('close');
	},
	function(){
		$(this).next().slideToggle();
		$('#menuBtn').removeClass('close');
	});

});

// フェード
const fade = document.querySelector('#About');

const fadeKeyframes = {
  opacity: [0, 1],
}

const fadeOptions = {
  duration: 3000,
  easing: 'ease',
  fill: 'forwards',
}

fade.animate(fadeKeyframes, fadeOptions);


const items = document.querySelectorAll('.img-item');

// console.log(items);
// console.log(items.length);

// for文
for(let i = 0; i < items.length; i++){

  const keyframes = {
    opacity: [0, 1],
    translate: ['0 50px', 0],
    filter: ['blur(10px)', 'blur(0)'],
  };
  
  const options = {
    duration: 600,
    delay: i * 400,
    fill: 'forwards',
  };

  items[i].animate(keyframes, options);
}

// forEach文
// items.forEach((item, i) => {

//   const keyframes = {
//     opacity: [0, 1],
//     translate: ['0 50px', 0],
//     filter: ['blur(10px)', 'blur(0)'],
//   };
  
//   const options = {
//     duration: 600,
//     delay: i * 400,
//     fill: 'forwards',
//   };

//   item.animate(keyframes, options);
// });