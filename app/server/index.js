
import mongoose from 'mongoose';
import express from 'express';
import path from 'path';
import SocketIO from 'socket.io';

const app = express();
// env vars
process.env.MONGO_TRIBES_URI = process.env.MONGO_TRIBES_URI || 'mongodb://localhost/tribes';
process.env.PORT = process.env.PORT || 3000;

// connect our DB
mongoose.connect(process.env.MONGOLAB_URI);

//load parent directory (/app) as static resource
app.use('/', express.static(path.join(__dirname, '../..', 'static')));

const server = app.listen(process.env.PORT, function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('server listening on port: %s', process.env.PORT);
});

let io = new SocketIO(server, {path: '/api/chat'});
io.attach(server);
io.on('connection', function(socket){
    console.log("Socket connected: " + socket.id);
    socket.on('action', (action) => {
        if(action.type === 'server/hello'){
            console.log('Got hello data!', action.data);
            socket.emit('action', {type:'message', data:'good day!'});
        }
    });
});

//const socketEvents = require('./socketEvents')(io);

