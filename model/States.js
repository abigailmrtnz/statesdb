const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//stateCode schema data requirement
const StatesSchema = new Schema({
    stateCode: {
        type: String, 
        required: true,
        unique: true
    },
    funfacts: [String] 
    
});

module.exports = mongoose.model('State', StatesSchema);