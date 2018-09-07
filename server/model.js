const goose = require("mongoose");


goose.connect("mongodb://localhost:27017/QuotingDojo", {useNewUrlParser: true},(errs)=> console.log(errs?errs:"db Quoting Dojo"));

const QDoojo = new goose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [2, "yo give a larger name"]
    },
    Quote:{
        type:String,
        required:true,
        minlength : [10, "Got your Quote"]
    }
},{timestamps:true});

const Dojo = goose.model('cats', QDoojo);

module.exports = Dojo;