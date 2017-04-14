var lines = require('./lines.json');

const colors = {
    BLACK:'\x1b[30m',
    RED:'\x1b[31m',
    YELLOW:'\x1b[33m',
    BLUE:'\x1b[34m',
    WHITE:'\x1b[37m',
    CLEAR:'\x1b[0m'
}

function wrong () {
    lines.forEach(function(line){
        var output = "";

        line.forEach(function(block){
            output +=  colors[block.c.toUpperCase()] + '#'.repeat(block.l) + colors.CLEAR
        })

        console.log(output);
    })
}

module.exports = wrong;

wrong();