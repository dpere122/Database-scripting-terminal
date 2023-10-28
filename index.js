const commandCenter = require("./commands.js")
const user = require("./user.js")

function startDatabaseTool(){
    console.log("Database Scripting Tool");
    user.input('Command: ', command =>{
        commandModule(command)
    });
}

function commandModule(command){
    if(command != "exit"){
        switch(command){
            case "connect":
                commandCenter.connectDatabaseServer();
                break;
            default:
                console.log("Incorrect Command try again!");
                
        }
        user.input("Command: ",command => {commandModule(command)});
    }else{
        process.exit(0);
    }
}


startDatabaseTool();