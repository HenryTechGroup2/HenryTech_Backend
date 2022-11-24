import express from 'express';
import routerProduct from './routes/Product.routes.js';
import routerUser from './routes/User.routes.js';
import routerOrder from './routes/Order.routes.js';
import routerReview from './routes/Review.routes.js';
import routerInvoice from './routes/Invoice.routes.js';
import cors from 'cors';
import morgan from 'morgan';

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/api/product', routerProduct);
app.use('/api/user', routerUser);
app.use('/api/order', routerOrder);
app.use('/api/review', routerReview);
app.use('/invoice', routerInvoice);

export default app;