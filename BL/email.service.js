const emailController = require("../DL/Controller/email.controller"),
    messageController = require("../DL/Controller/message.controller")
const Utiles = {

}
const getAllRecieved = async () => {
    return await emailController.read({}, true)
}
const addNewMessageToEmail = async (emailId, msg) => {
    let msgDB = await messageController.create(msg)
    let email = await emailController.readOne({ _id: emailId })
    email.msg.push(msgDB._id)
    return await email.save()

}
module.exports = { getAllRecieved, addNewMessageToEmail }