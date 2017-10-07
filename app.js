var fs = require("fs");
var d3 = require("d3");

//D3's data loading functionality is based on XMLHttpRequest
// we use file system functionality to load the data
fs.readFile("./cities.csv", "utf8", function(error, data) {
	  data = d3.tsvParse(data);
	    console.log(JSON.stringify(data));

// converting string values to numbers by adding '+'	    
data.forEach(function(d) {
	    d.population = +d.population;
	        d["land area"] = +d["land area"];
		  });
  console.log(data);
});
