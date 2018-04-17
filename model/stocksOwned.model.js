var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var stkownedSchema = new Schema({
    googleID: String,
    stocks: []
})


var stkOwned = mongoose.model('ownedStocks', stkownedSchema);
module.exports = stkOwned;