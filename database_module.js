const user = require("./user");
const sql = require('mssql/msnodesqlv8');

function connectDatabaseServer(callback){
    //Get database connection string and connect with windows authentication
    user.input('Database Host name:', hostName =>{
        console.log(`Attempting to connect to ${hostName}`);
        connection(generateSQLConfig(hostName));
    });
}

async function connection(config){
    try{
        await sql.connect(config);
        const result = await sql.query('SELECT name, database_id, create_date FROM sys.databases;');
        console.log(result)
        console.log("Closing Connection..")
        await sql.close();
    }catch(connectionError){
        console.error(connectionError);
    }

}

function generateSQLConfig(hostName){
    // const config = {
    //     server: hostName,
    //     port: 1443,
    //     database: "master",
    //     driver: "msnodesqlv8",
    //     pool:{
    //         max: 10,
    //         min: 0,
    //         idleTimeoutMillis: 30000
    //     },
    //     options:{
    //         trustedConnection: true
    //     }
    // };\
    
    //simple DSN connection method
    const config = {
        connectionString: 'DSN=localhost',
    }
    
    console.log("Logging in with \n",config)
    return config
}

module.exports = { connectDatabaseServer };
