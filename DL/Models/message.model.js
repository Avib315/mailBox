const mongoose = require("mongoose")

const messageSchema = new mongoose.Schema({
    content:  String ,
    subject:String,
    to: [{
        type: String,
        required: true
    }],
    from: {
        type: String,
        required: true
    },
})

const messageModel = mongoose.model('message', messageSchema)

module.exports = messageModel

