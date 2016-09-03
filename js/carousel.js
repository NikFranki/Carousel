$(document).ready(function(){
	var imagebox = $(".showbox").children('.imagebox')[0];
	icobox = $(".showbox").children('.icobox')[0];
	ico = $(icobox).children('span'),
	imagenum = $(imagebox).children().size(),
	imageboxWidth = $(imagebox).width(),
	imageWidth = imageboxWidth*imagenum;
	activeID = parseInt($($(icobox).children(".active")[0]).attr("rel")),
	nextID=0,
	intervalID=0,
	delaytime=4000,
	speed=1000,
	$(imagebox).css({'width':imageWidth+"px"});

	

	var rotate = function(clickID){
		if(clickID+1){
			nextID=clickID;
		}else{
			nextID=(activeID+1)%4;
		}
		$(ico[activeID]).removeClass('active');
		$(ico[activeID]).addClass('active');
		$(imagebox).animate({left:"-"+nextID*imageboxWidth+"px"},speed);
		activeID=nextID;
		if(clickID==ico.length-1){
			imagebox.style.left=0;
			clickID = 0;
		}
	}

	intervalID=setInterval(rotate,delaytime);

	
	$.each(ico,function(index,val){
		$(this).click(function(){
			clearInterval(intervalID);
			var clickID=index;
			rotate(clickID);
			intervalID=setInterval(rotate,delaytime);
		});

		$(this).mouseover(function(){
			clearInterval(intervalID);
			var clickID=index;
			rotate(clickID);
			intervalID=setInterval(rotate,delaytime);
		});
	});
});



