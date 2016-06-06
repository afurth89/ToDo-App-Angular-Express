var express = require("express"),
    app = express(),
    morgan = require("morgan"),
    bodyParser = require("body-parser"),
    router = require('./routes');  // Express is really looking for './routes/index.js'


// express.static allows you to alias the file path
// to write shorthand in your views and directives
app.use("/js", express.static(__dirname + "/public/javascripts/"));
app.use("/stylesheets", express.static(__dirname + "/public/stylesheets/"));
app.use("/templates", express.static(__dirname + "/public/templates/"));

app.use(morgan("tiny"));

// Traditional views and forms send data in one format
  // body-parser expects it that way
// Angular passes

app.use(bodyParser.json({type:"application/json"}));


app.use("/todos", router.todos);

app.get("/", function(req,res){
    res.sendFile(__dirname + '/views/layout.html');
});

app.listen(3000, function(){
  console.log("Server is listening on port 3000");
});
