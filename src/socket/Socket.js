import { Server as SocketServer } from 'socket.io';
import app from '../App.js';
import http from 'http';
import Review from '../models/Review.model.js';
import Product from '../models/Product.model.js';

export const server = http.createServer(app);
const io = new SocketServer(server, {
  cors: {
    origin: 'http://localhost:3000',
  },
});

export const socketEvents = () => {
  io.on('connection', (socket) => {

    socket.on('@review/create', async (reviewData) => {
      console.log(reviewData);
      try {
        const newReview = await Review.create(reviewData);
        const productDb = await Product.findByPk(reviewData.review_product_id, { include: { model: Review } });
        const newRating = Math.floor(productDb.reviews?.map((review) => { return review.review_score }).reduce((a, b) => a + b, 0) / productDb.reviews.length);
        
        productDb.update({ product_rating: newRating });
        console.log(productDb.dataValues.product_rating);
        io.emit('@review/create/successful', newReview);
      } catch (error) {
        io.emit('@review/create/error', { err: error });
      }
    });

    socket.on('@product/view', async (productId) => {
      try {

        const productDB = await Product.findByPk(productId);

        productDB.update({ product_views: ++productDB.product_views });
        console.log('Producto con id', productId, 'visto :', productDB.product_views, 'veces');
        io.emit(
          '@product/view/successful',
          `The product ${productDB.product_name} now has ${productDB.product_views} views`
        );
      } catch (error) {
        io.emit('@product/view/error', { err: error });
      }
    });
  });
};
