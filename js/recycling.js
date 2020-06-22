/*
* @Author: dxx
* @Email: dxxtalking@163.com
* @Date:   2020-06-06 17:00:09
* @Last Modified by:   dxx
* @Last Modified time: 2020-06-22 18:00:49
*/
$(function () {
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 5,
    spaceBetween: 20,
  	centeredSlides: true,
  	autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  	loop: true,
  });

	$("#delivery").cxScroll({
		step:1,
		time:2000,
		direction: 'bottom',
	});

	$("#check").cxScroll({
		step:1,
		time:2000,
		direction: 'bottom',
	});
});
