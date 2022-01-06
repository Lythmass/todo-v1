const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");


const itemValues = [];
const workItems = [];


const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


app.get("/", function(req, res) {
     res.render("list", {listTitle: date.getDate(), newListItems: itemValues});
});


app.get("/work", function(req, res) {
     res.render("list", {listTitle: "Work List", newListItems: workItems});
});


app.get("/about", function(req, res) {
     res.render("about");
});


app.post("/", function(req, res) {
     const itemValue = req.body.newItem;
     if(req.body.button == "Work") {
          workItems.push(itemValue);
          res.redirect("/work");
     } else {
          itemValues.push(itemValue);
          res.redirect("/");
     }
});


app.listen(3000, function() {
     console.log("The server is running on port 3000");
});
