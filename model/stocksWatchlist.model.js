var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var stkwatchlistSchema = new Schema({
    googleID: String,
    stocks: []
})


var stkWatchlist = mongoose.model('watchlistStocks', stkwatchlistSchema);
module.exports = stkWatchlist;