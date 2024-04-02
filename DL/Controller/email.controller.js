const emailModel = require("../Models/email.model");

// CRUD
async function create(data) {
    return await emailModel.create(data)
}
async function read(filter,isPopulate) {
    return await emailModel.find(filter).populate(isPopulate ? 'msg' :'')
}
async function readOne(filter) {
    return await emailModel.findOne(filter)
}
async function update(id, data) {
    return await emailModel.findByIdAndUpdate(id, data, { new: true })
}
async function del(id) {
    return await update(id, { isActive: false })
}


module.exports = { create, read, readOne, update, del }