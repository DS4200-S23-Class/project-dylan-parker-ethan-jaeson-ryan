var margin = {top: 10, right: 100, bottom: 30, left: 30},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");


d3.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_connectedscatter.csv", function(data) {

// code from https://d3-graph-gallery.com/graph/line_select.html

    // List of groups (here I have one group per column)
    var allGroup = ["valueA", "valueB", "valueC"]

    // add the options to the button
    d3.select("#selectButton")
      .selectAll('myOptions')
      .data(allGroup)
      .enter()
      .append('option')
      .text(function (d) { return d; }) // text showed in the menu
      .attr("value", function (d) { return d; }) // corresponding value returned by the button






  // const x = d3.scaleLinear()
  //   .domain([0, 8])
  //   .range([ 0, width ]);
  // svg.append("g")
  //   .attr("transform", "translate(0," + height + ")")
  //   .call(d3.axisBottom(x));

  // const y = d3.scaleLinear()
  //   .domain([0, 7.0])
  //   .range([ height, 0]);
  // svg.append("g")
  //   .call(d3.axisLeft(y));

  // const circles = svg.append('g')
  // 	.attr("id", "plane")
  //   .selectAll("point")
  //   .data(data)
  //   .enter()
  //   .append("circle")   	
  //     .attr("class", function (d) {return d.id;})
  //     .attr("cx", function (d) { return x(d.Sepal_Length); } )
  //     .attr("cy", function (d) { return y(d.Petal_Length); } )
  //     .attr("r", 5)
  //     .attr("fill-opacity", 0.5)
  //     .attr("fill", function(d) {
  //       if (d.Species === "setosa") {
  //           return "#DC267F";
  //       } else if (d.Species === "versicolor") {
  //           return "#FE6100";
  //       } else if (d.Species === "virginica") {
  //           return "#FFB000";
  //       }
  //     })