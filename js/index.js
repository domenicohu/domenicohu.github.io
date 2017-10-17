( function( $ ) {

$(document).ready(function() {
		 
		$.ajax({
		   url: "sites/indexPage.json",//json文件位置
		   type: "GET",//请求方式为get
		   dataType: "json", //返回数据格式为json,
		   asyc:false,
		   success: function(data) {//请求成功完成后要执行的方法 
			   //each循环 使用$.each方法遍历返回的数据date
			   var totalHtmlInfo = "<div id='owl-slide' class='owl-carousel'>";
			   var html_resultinfo="";
			   var selfSlides = data.selfSlides;
			   var selfSlideeSize = eval(selfSlides).length; //预留，以后blog比较多的时候，固定展示多少篇
			   $.each(data.selfSlides, function(i, item) {
				    
			        var imageName =  "images/" + item.imageName
					var pageHtmlName = "sites/" + item.pageHtmlName
					var titleName = item.titleName
					var createDate = item.createDate
					var str = 'image:' + item.imageName + ',pageHtmlName:' + item.pageHtmlName + '';
					html_resultinfo +=  "<div class=\"item\">"
					+"<img src=\""+imageName+ "\"/>"
					+"<div class=\"carousel-caption\">"
						+"<div class=\"carousel-caption-inner\">"
							+"<p class=\"carousel-caption-title\"><a href=\""+pageHtmlName+"\">"+titleName+"</a></p>"
							+"<p class=\"carousel-caption-category\"><a href=\"#\" rel=\"category tag\">"+createDate+"</a>"
							+"</p>"			
							+"<p><a href='#' rel='category tag''></a> <a href='#' rel='category tag'></a>"
							+"</p>"
						+"</div>"
					+"</div>"
				+"</div>"
			   })
			   totalHtmlInfo += html_resultinfo;
			   totalHtmlInfo += "</div>";
			   $("#my-owl-slide").after(totalHtmlInfo);
			   
			   $(document).ready(function() {
				  $("#owl-slide").owlCarousel({
					autoPlay: 3000,
					items : 2,
					itemsDesktop : [1199,2],
					itemsDesktopSmall : [979,1],
					itemsTablet : [768, 1],
					itemsMobile : [479, 1],
					navigation: true,
					navigationText: ['<i class="fa fa-chevron-left fa-5x"></i>', '<i class="fa fa-chevron-right fa-5x"></i>'],
					pagination: false
				  });
			});
		   }
    });	
});



} )( jQuery );