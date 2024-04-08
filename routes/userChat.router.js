const express = require("express"),
    router = express.Router(),
    service = require("../BL/userChat.service")
router.post("/getchats", async (req, res) => {
    const userId = "6613d0b33817d926fb939ce9"
    const { flags, poplate } = req.body
    const userInbox = await service.getByFlags(userId, flags, poplate)

    res.send(userInbox)
})

module.exports = router