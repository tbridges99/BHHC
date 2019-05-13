var mongoose = require('mongoose');

//Schema for a Mongodb bson document representing the reasons
//I would like to work at Berkshire Hathaway
var reasonSchema = mongoose.Schema({
    //Reasons stored as an array of strings
    reasons: [String]
});

//Export model as a constant to be used in other js files that require mongoose
const Reasons = module.exports = mongoose.model('Reasons', reasonSchema);

module.exports.addReason = function(newReason, callback) {
    //Query for reason document, since there is only one document in the database in this Project no matter what
    //the search just searches for any document matching the schema
    const query = {reasons: {$exists: true}};

    //Find and update the document found by the query to the database
    //Push updates the array and appends the new reason to the appends
    //New flag ensures the returned object is the updated one and upsert creates an array of one object if empty
    Reasons.findOneAndUpdate(query, {$push: {reasons: newReason.reason}},{new: true, upsert: true}, callback);
}

module.exports.getReasons = function(callback){
    const query = {reasons: {$exists: true}};

    //Search database for object and return the result
    Reasons.findOne(query, callback);
}
