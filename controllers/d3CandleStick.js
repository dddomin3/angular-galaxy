angular.module("gxMainApp")
	.controller('candleStickControl', ['$scope', function($scope){
		$scope.data = []; 
		$scope.data[0] = [];
		$scope.data[1] = [];
		$scope.data[2] = [];
		$scope.data[0][0] = "Greg";
		$scope.data[1][0] = "Phil";
		$scope.data[2][0] = "Dennis";
		
		$scope.data[0][1] = [12,44,80,24,10,45,2,13,88];
		$scope.data[1][1] = [12,44,80,24,10,45,2,13,88];
		$scope.data[2][1] = [12,44,80,24,10,45,2,13,88];
    }])
	.directive('d3Candlestick', ['d3', 'd3Box', function(d3, d3Box) {
	  return {
		restrict: 'EA',
		scope: {
		  data: "=",
		  label: "@",
		  onClick: "&"
		},
		link: function(scope, iElement, iAttrs) {
		
		var d3box = function() {
					  var width = 1,
						  height = 1,
						  duration = 0,
						  domain = null,
						  value = Number,
						  whiskers = boxWhiskers,
						  quartiles = boxQuartiles,
						  showLabels = true, // whether or not to show text labels
						  numBars = 4,
						  curBar = 1,
						  tickFormat = null;

					  // For each small multiple…
					  function box(g) {
						g.each(function(data, i) {
						  //d = d.map(value).sort(d3.ascending);
						  //var boxIndex = data[0];
						  //var boxIndex = 1;
						  var d = data[1].sort(d3.ascending);
						  
						 // console.log(boxIndex); 
						  //console.log(d); 
						  
						  var g = d3.select(this),
							  n = d.length,
							  min = d[0],
							  max = d[n - 1];

						  // Compute quartiles. Must return exactly 3 elements.
						  var quartileData = d.quartiles = quartiles(d);

						  // Compute whiskers. Must return exactly 2 elements, or null.
						  var whiskerIndices = whiskers && whiskers.call(this, d, i),
							  whiskerData = whiskerIndices && whiskerIndices.map(function(i) { return d[i]; });

						  // Compute outliers. If no whiskers are specified, all data are "outliers".
						  // We compute the outliers as indices, so that we can join across transitions!
						  var outlierIndices = whiskerIndices
							  ? d3.range(0, whiskerIndices[0]).concat(d3.range(whiskerIndices[1] + 1, n))
							  : d3.range(n);

						  // Compute the new x-scale.
						  var x1 = d3.scale.linear()
							  .domain(domain && domain.call(this, d, i) || [min, max])
							  .range([height, 0]);

						  // Retrieve the old x-scale, if this is an update.
						  var x0 = this.__chart__ || d3.scale.linear()
							  .domain([0, Infinity])
							 // .domain([0, max])
							  .range(x1.range());

						  // Stash the new scale.
						  this.__chart__ = x1;

						  // Note: the box, median, and box tick elements are fixed in number,
						  // so we only have to handle enter and update. In contrast, the outliers
						  // and other elements are variable, so we need to exit them! Variable
						  // elements also fade in and out.

						  // Update center line: the vertical line spanning the whiskers.
						  var center = g.selectAll("line.center")
							  .data(whiskerData ? [whiskerData] : []);

						 //vertical line
						  center.enter().insert("line", "rect")
							  .attr("class", "center")
							  .attr("x1", width / 2)
							  .attr("y1", function(d) { return x0(d[0]); })
							  .attr("x2", width / 2)
							  .attr("y2", function(d) { return x0(d[1]); })
							  .style("opacity", 1e-6)
							.transition()
							  .duration(duration)
							  .style("opacity", 1)
							  .attr("y1", function(d) { return x1(d[0]); })
							  .attr("y2", function(d) { return x1(d[1]); });

						  center.transition()
							  .duration(duration)
							  .style("opacity", 1)
							  .attr("y1", function(d) { return x1(d[0]); })
							  .attr("y2", function(d) { return x1(d[1]); });

						  center.exit().transition()
							  .duration(duration)
							  .style("opacity", 1e-6)
							  .attr("y1", function(d) { return x1(d[0]); })
							  .attr("y2", function(d) { return x1(d[1]); })
							  .remove();

						  // Update innerquartile box.
						  var box = g.selectAll("rect.box")
							  .data([quartileData]);

						  box.enter().append("rect")
							  .attr("class", "box")
							  .attr("x", 0)
							  .attr("y", function(d) { return x0(d[2]); })
							  .attr("width", width)
							  .attr("height", function(d) { return x0(d[0]) - x0(d[2]); })
							.transition()
							  .duration(duration)
							  .attr("y", function(d) { return x1(d[2]); })
							  .attr("height", function(d) { return x1(d[0]) - x1(d[2]); });

						  box.transition()
							  .duration(duration)
							  .attr("y", function(d) { return x1(d[2]); })
							  .attr("height", function(d) { return x1(d[0]) - x1(d[2]); });

						  // Update median line.
						  var medianLine = g.selectAll("line.median")
							  .data([quartileData[1]]);

						  medianLine.enter().append("line")
							  .attr("class", "median")
							  .attr("x1", 0)
							  .attr("y1", x0)
							  .attr("x2", width)
							  .attr("y2", x0)
							.transition()
							  .duration(duration)
							  .attr("y1", x1)
							  .attr("y2", x1);

						  medianLine.transition()
							  .duration(duration)
							  .attr("y1", x1)
							  .attr("y2", x1);

						  // Update whiskers.
						  var whisker = g.selectAll("line.whisker")
							  .data(whiskerData || []);

						  whisker.enter().insert("line", "circle, text")
							  .attr("class", "whisker")
							  .attr("x1", 0)
							  .attr("y1", x0)
							  .attr("x2", 0 + width)
							  .attr("y2", x0)
							  .style("opacity", 1e-6)
							.transition()
							  .duration(duration)
							  .attr("y1", x1)
							  .attr("y2", x1)
							  .style("opacity", 1);

						  whisker.transition()
							  .duration(duration)
							  .attr("y1", x1)
							  .attr("y2", x1)
							  .style("opacity", 1);

						  whisker.exit().transition()
							  .duration(duration)
							  .attr("y1", x1)
							  .attr("y2", x1)
							  .style("opacity", 1e-6)
							  .remove();

						  // Update outliers.
						  var outlier = g.selectAll("circle.outlier")
							  .data(outlierIndices, Number);

						  outlier.enter().insert("circle", "text")
							  .attr("class", "outlier")
							  .attr("r", 5)
							  .attr("cx", width / 2)
							  .attr("cy", function(i) { return x0(d[i]); })
							  .style("opacity", 1e-6)
							.transition()
							  .duration(duration)
							  .attr("cy", function(i) { return x1(d[i]); })
							  .style("opacity", 1);

						  outlier.transition()
							  .duration(duration)
							  .attr("cy", function(i) { return x1(d[i]); })
							  .style("opacity", 1);

						  outlier.exit().transition()
							  .duration(duration)
							  .attr("cy", function(i) { return x1(d[i]); })
							  .style("opacity", 1e-6)
							  .remove();

						  // Compute the tick format.
						  var format = tickFormat || x1.tickFormat(8);

						  // Update box ticks.
						  var boxTick = g.selectAll("text.box")
							  .data(quartileData);
						 if(showLabels == true) {
						  boxTick.enter().append("text")
							  .attr("class", "box")
							  .attr("dy", ".3em")
							  .attr("dx", function(d, i) { return i & 1 ? 6 : -6 })
							  .attr("x", function(d, i) { return i & 1 ?  + width : 0 })
							  .attr("y", x0)
							  .attr("text-anchor", function(d, i) { return i & 1 ? "start" : "end"; })
							  .text(format)
							.transition()
							  .duration(duration)
							  .attr("y", x1);
						}
							 
						  boxTick.transition()
							  .duration(duration)
							  .text(format)
							  .attr("y", x1);

						  // Update whisker ticks. These are handled separately from the box
						  // ticks because they may or may not exist, and we want don't want
						  // to join box ticks pre-transition with whisker ticks post-.
						  var whiskerTick = g.selectAll("text.whisker")
							  .data(whiskerData || []);
						if(showLabels == true) {
						  whiskerTick.enter().append("text")
							  .attr("class", "whisker")
							  .attr("dy", ".3em")
							  .attr("dx", 6)
							  .attr("x", width)
							  .attr("y", x0)
							  .text(format)
							  .style("opacity", 1e-6)
							.transition()
							  .duration(duration)
							  .attr("y", x1)
							  .style("opacity", 1);
						}
						  whiskerTick.transition()
							  .duration(duration)
							  .text(format)
							  .attr("y", x1)
							  .style("opacity", 1);

						  whiskerTick.exit().transition()
							  .duration(duration)
							  .attr("y", x1)
							  .style("opacity", 1e-6)
							  .remove();
						});
						d3.timer.flush();
					  }

					  box.width = function(x) {
						if (!arguments.length) return width;
						width = x;
						return box;
					  };

					  box.height = function(x) {
						if (!arguments.length) return height;
						height = x;
						return box;
					  };

					  box.tickFormat = function(x) {
						if (!arguments.length) return tickFormat;
						tickFormat = x;
						return box;
					  };

					  box.duration = function(x) {
						if (!arguments.length) return duration;
						duration = x;
						return box;
					  };

					  box.domain = function(x) {
						if (!arguments.length) return domain;
						domain = x == null ? x : d3.functor(x);
						return box;
					  };

					  box.value = function(x) {
						if (!arguments.length) return value;
						value = x;
						return box;
					  };

					  box.whiskers = function(x) {
						if (!arguments.length) return whiskers;
						whiskers = x;
						return box;
					  };
					  
					  box.showLabels = function(x) {
						if (!arguments.length) return showLabels;
						showLabels = x;
						return box;
					  };

					  box.quartiles = function(x) {
						if (!arguments.length) return quartiles;
						quartiles = x;
						return box;
					  };

					  return box;
					};
					
					function iqr(k) {
					  return function(d, i) {
						var q1 = d.quartiles[0],
							q3 = d.quartiles[2],
							iqr = (q3 - q1) * k,
							i = -1,
							j = d.length;
						while (d[++i] < q1 - iqr);
						while (d[--j] > q3 + iqr);
						return [i, j];
					  };
					}

					function boxWhiskers(d) {
					  return [0, d.length - 1];
					}

					function boxQuartiles(d) {
					  return [
						d3.quantile(d, .25),
						d3.quantile(d, .5),
						d3.quantile(d, .75)
					  ];
					}
		  
		  //This should remain in all d3 wrappings??
		  var svg = d3.select(iElement[0])
			  .append("svg")
			  .attr("width", "100%");

		  // on window resize, re-render d3 canvas
		  window.onresize = function() {
			return scope.$apply();
		  };
		  
		  scope.$watch(function(){
			  return angular.element(window)[0].innerWidth;
			}, function(){
			  return scope.render(scope.data);
			}
		  );

		  // watch for data changes and re-render
		  scope.$watch('data', function(newVals, oldVals) {
			return scope.render(newVals);
		  }, true);

		  // define render function
		  scope.render = function(data){

			// remove all previous items before render
			svg.selectAll("*").remove();

			console.log(d3Box);
			// setup variables
			var width, height, max;
			var color = d3.scale.category20();
			var chart = d3box.whiskers(iqr(1.5)).width(500).height(30);
			
			chart.domain([0, 150]);
			
			width = d3.select(iElement[0])[0][0].offsetWidth - 20;
			  // 20 is for margins and can be changed
			height = scope.data.length * 35;
			  // 35 = 30(bar height) + 5(margin between bars)
			max = 98;
			  // this can also be found dynamically when the data is not static
			  // max = Math.max.apply(Math, _.map(data, ((val)-> val.count)))

			// set the height based on the calculations above
			svg.attr('height', height);

			//create the rectangles for the bar chart
			svg.selectAll("box")
			  .data(data)
			  .enter()
				.append("box")
				.on("click", function(d, i){return scope.onClick({item: d});})
				.attr("x", 10) // half of the 20 side margin specified above
				.attr('fill', function(d) { return color(d.score); })
				.attr("y", function(d, i){
				  return i * 35;
				})
				.append("g")
					.attr("transform", "translate(10, 10)")
					.call(chart);// height + margin between bars

			svg.selectAll("text")
			  .data(data)
			  .enter()
				.append("text")
				.attr("fill", "#fff")
				.attr("y", function(d, i){return i * 35 + 22;})
				.attr("x", 15)
				.text(function(d){return d[scope.label];});

		  };
		}
	  };
}]);


