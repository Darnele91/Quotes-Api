var express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

var quotes = [
{
    id: 1,
    quote: "The best is yet to come",
    author: "Unknown",
    year: 2000
},
{
    id: 2,
    quote: "This is a quote",
    author: "First Last",
    year: 1930
},
{
    id: 3,
    quote: "This is another quote",
    author: "First2 Last2",
    year: 1910
}
];


app.post('/quotes', function(req, res){
  console.log("Insert a new quote: " + req.body.quote);
  res.json(req.body);
});

app.get('/quotes', function(req, res){
    console.log("Get a list of all quotes as json");

    if(req.query.year){
      res.send("Return a list of quotes from the year: " + req.query.year);
    }
    else{
        res.json(quotes);
    }
});

app.get('/quotes/:id', function(req, res){
    console.log("return quote with the ID: " + req.params.id);
    res.send("Return quote with the ID: " + req.params.id);
});

app.get("/", function(req,res){
  res.send("Get request received at '/'");
})

app.listen(3000, function(){
  console.log("Hello from the other side");
});
