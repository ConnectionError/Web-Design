$(document).ready(function() {
  $('.nav-button').click(function() {
    $('.nav-button').toggleClass('change');
  });
	$(window).scroll(function() {
    let position = $(this).scrollTop();
		if(position >= 200){
			$('.nav-menu').addClass('custom-navbar');
		}
		else{
			$('.nav-menu').removeClass('custom-navbar');
		}
	});
	$(window).scroll(function() {
    let pos = $(this).scrollTop();
    if(pos >= 650) {
      $('.camera-img').addClass('fromLeft');
      $('.mission-text').addClass('fromRight');
    }
		else{
      $('.camera-img').removeClass('fromLeft');
      $('.mission-text').removeClass('fromRight');
    }
  });
	$('.gallery-list-item').click(function() {
    let value = $(this).attr('data-filter');
    if(value === 'all') {
      $('.filter').show(300);
    } else {
      $('.filter').not('.' + value).hide(300);
      $('.filter').filter('.' + value).show(300);
    }
  });
	
	$('.gallery-list-item').click(function(){
		$(this).addClass('active-item').siblings().removeClass('active-item');
	});
	
	$(window).scroll(function() {
    let p = $(this).scrollTop();
    if(p >= 4500) {
      $('.card-1').addClass('left');
      $('.card-2').addClass('down');
      $('.card-3').addClass('right');
    } else {
      $('.card-1').removeClass('left');
      $('.card-2').removeClass('down');
      $('.card-3').removeClass('right');
    }
  });
	
	
	
	
	
});