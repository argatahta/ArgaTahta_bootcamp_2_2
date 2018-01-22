const express = require("express");
const customerdb = require("../models/customer");

const router = express.Router();

module.exports = function () {

    router.get("/", (req, res) => {

        customerdb.find({}, (error, result) => {
            if (error) {
                res.status(500).json(error);
            } else {
                res.json(result);
            }
        })
    })

    router.get("/:id", (req, res) => {
        customerdb.findById(req.params.id, (error, result) => {
            if (error) {
                res.status(500).json(error);
            } else {
                res.json(result);
            }
        })
    })

    router.post("/", (req, res) => {

        let newObj = new customerdb({
            nama: req.body.nama,
            alamat: req.body.alamat
        });

        newObj.save((error) => {
            if (error) {
                res.status(500).send(error);
            } else {
                res.json(newObj);
            }
        });

    });

    router.delete("/:id", (req, res) => {
        customerdb.findByIdAndRemove(req.params.id, (error) => {
            if (error) {
                res.status(500).send(error);
            } else {
                res.send({ message: "Data Deleted" })
            };
        });
    });

    router.put("/", (req, res) => {

        let newObj = {
            nama: req.body.nama,
            alamat: req.body.alamat
        };

        customerdb.findByIdAndUpdate(req.body._id, newObj, (error, result) => {
            if (error) {
                res.status(500).json(error);
            } else {
                res.json(result);
            };
        });
    });

    return router;
};
