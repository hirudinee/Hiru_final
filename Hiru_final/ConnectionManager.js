module.exports=function(){

    this.dbConnections = [];

    this.dbConnections["hiru"] = {
            host: process.env.EndPoint_rdsHiru,
            port: process.env.Port_rdsHiru,
            user: process.env.User_rdsHiru,
            password: process.env.Password_rdsHiru,
            database: "hiru",
        };
    };