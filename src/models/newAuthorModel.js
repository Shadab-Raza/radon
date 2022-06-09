const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const authorSchema = new mongoose.Schema( {
    
    author_name: String,
    age:Number,
    address:String,
    rating: Number

}, { timestamps: true });

module.exports = mongoose.model('Myauthor', authorSchema) 