function load(jsonFileNumber){
		
        $(document).ready(function() {
		 
		$.ajax({
		   url: "./"+jsonFileNumber+".json",//json文件位置
		   type: "GET",//请求方式为get
		   dataType: "json", //返回数据格式为json
		   success: function(data) {//请求成功完成后要执行的方法 
		       //填充categories
			   var categoryInfoHtml="";
			   var categoryInfoList=data.categoryInfo.firstCategoryInfoList;
			   $.each(categoryInfoList,function(i,item){
			       var firstCategoryInfoName = item.firstCategoryInfoName;
				   categoryInfoHtml += "<ul> <li class='has-sub'><a href='#'><span>"+firstCategoryInfoName+"</span></a><ul>";
				   $.each(item.secondArrayInfoList, function(i,secondCategoryInfo){
				       categoryInfoHtml += "<li><a href='"+secondCategoryInfo.secondCategoryInfoName+"'><span>"+secondCategoryInfo.title+"</span></a></li>";
				   })
			   categoryInfoHtml += "</ul>";
			   })
			   $("#categoryInfo").after(categoryInfoHtml);
		   
			   //第一步，填充固定值
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
			   
			   //第二步，加载WriteBeforeStart
			   var writeBeforeStateHtml = "";
			   $.each(data.writeBeforeStart, function(i, item){
			       writeBeforeStateHtml += "<p>" + item + "</p>";
			   })
			   $("#writeBeforeStart").html(writeBeforeStateHtml);
			   
			   //第三步，加载quotes和quoteIllustration
			   $("#myquote").html(data.quotes);
			   $("#quoteIllustration").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+data.quotesIllustration);
			   
			   //第四步,加载blocks信息及finalSummary信息
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
	