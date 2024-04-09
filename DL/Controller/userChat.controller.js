const userModel = require('../models/user.model');
const chatModel = require("../models/chat.model")
async function readByFlags(id, flags = [], populate = {}) {

    let data = await userModel.findOne({ _id: id, isActive: true })
    if (!data) return []
    data.chats = data.chats.filter(c => flags.every(f => {
        if (typeof f === 'object') {
            let [[k, v]] = Object.entries(f)
            return c[k] == v
        }
        return c[f]
    }))
    if (populate.chats) data = await data.populate('chats.chat')
    if (populate.users) data = await data.populate({ path: 'chats.chat.members', select: "fullName avatar" })
    return data.toObject()
}
async function readByCheatId(id) {
    const data = await chatModel.findOne({ _id: id }).select("-members");
    return data;
}
module.exports = { readByFlags, readByCheatId }