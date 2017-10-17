( function( $ ) {

$(document).ready(function() {
		 
		$.ajax({
		   url: "sites/indexPage.json",//json�ļ�λ��
		   type: "GET",//����ʽΪget
		   dataType: "json", //�������ݸ�ʽΪjson,
		   asyc:false,
		   success: function(data) {//����ɹ���ɺ�Ҫִ�еķ��� 
			   //eachѭ�� ʹ��$.each�����������ص�����date
			   var totalHtmlInfo = "<div id='owl-slide' class='owl-carousel'>";
			   var html_resultinfo="";
			   var selfSlides = data.selfSlides;
			   var selfSlideeSize = eval(selfSlides).length; //Ԥ�����Ժ�blog�Ƚ϶��ʱ�򣬹̶�չʾ����ƪ
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