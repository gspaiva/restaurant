'use strict';
import express from 'express';
import orderRoute from './routes/orderRoutes';
import config from './config';
import bodyparser from 'body-parser';

const app = express();

config.database.authenticate()
    .then(()=>{
        console.log('connected');
    })
    .catch(err=>{
        console.error('error to connect',err);
    });

/* body-parser config */
app.use(bodyparser.json());
/*Route config*/
app.use('/order',orderRoute);

export default app;