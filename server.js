var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");


app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.use(express.static("public"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
require("./routes/api-routes.js")(app);

// Server Listening
db.sequelize.sync({
  force: true
}).then(function () {
  app.listen(PORT, function () {
    console.log("Server listening on: http://localhost: " + PORT);
  });
});