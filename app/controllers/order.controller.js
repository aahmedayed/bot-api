const db = require("../models");
const Order = db.order;
// Create and Save a new Tutorial
exports.create = (req, res) => {
    res.send({ text: "Creat Work" });
};
// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    res.send({ text: "findAll Work" });
};
// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    res.send({ text: "Creat Work" });
};
// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    res.send({ text: "Creat Work" });
};
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    res.send({ text: "Creat Work" });
};
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    res.send({text: "Creat Work"});
};
// Find all published Tutorials
exports.findAllPublished = (req, res) => {
    res.send({text: "Creat Work"});
};