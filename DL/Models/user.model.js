const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    fullName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        select: false
    },
    isActive:Boolean,
    avatar: String,
    emails: [{

        email: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "email"
        },
        isSent: Boolean,
        isRecieved: Boolean,
        isFavorite: Boolean,
        isDeleted: Boolean
    }
    ],

})

const userModel = mongoose.model('user', userSchema)

module.exports = userModel

