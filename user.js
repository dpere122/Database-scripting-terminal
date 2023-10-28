const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function input(message,callback){
    readline.question(message != undefined ? message : '', input=>{
        console.log(``);
        if(callback != undefined){
            callback(input);
        }
        readline.close;
    });
}

module.exports = {input};