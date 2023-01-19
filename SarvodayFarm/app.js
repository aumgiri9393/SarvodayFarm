const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/",function(req,res){
  res.render("home");
});

app.get("/home",function(req,res){
res.render("home");
});

app.get("/contacts",function(req,res){
  res.render("contacts");
});

app.get("/aboutus",function(req,res){
  res.render("aboutus");
});

app.listen(3000,function(){
  console.log("Server started on port 3000")
});
