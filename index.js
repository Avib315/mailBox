const express = require("express"),
    app = express(),
    CORS = require("cors"),
    PORT = 3001
require("dotenv").config()
require("./DL/db.js").connect()

app.use(CORS());
app.use(express.json());
app.use("/email", require("./routes/chat.router.js"));
app.use("/user", require("./routes/user.router.js"));
app.use("/userchats", require("./routes/userChat.router.js"));
app.listen(PORT, () => {
    console.log(`\x1b[42m [index.js] server is runing in port ${PORT} \x1b[0m`);
})
