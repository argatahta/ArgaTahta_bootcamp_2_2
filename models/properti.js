const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/propertidb');

const Schema = mongoose.Schema;

const propertiSchema = new Schema({
    alamat :String,
    luasBangunan : String,
    luasTanah: String,
    harga:String
});

const Propertidb = mongoose.model("properti", propertiSchema);

module.exports = Propertidb