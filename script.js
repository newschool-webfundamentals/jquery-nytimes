// A $( document ).ready() block.
$(document).ready(function() {
    
    $(".btn").on("click", function() {
    	$(".btn").replaceWith("<h2>2.4%</h2>");

    	// $(".btn").remove();
    	// $(".container").append("<h2>2.4%</h2>");
    });
    
});