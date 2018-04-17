var User = require('../model/userProfile.model');
var accountDetails = require('../model/accountDetails.model');
var stkOwned = require('../model/stocksOwned.model');
var stkWathclist = require('../model/stocksWatchlist.model');

module.exports = function(app){
    //this fetches data from users collection
    app.get('/userProfile/userDetails', (req,res)=>{
        User.findOne({'googleID':'101540347068775501457'},function(err,result){
            res.send(result);
        });
    });

    //this fetches data from accDetails collection
    app.get('userProfile/userAccDetails', (req,res) => {

    });

    //this fetches data from stkWatchlist collection
    app.get('userProfile/userWatchlistStocks', (req,res)=>{

    });

    //this fetches data from stkOwned collection
    app.get('userProfile/userOwnedStocks', (req,res)=>{

    });
}