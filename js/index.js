$(function() {
	$(window).scroll(function () {
	            var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
	            if (scrollT > 150) {
	                $(".n1").addClass("animated fadeInLeft opt_show").removeClass("opt_hide");
	                $(".n2").addClass("animated fadeInRight opt_show").removeClass("opt_hide");
	                $(".n3").addClass("animated zoomInUp opt_show").removeClass("opt_hide");
	                $(".n4").addClass("animated fadeInRight opt_show").removeClass("opt_hide");
	                $(".n5").addClass("animated fadeInLeft opt_show").removeClass("opt_hide");
	                $(".n6").addClass("animated fadeInRight opt_show").removeClass("opt_hide");
	          
	            }
	        }
	   );
	$(window).scroll(function () {
	            var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
	            if (scrollT > 50) {
	                $("#scorll_head").addClass("float_head").removeClass("container");
	            }
	        }
	   );
	$(window).scroll(function () {
	            var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
	            if (scrollT < 50) {
	                $("#scorll_head").addClass("container").removeClass("float_head");
	            }
	        }
	   );
	$(window).scroll(function () {
	            var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
	            if (scrollT > 3000) {
	                $(".con_title").addClass("animated fadeInDown opt_show").removeClass("opt_hide");
	                $(".10").addClass("animated fadeInDown opt_show").removeClass("opt_hide");
	                $(".20").addClass("animated fadeInDown opt_show").removeClass("opt_hide");
	                $(".50").addClass("animated fadeInDown opt_show").removeClass("opt_hide");
	              
	            }
	        }
	   );
	$(window).scroll(function () {
	            var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
	            if (scrollT > 800) {
	              
	                $(".xmy").addClass("animated fadeInLeft opt_show").removeClass("opt_hide");
	                $(".zbh").addClass("animated fadeInRight opt_show").removeClass("opt_hide");
	                $(".zqx").addClass("animated fadeInLeft opt_show").removeClass("opt_hide");
	                $(".hhs").addClass("animated fadeInRight opt_show").removeClass("opt_hide");
	                $(".py").addClass("animated fadeInDown opt_show").removeClass("opt_hide");
	               
	            }
	        }
	   );
	$(window).scroll(function () {
	            var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
	            if (scrollT > 2000) {
	              	$(".FAQ_title").addClass("animated fadeInUp opt_show").removeClass("opt_hide");
	              	$(".icon1").addClass("animated fadeInUp opt_show").removeClass("opt_hide");
	              	$(".icon2").addClass("animated fadeInUp opt_show").removeClass("opt_hide");
	              	$(".icon3").addClass("animated fadeInUp opt_show").removeClass("opt_hide");
	              	$(".icon4").addClass("animated fadeInUp opt_show").removeClass("opt_hide");
	                $(".xly").addClass("animated fadeInUp opt_show").removeClass("opt_hide");
	                $(".zlh").addClass("animated fadeInUp opt_show").removeClass("opt_hide");
	                $(".zlx").addClass("animated fadeInUp opt_show").removeClass("opt_hide");
	                $(".hls").addClass("animated fadeInUp opt_show").removeClass("opt_hide");
	              
	            }
	        }
	   );
	$('.header_log').on('click', function(){
     	layer.open({
          type: 2,
          title: false,
          area: ['640px', '264px'],
          shade: 0.8,
          closeBtn: 0,
          shadeClose: true,
          content: 'media/media.mp4'
        });
    });
});
