var color = require('gulp-color');
var lines = require('./lines.json');

module.exports = function() {
    lines.forEach(function(line){
        var output = "";

        line.forEach(function(block){
            output += color('#'.repeat(block.l), block.c)
        })

        console.log(output);
    })
}