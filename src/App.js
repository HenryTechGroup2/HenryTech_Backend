import express from 'express';
import routerProduct from './routes/Product.routes.js';
import routerUser from './routes/User.routes.js';
import routerOrder from './routes/Order.routes.js';
import cors from 'cors';
import morgan from 'morgan';

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/api/product', routerProduct);
app.use('/api/user', routerUser);
app.use('/api/order', routerOrder);

export default app;

// Se debe crear las rutas de order.
// Debe tener los métodos
// GET -> Trae todas las order
// Path: /api/order/
// PUT -> Modifica la order pasado por parámetro (ID
// Path: /api/order/:id
// DELETE -> Elimina la order pasado por parámetro (ID)
// Path: /api/order/:id
// POST -> Se crea una order donde los datos se pasan por body
// Path: /api/order