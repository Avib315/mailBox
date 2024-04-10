const userController = require('./controller/user.controller');
const chatController = require('./controller/chat.controller.js');
const userChatController = require('./controller/userChat.controller');
const userChatService = require('../BL/userChat.service');
const chatModel = require("../DL/models/chat.model.js");
const userModel = require('../DL/models/user.model.js');
require('dotenv').config()
require("./db.js").connect()

console.log(`\x1b[44m [db.js] test start \x1b[0m`)

// async function test() {
//    const u = await userChatController.readByCheatId(cheatId)
//    console.log(u);
// }
async function test2() {
    const userId = "6616d4ebfeb2a84fe1ce6271"
    const cheatId = "6616d4ecfeb2a84fe1ce6285"
    const u = await userChatController.updateChatReadStatus(userId, cheatId, true)
    console.log(u);
}

test2()