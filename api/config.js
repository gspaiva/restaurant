'use strict';

function normalizePort(val){
    var port = parseInt(val,10);
    if(isNaN(val)){
        return val;
    }
    if(port >= 0){
        return port;
    }
}

module.exports = {
    port: normalizePort(process.env.PORT || '3000')
} 