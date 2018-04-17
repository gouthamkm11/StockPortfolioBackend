var bodyparser = require('body-parser');
var request = require('request');
var async = require('async');
//var modelBanner1 = require('../model/banner1model');
var User = require('../model/userProfile.model');


//API EndPoints
module.exports = function(app){
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));
    //Get Logo, Current Price, Change percentage and change for selected symbol
    //Enter symbol in txt and submit as get method
    app.get('/api', function(req,res){
        let Symbol = req.query.txtAdd;
        var requests = [{
            url: `https://api.iextrading.com/1.0/stock/${Symbol}/price/`},{
          url: `https://api.iextrading.com/1.0/stock/${Symbol}/logo/`
        }]
        async.map(requests, function(obj, callback) {
            // iterator function
            request(obj, function(error, response, body) {
              if (!error && response.statusCode == 200) {
                // transform data here or pass it on
                var body = JSON.parse(body);
                callback(null, body);
              } else {
                callback(error || response.statusCode);
              }
            });
          }, function(err, results) {
            // all requests have been made
            if (err) {
              // handle your error
            } else {
                res.send(results);
            }
          });
    });

    //API to fetch OHLC data
    app.get('/api/ohlc/:symbol', function(req,res){
        var Symbol = req.params.symbol;
        request(`https://api.iextrading.com/1.0/stock/${Symbol}/ohlc`, function (error, response, body){
        var results = JSON.parse(body);
        res.send(results);
        });
    });

    //Api to fetch 1month chart data
    app.get('/api/chart/1month/:symbol', function(req,res){
        var Symbol = req.params.symbol;
        request(`https://api.iextrading.com/1.0/stock/${Symbol}/chart/1m`, function (error, response, body){
        var results = JSON.parse(body);
        res.send(results);
        });
    });

    //Api to fetch 3month chart data
    app.get('/api/chart/3month/:symbol', function(req,res){
        var Symbol = req.params.symbol;
        request(`https://api.iextrading.com/1.0/stock/${Symbol}/chart/3m`, function (error, response, body){
        var results = JSON.parse(body);
        res.send(results);
        });
    });

    //Api to fetch 1year chart data
    app.get('/api/chart/1year/:symbol', function(req,res){
        var Symbol = req.params.symbol;
        request(`https://api.iextrading.com/1.0/stock/${Symbol}/chart/1y`, function (error, response, body){
        var results = JSON.parse(body);
        res.send(results);
        });
    });

    //Api to fetch 5year chart data
    app.get('/api/chart/5year/:symbol', function(req,res){
        var Symbol = req.params.symbol;
        request(`https://api.iextrading.com/1.0/stock/${Symbol}/chart/5y`, function (error, response, body){
        var results = JSON.parse(body);
        res.send(results);
        });
    });

    ////Api to fetch all chart data
    app.get('/api/chart/ytd/:symbol', function(req,res){
        var Symbol = req.params.symbol;
        request(`https://api.iextrading.com/1.0/stock/${Symbol}/chart/ytd`, function (error, response, body){
        var results = JSON.parse(body);
        res.send(results);
        });
    });
}