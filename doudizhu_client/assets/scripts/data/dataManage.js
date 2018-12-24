import playerData from './playerData'
const dataManage = function(){
    let that = {};
    that.playerData = playerData();
    return that;
}
export default dataManage;