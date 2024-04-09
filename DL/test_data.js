const userController = require('./controller/user.controller')
const chatController = require('./controller/chat.controller')
const userChatController = require('./controller/userChat.controller')
const userChatService = require('../BL/userChat.service')
require('dotenv').config()
require("./db.js").connect()

console.log(`\x1b[44m [db.js] test start \x1b[0m`)

async function test() {
   const u = await userChatController.readByCheatId("6613d0b43817d926fb939cf6")
   console.log(u);
}
test()