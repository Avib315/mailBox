const controller = require("../DL/Controller/user.controller")
const Utiles = {

}
// CRUD: 
// CREATE: User/Users V
// READ: User , Email V -5
// UPDATE: UserInfo , EmailStatus 
// DELETE: DeleteUser , DeleteEmail
const createUser = async (data) => {
    return await controller.create(data)
}

const getUser = async (filter, isPopulate) => {
    return await controller.readOn(filter, isPopulate)
}
const getManyUsers = async (filter, isPopulate) => {
    return await controller.read(filter, isPopulate)
}
const getUserEmails = async (userId, key) => {
    const user = await getUser(userId, true)
    if (key) {
        return user.emails.filter(email => email[key])
    }
    else {
        return user.emails
    }
}
const updateUserInfo = async (id, data) => {
    delete data._id
    return await controller.update(id, data);
}
const updateEmailStatus = async (userId, emailId, data) => {
    const user = await getUser({ _id: userId, emails: { $elemMatch: { email: emailId } } }, true)
    if (user) {
        user.emails[0] = { ...user.emails[0], ...data }
        return await user.save()
    }
    return null
}
const deleteUser = async (userId) => {
    return await controller.del(userId)
}
const DeleteEmail = async (userId, emailId) => {
    updateEmailStatus(userId, emailId, { isDeleted: true })
}

module.exports = { createUser, getUser, getUserEmails, getManyUsers, updateUserInfo, updateEmailStatus, deleteUser, DeleteEmail }