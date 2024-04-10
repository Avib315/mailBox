const express = require("express"),
    router = express.Router(),
    service = require("../BL/userChat.service")

router.post("/getchats", async (req, res) => {
    const userId = "6616d4ebfeb2a84fe1ce6271"
    const { flags, poplate, input } = req.body
    const userInbox = await service.getByFlags(userId, flags, poplate, input)
    res.send(userInbox)
})
router.post("/getchatsbyid", async (req, res) => {
    const { chatId } = req.body;
    const cheat = await service.getChatsById(chatId)
    res.send(cheat)
})
module.exports = router 