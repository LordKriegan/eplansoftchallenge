// requirements
const express = require("express");
const path = require("path");

//middleware
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
//express setup
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(fileUpload())
//routes
app.use("/api", require("./routes/api.js"));
app.use(express.static(path.join(__dirname, "client")));


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
})



