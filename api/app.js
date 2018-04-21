'use strict';
import express from 'express';
import orderRoute from './routes/orderRoutes';
import tableRoute from './routes/tableRoutes';
import productRoute from './routes/productRoutes';

import bodyparser from 'body-parser';

const app = express();

/* body-parser config */
app.use(bodyparser.json());
/*Route config*/
app.use('/order',orderRoute);
app.use('/table',tableRoute);
app.use('/product',productRoute);

export default app;