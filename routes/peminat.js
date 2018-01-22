const express = require("express");
const peminatdb = require("../models/peminat");

const router = express.Router();

module.exports = function () {

    router.get("/", (req, res) => {

        peminatdb.find({}, (error, result) => {
            if (error) {
                res.status(500).json(error);
            } else {
                res.json(result);
            }
        })
    })

    router.get("/:id", (req, res) => {
        peminatdb.findById(req.params.id, (error, result) => {
            if (error) {
                res.status(500).json(error);
            } else {
                res.json(result);
            }
        })
    })

    router.post("/", (req, res) => {

        let newObj = new peminatdb({
            id_properti: req.body.id_properti,
            id_customer: req.body.id_properti
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
        peminatdb.findByIdAndRemove(req.params.id, (error) => {
            if (error) {
                res.status(500).send(error);
            } else {
                res.send({ message: "Data Deleted" })
            };
        });
    });

    router.put("/", (req, res) => {

        let newObj = {
            id_properti: req.body.id_properti,
            id_customer: req.body.id_properti
        };

        peminatdb.findByIdAndUpdate(req.body._id, newObj, (error, result) => {
            if (error) {
                res.status(500).json(error);
            } else {
                res.json(result);
            };
        });
    });

    return router;
};
