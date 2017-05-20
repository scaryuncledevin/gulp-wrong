const COLORS = {
    BLACK:'\x1b[30m',
    RED:'\x1b[31m',
    YELLOW:'\x1b[33m',
    BLUE:'\x1b[34m',
    WHITE:'\x1b[37m',
    CLEAR:'\x1b[0m',
    L_GRAY:'\x1b[90m'
}

module.exports = function() {
    require('./lines.json').forEach(function(line){
        var output = "";

        line.forEach(function(block){
            output +=  COLORS[block.c.toUpperCase()] + '#'.repeat(block.l) + COLORS.CLEAR
        })

        console.log(output);
    })
}