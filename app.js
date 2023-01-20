//jshint esversion:6
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const session = require('express-session');
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate');

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(session({
  secret: "Our little secret.",
  resave: false,
  saveUninitialized: false
}));



app.get("/", function(req, res){
  res.render("home");
});



app.get("/auth/google/secrets",
 
  function(req, res) {
    // Successful authentication, redirect to secrets.
    res.redirect("/secrets");
  });

app.get("/login", function(req, res){
  res.render("login");
});

app.get("/register", function(req, res){
  res.render("register");
});



app.get("/submit", function(req, res){
  
    res.render("submit");
  
});



//Once the user is authenticated and their session gets saved, their user details are saved to req.user.
  // console.log(req.user.id);



app.get("/logout", function(req, res){
  req.logout();
  res.redirect("/");
});

app.post("/register", function(req, res){

  
      res.redirect("/register");
    

});

app.post("/login", function(req, res){

 
  res.render("secrets");

});







app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
