const express = require('express'),
    router = express.Router();

const chatService = require('../BL/chat.service')
const { auth } = require('../middlewares/auth')

router.get('/', async (req, res) => {
    try {
        let result = await chatService.getInbox()
        res.send(result)
    }
    catch (err) {
        res.status(400).send(err.msg || err.message || "wrong")
    }

})
router.post('/:chatId', async (req, res) => {
    try {
        let result = await chatService.addNewMessageTochat(req.params.chatId, req.body)
        res.send(result)
    }
    catch (err) {
        res.status(400).send(err.msg || err.message || "wrong")
    }

})



module.exports = router;