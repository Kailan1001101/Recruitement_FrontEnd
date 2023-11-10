
var express = require("express");
var path = require("path");
var routes = require("./routes");

var app = express();

app.set("port", process.env.Port || 3001);

app.set("Welcome", path.join(__dirname, "Welcome/Welcome.ejs"));
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname + '/public')))

app.use(routes)

app.listen(app.get("port"), function () {
    console.log("Server started on port :" + app.get("port"));
});

