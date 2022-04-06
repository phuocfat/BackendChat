const express = require("express");
const cors = require("cors");

const { BadRequestError, errorHandler } = require("./error");
const app = express();
const setupChatRouter = require("./routers/routes");

app.use(cors());
app.use(express.json());
setupChatRouter(app);

app.use((req, res, next) => {

    next(new BadRequestError(404, "Resource not found"));
});

app.use((err, req, res, next) => {
    errorHandler.handleError(error, res);
});
app.get("/", (req, res) => {
    res.json({ message: "Wellcome!" })
});
module.exports = app;