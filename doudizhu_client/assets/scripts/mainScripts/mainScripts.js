import global from './../global'
cc.Class({
    extends: cc.Component,

    properties: {
       
    },

   

    onLoad: function() {
        global.socket.init();
    },

    wxLoginButton(event , LoginData){
        console.log("LoginData: " + LoginData);
        switch(LoginData){
            case 'login':
                global.socket.login(
                    global.dataManage.playerData.uniqueID,
                    global.dataManage.playerData.nickName,
                    global.dataManage.playerData.avatarUrl, function(err, data){
                        if(err){
                            console.log('login err = '+err)
                        }else{
                            console.log('login data = ' + JSON.stringify(data));
                        }
                    });
                break;
            default:
                break;
        }
    }
  
});
