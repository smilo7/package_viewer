//interface for viewing package info on ubuntu and debian systems

var defaultDir = "file:/var/lib/dpkg/status"

function readTextFile()
{
    var fs = require('fs');
    var textByLine = fs.readFileSync(defaultDir).toString().split("\n\n");
    console.log("hello")
    console.log(textByLine)
}

//splits program chunks based on returns
function splitOnReturns(){

}

function divideChunks(){

}

function displayInfo(){

}

readTextFile();
