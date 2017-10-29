'use strict';
import Sequelize from 'sequelize';



function normalizePort(val){
    var port = parseInt(val,10);
    if(isNaN(val)){
        return val;
    }
    if(port >= 0){
        return port;
    }
}

function setUpDatabaseConnection(){
    const sequelize = new Sequelize('restaurant','root','',{
        host: 'localhost',
        dialect: 'mysql'
    });
    return sequelize;
}

module.exports = {
    port: normalizePort(process.env.PORT || '3000'),
    database: setUpDatabaseConnection() 
} 