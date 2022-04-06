const create = (req, res) => {
    res.send({ message: "create handler!!!" });
};
const update = (req, res) => {
    res.send({ message: "update handler!!!" });
}
const deleteOne = (req, res) => {
    res.send({ message: "deleteOne handler!!!" });
}
const deleteAll = (req, res) => {
    res.send({ message: "deleteAll handler!!!" })
}
const findOne = (req, res) => {
    res.send({ message: "findOne handler!!!" });
}
const findAll = (req, res) => {
    res.send({ message: "findAll handler!!!" });
}
module.exports = {
    create: create,
    update: update,
    deleteOne: deleteOne,
    deleteAll: deleteAll,
    findOne: findOne,
    findAll: findAll
}