var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var accountDetailsSchema = new Schema({
    portfolioValue:Number,
    buyingPower:Number
})


var accountDetails = mongoose.model('accountDetails', accountDetailsSchema);
module.exports = accountDetails;