const mongoose = require("mongoose")
require("./message.model")

const emailSchema = new mongoose.Schema({
    subject: String,
    msg: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref:"message"
        }
    ],
    lastDate: Date,
    isRead: {
        type: Boolean,
        default: false
    }

})

const emailModel = mongoose.model('email', emailSchema)

module.exports = emailModel