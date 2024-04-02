const auth = async (req, res, next) => {
    try {
        let token = req.header.autherisation?.split("Bearer ")[0]
        let user = {_id:"343redasdas" , email:"avi@gmail.com"}//jwt.verify(token)
        req.body.user = user;
        next()
    } catch (error) {
        res.sendStatus(401)
    }

}
module.exports = {auth}