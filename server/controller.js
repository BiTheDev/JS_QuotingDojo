module.exports = {
    home: home,
    Quotes: AllQuotes,
    Quotify: makeQuote
}

const Dojo = require("./model.js");

function home(req,res){
    console.log("hit root route");
    res.render("index");
}

function AllQuotes(req,res){
    console.log("hit quote route");
    Dojo.find({}, function(errs, data){
        if(errs){
            console.log(errs);
        }
        res.render("result", {data : data.reverse()});
    })
};

function makeQuote(req,res){
    console.log("making Quotes");
    console.log(req.body);
    Dojo.create(req.body, (errs, results)=>{
        if(errs){
            console.log("you sucks!");
            console.log(errs);
        }else{
            console.log(results);
        }
        res.redirect("/result");
    })
}