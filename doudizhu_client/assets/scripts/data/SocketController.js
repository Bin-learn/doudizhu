import defines from './../defines'
const SocketController = function(){
    let that = {};
    let _socket = undefined;
    that.init =function(){
        _socket = io(defines.serverUrl);
    }
    that.login = function(uniqueID, nickName, avatar, cb){
        _socket.emit('login', {
            uniqueID: uniqueID,
            nickName: nickName,
            avatar: avatar
        });
    }
    return that;
}

export default SocketController;