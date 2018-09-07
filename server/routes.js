const {home, Quotes, Quotify} = require("./controller.js");

function router(app)
{
    app.get("/", home);
    
    app.get("/result", Quotes);
    
    app.post("/makeQuote", Quotify);

}

module.exports = router;