const chatModel = require('../models/chat.model')

// CRUD
const create = async (data) => {
    return await chatModel.create(data)
}
const read = async (filter, isPopulate) => {
    return await chatModel.find(filter).populate(isPopulate && { path: "msg.from" ,select:"fullName avatar"})
}
const readOne = async (filter) => {
    return await chatModel.findOne(filter)
}
const update = async (id, newMsg) => {
    const data = await readOne({_id:id})
    data?.msg?.push(newMsg)
    return await chatModel.findByIdAndUpdate(id, data, { new: true })
}
const del = async (id) => {
    return await update(id, { isActive: false })
}

module.exports = { create, read, readOne, update, del }