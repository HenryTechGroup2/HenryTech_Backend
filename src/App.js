import express from 'express';
import routerProduct from './routes/Product.routes.js';
import routerUser from './routes/User.routes.js';
import routerStock from './routes/Stock.routes.js';
import routerOrder from './routes/Order.routes.js';
import routerReview from './routes/Review.routes.js';
import routerInvoice from './routes/Invoice.routes.js';
import routerFavorites from './routes/Favorite.routes.js';
import routerSprite from './routes/Stripe.routes.js';

import routerSendEmail from './routes/SendEmail.routes.js';
import routerCartEmail from './routes/CarEmail.routes.js';

import cors from 'cors';
import morgan from 'morgan';
import { Server } from 'socket.io';

const app = express();
app.use(express.json({ parameterLimit: 1000000, limit: '500mb' }));
app.use(cors());
app.use(morgan('dev'));
app.use('/api/product', routerProduct);
app.use('/api/user', routerUser);
app.use('/api/stock', routerStock);
app.use('/api/order', routerOrder);
app.use('/api/review', routerReview);
app.use('/api/invoice', routerInvoice);
app.use('/api/favorite', routerFavorites);
app.use('/api/payment', routerSprite);
app.use('/api/send-email', routerSendEmail);
app.use('/api/cart-email', routerCartEmail);

export default app;
