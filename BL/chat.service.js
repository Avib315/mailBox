const chatController = require('../DL/Controller/chat.controller')

const creatChat = async () => {

}
const getChat = async (filter, isPopulate) => {
    return chatController.read(filter, isPopulate);
}
const getManyChats = async (filter) => {
    return chatController.read(filter);

}
const updateChats = async () => {

}


module.exports = { creatChat, getChat, getManyChats, updateChats }



