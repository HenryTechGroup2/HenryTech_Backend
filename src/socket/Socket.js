import { Server as SocketServer} from 'socket.io';
import App from '../app.js';
import http from 'http';
import Review from '../models/Review.model.js';

const server = http.createServer(app);
const io = new SocketServer(server, {
    cors: {
        origin: 'http://localhost:3000',
    }
});

io.on('connection', (socket) => {

    socket.on('@review/create', async (reviewData) => {
        try {
            const newReview = await Review.create(...reviewData);
            io.emit(newReview);
        } catch (error) {
            io.emit({err: error});
        }
    })
});