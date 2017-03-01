$(document).ready(function () {
    var n = 1;
    $('#right').click(function () {
        switch (n) {
            case 1:
                $("#big1").fadeOut();
                $("#big2").fadeIn();
                n += 1;
                break;

            case 2:
                $("#big2").fadeOut();
                $("#big3").fadeIn();
                n += 1;
                break;

            case 3:
                $("#big3").fadeOut();
                $("#big4").fadeIn();
                n += 1;
                break;
				
			case 4:
          		$("#big4").fadeOut();
                $("#big1").fadeIn();
                n = 1;				
        };
    });

    $('#left').click(function () {
        switch (n) {
            case 1:
                $("#big1").fadeOut();
                $("#big4").fadeIn();
                n = 4;
                break;

            case 2:
                $("#big2").fadeOut();
                $("#big1").fadeIn();
                n -= 1;
                break;

            case 3:
                $("#big3").fadeOut();
                $("#big2").fadeIn();
                n -= 1;
                break;
				
			case 4:
                $("#big4").fadeOut();
                $("#big3").fadeIn();
                n -= 1;
                break;	
        };
    });

    $(document).on("shit", function () {
        $("#right").trigger("click");
        setTimeout(function () {
            $(document).trigger("fuck");
        }, 5000);
    });
    $(document).on("fuck", function () {
        $("#right").trigger("click");
        setTimeout(function () {
            $(document).trigger("shit");
        }, 5000);
    });
	setTimeout(function () {
            $(document).trigger("shit");
        }, 5000);
		
	$("#shouji").hover(function(){
		$("#erweima").fadeIn();
	},
	function(){
		$("#erweima").fadeOut();
	}
	);	
	
	$("#smile").hover(function(){
		$("#erweima2").fadeIn();
	},
	function(){
		$("#erweima2").fadeOut();
	}
	);	
});