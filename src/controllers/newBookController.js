const newAuthorModel = require("../models/newAuthorModel")
const newBookModel= require("../models/newBookModel")
const newPublisherModel = require("../models/newPublisherModel")


const createBook= async function (req, res) {
    // for author
    let book = req.body
    let authorId = req.body.author_id
    let publisherId = req.body.publisher_id

    if(!authorId){
        res.send({Error: "Please enter author Id"})
    }

const authorInfo= await newAuthorModel.findById(authorId)
    if (!authorInfo){
        res.send({Error: "Please enter a valid Author ID"})
    }

    //for publisher
    if(!publisherId){
        res.send({Error: "Please enter publisher ID"})
    }
const publisherInfo = await newPublisherModel.findById(publisherId)
    if(!publisherInfo){
        res.send({Error: "Please enter a valid publisher ID"})
    }
let bookCreated = await newBookModel.create(book)
res.send({data: bookCreated})
    
}


// Q.No--> 04
const getAllData = async function(req, res){
let details = await newBookModel.find().populate('author_id').populate('publisher_id')
res.send({data: details})
}



// Q.No--> 05
const update = async function(req, res){
    let a = req.params.id1
    let b = req.params.id2

    let m = await newBookModel.updateMany({_id: a}, {
        $set: {
            isHardCover: true
        }
    },{new:true})
    res.send({msg: m})
}



module.exports.createBook= createBook
module.exports.getAllData = getAllData
module.exports.update = update


