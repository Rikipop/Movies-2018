var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var mongoDB = 'mongodb://ruth:ruthie1@ds131997.mlab.com:31997/ruth'; //ruth
//var mongoDB = 'mongodb://admin:admin123@ds026018.mlab.com:26018/mongomovie'; //movie
//var mongoDB = 'mongodb://admin:hello123@ds239903.mlab.com:39903/lab5'; //martin
mongoose.connect(mongoDB);// { useNewUrlParser: true }, () =>
//{
    //console.log("DB is connected")
//});

var Schema = mongoose.Schema;

// Shemea section
var movieSchema = new Schema({
    title: String,
    director: String,
    star: String,
    thumbnail: String,
    trailerUrl: String,
    content: String,
    rating: String,
    like: String
})
var MovieModel = mongoose.model('Movie', movieSchema);

var reviewSchema = new Schema({
    title: String,
    content: String
})
var ReviewModel = mongoose.model('Review', reviewSchema);


//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// for root and api ---------------------------------

app.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Authorization, Content-Length, Content-Type, X-Requested-With, Accept');
    next();
});

app.get('/', function (req, res) {
   res.send('Hello from Express');
})

app.get('/api', function(req, res){
    res.send("API works")
})

// for movies ---------------------------------

app.get('/api/movies', function(req, res){
    MovieModel.find(function(err, data){
        res.json(data);
    });
})

app.post('/api/movies', function(req, res){
    console.log("post successful");
    console.log(req.body.title);
    console.log(req.body.director);
    console.log(req.body.star);
    console.log(req.body.thumbnail);
    console.log(req.body.trailerUrl);
    console.log(req.body.content);
    console.log(req.body.rating);
    console.log(req.body.like);

    MovieModel.create({
        title: req.body.title,
        director: req.body.director,
        star: req.body.star,
        thumbnail: req.body.thumbnail,
        trailerUrl: req.body.trailerUrl,
        content: req.body.content,
        rating: req.body.rating,
        like: req.body.like
    });
    res.send('Item added');
})

app.get('/api/movies/:id', function(req, res){
    console.log("Read movie " +req.params.id);

    MovieModel.findById(req.params.id,
        function (err, data) {
            res.json(data);
        });
})

app.put('/api/movies/:id', function(req, res){
    console.log("Update movie" +req.params.id);
    console.log(req.body.title);
    console.log(req.body.director);
    console.log(req.body.star);
    console.log(req.body.thumbnail);
    console.log(req.body.trailerUrl);
    console.log(req.body.content);
    console.log(req.body.rating);
    console.log(req.body.like);

    MovieModel.findByIdAndUpdate(req.params.id, req.body,
        function(err, data){
            res.send(data);
        })
})

app.delete('/api/movies/:id', function(req, res){
    console.log(req.params.id);

    MovieModel.deleteOne({_id:req.params.id},
    function(err, data)
    {
        if(err)
            res.send(err);
        res.send(data);
    })
})

// for reviews ---------------------------------

app.get('/api/reviews', function(req, res){
    ReviewModel.find(function(err, data){
        res.json(data);
    });
})

app.post('/api/reviews', function(req, res){
    console.log("post successful");
    console.log(req.body.title);
    console.log(req.body.content);

    ReviewModel.create({
        title: req.body.title,
        content: req.body.content
    });
    res.send('Item added');
})

app.get('/api/reviews/:id', function(req, res){
    console.log("Read review " +req.params.id);

    ReviewModel.findById(req.params.id,
        function (err, data) {
            res.json(data);
        });
})

app.put('/api/reviews/:id', function(req, res){
    console.log("Update review" +req.params.id);
    console.log(req.body.title);
    console.log(req.body.content);

    ReviewModel.findByIdAndUpdate(req.params.id, req.body,
        function(err, data){
            res.send(data);
        })
})

app.delete('/api/reviews/:id', function(req, res){
    console.log(req.params.id);

    ReviewModel.deleteOne({_id:req.params.id},
    function(err, data)
    {
        if(err)
            res.send(err);
        res.send(data);
    })
})

// server connection listener

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Movie app listening at http://%s:%s", host, port)
})
