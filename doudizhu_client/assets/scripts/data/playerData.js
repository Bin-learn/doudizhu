let playerData = function(){
    let that = {};
    that.uid = undefined;
    that.nickName = '小明';
    that.avatarUrl = 'http://img3.imgtn.bdimg.com/it/u=4097272080,532187029&fm=11&gp=0.jpg';
    that.uniqueID = 1000;
    for(let i=0; i<7; i++){
        that.uniqueID += Math.floor(Math.random() * 10);
    } 

    that.wxLoginSuccess = function(data){
        that.uniqueID = data.uniqueID;
        that.nickName = data.nickName;
        that.avatarUrl = data.avatarUrl;
    }

    that.loginSuccess = function(data){
        console.log('data='+ JSON.stringify(data));
    }
    return that;
}

export default playerData;