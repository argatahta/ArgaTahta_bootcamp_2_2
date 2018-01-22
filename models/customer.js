const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/propertidb');

const Schema = mongoose.Schema;

const customerSchema = new Schema({
    nama:String,
    alamat:String
});

const Customerdb = mongoose.model("customer", customerSchema);

module.exports = Customerdb