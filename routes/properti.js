const express = require("express");
const propertidb = require("../models/properti");
const bodyParser = require("body-parser");

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

module.exports = function () {

    router.get("/", (req, res) => {

        propertidb.find({}, (error, result) => {
            if (error) {
                res.status(500).json(error);
            } else {
                res.json(result);
            }
        })
    })

    router.get("/:id", (req, res) => {
        propertidb.findById(req.params.id, (error, result) => {
            if (error) {
                res.status(500).json(error);
            } else {
                res.json(result);
            }
        })
    })

    router.post("/", (req, res) => {

        let newObj = new propertidb({
            alamat: req.body.alamat,
            luasBangunan: req.body.luasBangunan,
            luasTanah: req.body.luasTanah,
            harga: req.body.harga
        });

        console.log(newObj +"tes")

        newObj.save((error) => {
            if (error) {
                res.status(500).send(error);
            } else {
                res.json(newObj);
            }
        });

    });

    router.delete("/:id", (req, res) => {
        propertidb.findByIdAndRemove(req.params.id, (error) => {
            if (error) {
                res.status(500).send(error);
            } else {
                res.send({ message: "Data Deleted" })
            };
        });
    });

    router.put("/", (req, res) => {

        let newObj = {
            alamat: req.body.alamat,
            luasBangunan: req.body.luasBangunan,
            luasTanah: req.body.luasTanah,
            harga: req.body.harga
        };

        propertidb.findByIdAndUpdate(req.body._id, newObj, (error, result) => {
            if (error) {
                res.status(500).json(error);
            } else {
                res.json(result);
            };
        });
    });

    return router;
};
