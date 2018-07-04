// Data taken from https://catalog.data.gov/dataset?res_format=JSON
var fs = require('fs');
var file = fs.readFileSync(__dirname + '/views.json');
var obj = JSON.parse(file);
let string = "Topic; Time; Description; Provenance\n";
obj.map(row => {
  string += row.name + ";" + row.createdAt + ";" + row.description.replace(/;/g, "").replace(/<br>/g, "").replace(/\r/g, "").replace(/\n/g, "") + ";" + row.provenance+ "\n"
})
console.log(string)
//run with:
//node index.js > result.csv
