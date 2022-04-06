const express = require("express");
const homecontroller = require("../controllers/homecontroller");

module.exports = (app) => {
    const router = express.Router();

    router.post("/", homecontroller.create);

    router.put("/", homecontroller.update);

    router.delete("/:id", homecontroller.deleteOne);

    router.delete("/", homecontroller.deleteAll);

    router.get("/:id", homecontroller.findOne);

    router.get("/", homecontroller.findAll);

    app.use("/api/chat", router);
}

