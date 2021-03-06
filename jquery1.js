<!doctype html>
<html>
	<head>
		<title>Horizontal Bar Chart</title>
		<script src="../Chart.min.js"></script>
		<script src="../Chart.HorizontalBar.js"></script>
	</head>
	<body>
		<div style="width: 50%">
			<canvas id="canvas" height="450" width="600"></canvas>
		</div>


		<script>

	  	var randomScalingFactor = function(){
	      return Math.round(Math.random()*100);
	    };

	  	var barChartData = {
	  		labels : ["5*","4*","3*","2*","1*"],
	  		datasets : [
	  			{
	  				fillColor : "rgba(0,128,0,1)",
	  				strokeColor : "rgba(0,220,0,1)",
	  				highlightFill: "rgba(0,128,0,1)",
	  				highlightStroke: "rgba(0,220,0,1))",
	  				data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
	  			}
	  		]

	  	};

	  	window.onload = function(){
	  		var ctx = document.getElementById("canvas").getContext("2d");

	      var chart = new Chart(ctx).HorizontalBar(barChartData, {
	  			responsive: true,
	        barShowStroke: false
	  		});
	  	};

		</script>
	</body>
</html>
