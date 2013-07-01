
$("#bigImgCon").css("background-color","black");
$("body").css("background-color","#E9EDF5");

// when Group image clicked
$("#img1").click(function(){
	$("#bigImgCon").slideToggle("slow");
	$(".btnselector").toggleClass("disabled");

	// setting the position of motes on image
	setCoord(1,0.11);
	setCoord(2,0.44);
	setCoord(3,0.72);
});

// activates when button clicked
$(".btnselector").click(function(){
	if (!($(this).hasClass("disabled"))) {
		$("#modalHeadreText").text($(this).text()+":");

		// in case "Flash" clicked
		if ($(this).text()=="Flash" ){
			$(".modalBody").html("\
			<p>Amy (0):</p>\
	    	<div class='progress progress-striped active'>\
	    		<div class='bar' style='width:40%;'></div>\
	    	</div><hr>\
	    		<p>Stuart (1):</p>\
	    	<div class='progress progress-striped active'>\
	    		<div class='bar' style='width:15%;'></div>\
	    	</div><hr>\
	    		<p>Barry (3):</p>\
	    	<div class='progress progress-striped active'>\
	    		<div class='bar bar-danger' style='width:67%;'></div>\
	    	</div><hr>\
			");
		}

		// in case "Neighbors Graph" clicked
		else if ($(this).text()=="Neighbors Graph" ) {
			$(".modalBody").html("\
				<label>RSSI:</label>\
				<input id='amount' type='text' class='span1' value='45'>\
				<div id='slider-range-max'></div><hr>\
				<button class='btn'>Refresh</button>\
				<canvas id='viewport' width='500' height='300'></canvas>\
			");

			// slider 
			$(function() {
				$( "#slider-range-max" ).slider({
				  range: "max",
				  min: 20,
				  max: 80,
				  value: 40,
				  slide: function( event, ui ) {
					$( "#amount" ).val( ui.value );
				  }
				});
				$( "#amount" ).val( $( "#slider-range-max" ).slider( "value" ) );
			});

			// Graph
			var sys = arbor.ParticleSystem(1000, 400,1);
			sys.parameters({gravity:true});
			sys.renderer = Renderer("#viewport") ;
			var Peyman = sys.addNode('Amy',{'color':'red','shape':'dot','label':'Amy'});
			var Arash = sys.addNode('Stuart',{'color':'blue','shape':'dot','label':'Stuart'});
			var Matteo = sys.addNode('Barry',{'color':'green','shape':'dot','label':'Barry'});
			sys.addEdge(Peyman, Arash);
			sys.addEdge(Arash, Matteo);
		}
		

		else  {
			$(".modalBody").html("<p>Empty</p>");


			}

		// show modal anyway
		$("#modalTest").modal("toggle");
		
	};
});

// Set the Coordinates for points which describe the mote position on image
// id: to selecting the target area
// relationalcorrd: to give the relational position of top-left pont of the area as initial point
function setCoord(id,relationalcoord) {
	var h = $("#bigimg1").height();
	var w = $("#bigimg1").width();
	
	var p1h = h /4;
	var p1w = relationalcoord * w;
	var p2h = (3*h) / 4;
	var p2w = p1w + (0.13*w);
	$("#area"+id).attr("coords",p1w+","+p1h+","+p2w+","+p2h);
}

// When area on image clicked, then toggle its existence
$(".area").click("click",function(){
	var i = $(this).attr("data-IDtoToggle");
	$(".mote"+i).toggleClass("hide");
});
	
