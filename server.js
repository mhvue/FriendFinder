// Your `server.js` file should require the basic npm packages we've used in class: `express` and `path`.
//we connecton to our server and routes
var express = require("express");
var path = require("path");
var app = express();
var PORT= process.env.PORT||3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);


app.listen(PORT, function(){
    console.log("connected to PORT: " + PORT )
});