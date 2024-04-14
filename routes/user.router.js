const express = require("express"),
    router = express.Router(),
    service = require("../BL/user.service")


router.post("/register", async (req, res) => {
    res.send(await service.createUser(req.body))
})
router.get("/", async (req, res) => {
    res.send(await service.getUser())
})
router.post("/login", async (req, res) => {
    const isLogin = await service.login(req.body)
    res.send(isLogin).status(200)
    // res.send(await service.getUser())
})
module.exports = router