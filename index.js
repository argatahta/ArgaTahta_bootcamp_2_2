const express = require("express");
const bodyParser = require("body-parser");

const propertiRoutes = require("./routes/properti");
const customerRoutes = require("./routes/customer");
const peminatRoutes = require("./routes/peminat");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/properti", propertiRoutes());
app.use("/api/customer", customerRoutes());
app.use("/api/peminat", peminatRoutes());

app.listen(4000, ()=>{
    console.log("connected");
});