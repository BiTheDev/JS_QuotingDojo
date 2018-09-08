// const xp = require("express");
// const flash = require('express-flash');
// const app = xp();
// app.use(flash());
const moment = require("moment");
module.exports = {
    home: home,
    Quotes: AllQuotes,
    Quotify: makeQuote
}

const Dojo = require("./model.js");

function home(req,res){
    console.log("hit root route");
    // var msg = req.flash("registration");
    
    res.render("index");
}

function AllQuotes(req,res){
    console.log("hit quote route");
    Dojo.find({}, function(errs, data){
        if(errs){
            console.log(errs);
        }
        res.render("result", {data : data.reverse(), moment :moment});
    })
};

function makeQuote(req,res){
    console.log("making Quotes");
    var quote = req.body;
    console.log(quote);
    Dojo.create(quote, (errs, results)=>{
        if(errs){
            console.log("you sucks!");
            console.log(errs);
            for(var key in errs.errors){
                console.log(errs.errors[key].message);   
                req.flash("registration", errs.errors[key].message);
            }
            res.redirect('/');
        }else{
            console.log(results);
            res.redirect("/result");
        }
    })
}