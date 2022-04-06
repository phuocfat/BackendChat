const express = require("express");
const cors = require("cors");

const app = express();
const setupChatRouter = require("./routers/routes");
app.use(cors());
app.use(express.json());
setupChatRouter(app)
app.get("/", (req, res) => {
    res.json({ message: "Wellcome!" })
});
module.exports = app;