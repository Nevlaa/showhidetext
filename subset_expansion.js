/*
*********************************************
Scott Horsburgh
Assignment 2 - Effects and Animations Application
07/25/2019
*********************************************
*/
$(document).ready(function() {
	//click event handler for a links in main section of body
	$("#jdom a").click(function(){
		$(this).prev().toggleClass("hide");
		//check if attribute is "hide" and show less; else show more 
		if($(this).prev().attr("class") != "hide"){
			$(this).text("Show less");
		}
		else{
			$(this).text("Show more");
		}
	}); //end of click event handler
}); // end of ready event handler