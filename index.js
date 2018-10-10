const express = require('express');
const socket = require('socket.io');

const app = express();

const port = process.env.PORT || 5000;


const server = app.listen(port, ()=> {
    console.log(`server is running on port ${port}`);
})

app.use(express.static('public'));

const io = socket(server);

io.on('connection', (socket)=> {
    console.log('made socket conection');

   socket.on('chat', (data)=> {
        
    io.sockets.emit('chat', data);
   })
})