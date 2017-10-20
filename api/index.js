'use strict';

const config = require('./config');
const express = require('express');
const app = express();

const port = config.port;

/* routes */
const orderRoute = require('./routes/orderingRoutes');
app.use('/order',orderRoute);

app.listen(port,()=>{
    console.log('listening on '+ port);
});