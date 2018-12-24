import SocketController from './data/SocketController'
import dataManage from './data/dataManage'
const global = {};
global.socket = SocketController();
global.dataManage = dataManage();
export default global;