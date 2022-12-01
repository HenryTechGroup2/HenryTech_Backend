import { Server as SocketServer } from 'socket.io';
import App from '../app.js';
import http from 'http';
import Review from '../models/Review.model.js';
import Product from '../models/Product.model.js';

const server = http.createServer(App);
const io = new SocketServer(server, {
    cors: {
        origin: 'http://localhost:3000',
    }
});

export const socketEvents = () => { 
    io.on('connection', (socket) => {

        socket.on('@review/create', async (reviewData) => {
            try {
                const newReview = await Review.create(...reviewData);
                io.emit('@review/create/successful', newReview);
            } catch (error) {
                io.emit('@review/create/error', { err: error });
            }
        })
    
        socket.on('@product/view', async (productId) => {
            try {
                const productDB = Product.findByPk(productId);
                productDB.update({ product_views: ++productDB.product_views });
                io.emit('@product/view/successful', `The product ${productDB.product_name} now has ${productDB.product_views} views`);
            } catch (error) {
                io.emit('@product/view/error', { err: error });
            }
        })
    });
 }