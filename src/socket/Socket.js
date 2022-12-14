import { Server as SocketServer } from 'socket.io';
import app from '../App.js';
import http from 'http';
import Review from '../models/Review.model.js';
import Product from '../models/Product.model.js';
import { MsgPost, MsgReceived } from '../models/Message.model.js';
const api = 'https://henry-front-tech.vercel.app';
// const api = 'http://localhost:3000';
export const server = http.createServer(app);
const io = new SocketServer(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
    transports: ['polling', 'websocket'],
  },
  allowEIO3: true,
});

export const socketEvents = () => {
  io.on('connection', (socket) => {
    socket.on('@review/create', async (reviewData) => {
      try {
        const newReview = await Review.create(reviewData);
        const productDb = await Product.findByPk(reviewData.review_product_id, {
          include: { model: Review },
        });
        const newRating = Math.floor(
          productDb.reviews
            ?.map((review) => {
              return review.review_score;
            })
            .reduce((a, b) => a + b, 0) / productDb.reviews.length
        );

        productDb.update({ product_rating: newRating });
        io.emit('@review/create/successful', newReview);
      } catch (error) {
        io.emit('@review/create/error', { err: error });
      }
    });

    socket.on('@product/view', async (productId) => {
      try {
        const productDB = await Product.findByPk(productId);

        productDB.update({ product_views: ++productDB.product_views });
        console.log(
          'Producto con id',
          productId,
          'visto :',
          productDB.product_views,
          'veces'
        );
        io.emit(
          '@product/view/successful',
          `The product ${productDB.product_name} now has ${productDB.product_views} views`
        );
      } catch (error) {
        io.emit('@product/view/error', { err: error });
      }
    });
    socket.on('@client/post', async ({ msgPost, id }) => {
      console.log(msgPost);
      try {
        const msg = await MsgPost.create({
          msgpost_post: msgPost,
          userUserId: id,
        });
        io.emit('@server/post', msg);
      } catch (error) {
        console.log(error.message);
      }
    });
    socket.on('@client/received', async ({ msgreceived_post, id, idPost }) => {
      try {
        console.log(msgreceived_post, id, idPost);
        const msg = await MsgReceived.create({
          msgreceived_post,
          userUserId: id,
          msgpostMsgpostId: idPost,
        });
        // const msgPost = await MsgPost.findByPk(idPost);
        console.log(msg);
        // console.log(msgPost);
        // msg.addMsgPost(idPost);

        io.emit('@server/received', msg);
      } catch (error) {
        console.log(error.message);
      }
    });
  });
};
