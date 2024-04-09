const controller = require("../DL/controller/user.controller")
const Utiles = {

}

const createUser = async (data) => {
    return await controller.create(data)
}

const getUser = async (filter, isPopulate) => {
    return await controller.readOn(filter, isPopulate)
}
const getManyUsers = async (filter, isPopulate) => {
    return await controller.read(filter, isPopulate)
}

const updateUserInfo = async (id, data) => {
    delete data._id
    return await controller.update(id, data);
}
 
const deleteUser = async (userId) => {
    return await controller.del(userId)
}


module.exports = { createUser, getUser, getManyUsers, updateUserInfo, deleteUser }