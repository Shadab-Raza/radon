const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author_id: {
        type: ObjectId,
        ref: "Myauthor",
    },

    price: Number,
    ratings: Number,

   
    publisher_id:{
        type: ObjectId,
        ref: "Mypublisher"
    },


}, { timestamps: true });


module.exports = mongoose.model('Mybook', bookSchema)
