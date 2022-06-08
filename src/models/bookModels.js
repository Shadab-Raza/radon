// const mongoose = require("mongoose")

// const bookSchema = new mongoose.Schema({
//     name:{
//         type: String,
//     },
//     author_id: {
//         type: Number,
//         required: true
//     },
//     prices: Number,
//     ratings: Number
// },{timestamps: true});


// module.exports = mongoose.model('Book_2', bookSchema)



//-------------------------------------------->Remake<------------------------------

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    name: String,
    author_id : {
        type : Number,
        required: true
    }, 
    price: Number, 
    ratings: Number
 
}, { timestamps: true });


module.exports = mongoose.model('Book1', bookSchema) 
