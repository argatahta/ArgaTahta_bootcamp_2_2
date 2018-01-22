const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/propertidb');

const Schema = mongoose.Schema;

const peminatSchema = new Schema({
    id_properti:String,
    id_customer:String
});

const Peminatdb = mongoose.model("peminat", peminatSchema);

module.exports = Peminatdb