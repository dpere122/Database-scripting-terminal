const user = require("./user")

function connectDatabaseServer(callback){
    //Get database connection string and connect with windows authentication
    user.input('Database Host name:', command =>{
        console.log(`Attempting to connect to ${command}`);
        
    });
}

module.exports = { connectDatabaseServer };
