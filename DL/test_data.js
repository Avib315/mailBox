const userController = require('./controller/user.controller')
const chatController = require('./controller/chat.controller')
const userChatController = require('./controller/userChat.controller')
const userChatService = require('../BL/userChat.service')
require('dotenv').config()
require("./db.js").connect()

console.log(`\x1b[44m [db.js] test start \x1b[0m`)

async function test() {
   const cheatId = "6613d0b43817d926fb939cf6"
   const u = await userChatController.readByCheatId(cheatId)
   console.log(u);
}
async function test2() {
   const userId = "6613d0b33817d926fb939ceb"
   const u = await userChatController.readByFlags(userId)
   console.log(u);
}
test2()