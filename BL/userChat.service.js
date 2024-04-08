const userChatController = require('../DL/Controller/userChat.controller')
const userService = require('./user.service')
const { Flags } = require('../utility')

const getByFlags = async (userId, flags, poplate = { chats: true, users: true }) => {
    let chats = await userChatController.readByFlags(userId, flags, poplate);
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

module.exports = { updateChatsStatus, getByFlags }