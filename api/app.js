'use strict';
import express from 'express';
import orderRoute from './routes/orderRoutes';

const app = express();
/*Route config*/
app.use('/order',orderRoute);

export default app;