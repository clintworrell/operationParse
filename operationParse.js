var fs  = require("fs");
var array = fs.readFileSync("data/map-01.txt").toString();

var xCoord = 0;
var yCoord = 0;
var int = 0;
var pipeCount = 0;


while (array[int] !== 'X') {
	if (array[int] === "*") {
		xCoord += 1;
	}
	else if (array[int] === "║") {
		pipeCount -= 1;
		xCoord = 0;
	}
	int += 1;
}


yCoord = ((pipeCount + 1) / 2);
console.log([xCoord, yCoord]);