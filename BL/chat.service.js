const userController = require('../DL/Controller/user.controller')
const userChatController = require('../DL/Controller/userChat.controller')
    const { Flags } = require('../utility')

async function getInbox(userId) {
    let { chats } = await userChatController.readByFlags(userId, [Flags.Inbox], { chats: true, users: true });
    return chats
}
async function getFavorite(userId) {
    let { chats } = await userChatController.readByFlags(userId, [Flags.Favorite], { chats: true, users: true });
    return chats
}

module.exports = { getInbox }



