const userChatController = require('../DL/Controller/userChat.controller')
const userService = require('./user.service')
const { Flags } = require('../utility')
const getInbox = async (userId)=> {
    let { chats } = await userChatController.readByFlags(userId, [Flags.Inbox], { chats: true, users: true });
    return chats
}
const getFavorite = async (userId) => {
    let { chats } = await userChatController.readByFlags(userId, [Flags.Favorite], { chats: true, users: true });
    return chats
}
const getDeleted = async (userId) => {
    let { chats } = await userChatController.readByFlags(userId, [Flags.deleted], { chats: true, users: true });
    return chats
}
const updateChatsStatus = async (userId, chatId, data) => {
    const user = await userService.getUser({ _id: userId, emails: { $elemMatch: { chat: chatId } } }, true)
    if (user) {
        user.chats[0] = { ...user.chats[0], ...data }
        return await user.save()
    }
    return null
}
const deleteEmail = async (userId, emailId) => {
    updateEmailStatus(userId, emailId, { isDeleted: true })
}
module.exports = { getFavorite, getInbox, deleteEmail, updateChatsStatus, getDeleted }