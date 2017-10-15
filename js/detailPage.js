function load(jsonFileNumber){
		
        $(document).ready(function() {
		 
		$.ajax({
		   url: "./"+jsonFileNumber+".json",//json�ļ�λ��
		   type: "GET",//����ʽΪget
		   dataType: "json", //�������ݸ�ʽΪjson
		   success: function(data) {//����ɹ���ɺ�Ҫִ�еķ��� 
		       //���categories
			   var categoryInfoHtml="<li class=\"has-sub\"><a href='#'><span>Category</span></a><ul>";
			   var categoryInfoList=data.categoryInfo.firstCategoryInfoList;
			   $.each(categoryInfoList,function(i,item){
			       var firstCategoryInfoName = item.firstCategoryInfoName;
				   categoryInfoHtml += "<li class='has-sub'><a href='#'><span>"+firstCategoryInfoName+"</span></a>";
				   categoryInfoHtml += "<ul>"
				   $.each(item.secondArrayInfoList, function(i,secondCategoryInfo){
				       categoryInfoHtml += "<li><a href='"+secondCategoryInfo.secondCategoryInfoName+"'><span>"+secondCategoryInfo.title+"</span></a></li>";
				   })
			   categoryInfoHtml += "</ul></li>";
			  
			   })
			   categoryInfoHtml += "</ul></li>";
			   console.log(categoryInfoHtml);
			   $("#categoryInfo").after(categoryInfoHtml);
			   
		   
			   //��һ�������̶�ֵ
			   var lastPageID = data.lastPageID;
			   var nextPageID = data.nextPageID;
			   var createDate = data.createDate;
			   var title = data.title;
			   var imageName = "../images/"+data.imageName;
			   var lastPageHtml = "../"+lastPageID+".html";
			   var nextPageHtml = "../"+nextPageID + ".html";
			   if(lastPageID == 0){
				   lastPageHtml = "../index.html";
			   }
			   if(nextPageID == 0){
			       nextPageHtml = "../index.html";
			   }
			   $("#lastPageHtml").attr("href",lastPageHtml);
			   $("#nextPageHtml").attr("href",nextPageHtml);
			   $("#createDate").html(createDate);
			   $("#title").html(title);
			   $("#pageImage").attr("src",imageName);
			   
			   //�ڶ���������WriteBeforeStart
			   var writeBeforeStateHtml = "";
			   $.each(data.writeBeforeStart, function(i, item){
			       writeBeforeStateHtml += "<p>" + item + "</p>";
			   })
			   $("#writeBeforeStart").html(writeBeforeStateHtml);
			   
			   //������������quotes��quoteIllustration
			   $("#myquote").html(data.quotes);
			   $("#quoteIllustration").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+data.quotesIllustration);
			   
			   //���Ĳ�,����blocks��Ϣ��finalSummary��Ϣ
			   var block_html = "";
			   $.each(data.blocks.selfBlocks,function(i,item){
			       var header = item.header;
				   block_html += "<h5>"+header+"</h5>";
				   $.each(item.description, function(i,des){
				       block_html += "<p>"+ des +"</p>"
				   })
				   $.each(item.codes, function(item,code){
				       block_html += "<p><code>" + code + "</code></p>";
				   })
			   })
			   $.each(data.finalSummary,function(i,item){
			       block_html += "<p>"+item+"</p>";
			   })
			   $("#quoteIllustration").after(block_html);
		   }
});
	
});

}
	