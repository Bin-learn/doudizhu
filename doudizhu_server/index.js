const socket = require('socket.io');
const app = socket('3000');
app.on('connection', function (socket) {
    console.log('a user conneted');
    socket.emit('w', 'hhhhhhhhhhhhhhhhhhhhhhh');
    socket.on('login',function(data){
        console.log('login data = ' + JSON.stringify(data))
    })
});
console.log('listen to 3000');