const userController = require('./Controller/user.controller')
const chatController = require('./Controller/chat.controller')
const userChatController = require('./Controller/userChat.controller')
const userChatService = require('../BL/userChat.service')

console.log(`\x1b[44m [db.js] test start \x1b[0m`)


async function connect() {
    require('./db').connect()
    require('dotenv').config()
}
async function test (){
    connect()
}