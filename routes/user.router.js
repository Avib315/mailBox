const express = require("express"),
    router = express.Router(),
    service = require("../BL/user.service")


router.post("/", async (req, res) => {
    res.send(await service.createUser(req.body))
})
router.get("/", async (req, res) => {
    res.send(await service.getUser())
})
router.get("/email", async (req, res) => {
    res.send("Hello World")
    // res.send(await service.getUser())
})
module.exports = router