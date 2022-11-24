import express from 'express';
import routerProduct from './routes/Product.routes.js';
import routerUser from './routes/User.routes.js';
import routerStock from './routes/Stock.routes.js';
import cors from 'cors';
import morgan from 'morgan';

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/api/product', routerProduct);
app.use('/api/user', routerUser);
app.use('/api/stock', routerStock);

export default app;