// const BookSchema= require("../models/bookSchema.js");
// const AuthorSchema= require("../models/authorSchema.js");

// let createAuthor = async function(req, res) {
//     let data= req.body
//     let saveData= await AuthorSchema.create(data)
//     res.send({msg: saveData})
// }


// let createBook = async function(req, res) {
//     let data= req.body
//     let saveData= await BookSchema.create(data)
//     res.send({msg: saveData})
// }



// // let authorOfBook = async function (req, res){
// //     let data = await bookSchema.findOneAndUpdate({name:"Two states"},{$set:{prices:100}},{new:true})
// //     let authorData = await authorSchema.find({author_id: data.author_id}).select("author_name")
// //     let price= data.prices
// //     res.send({msg: authorData,price})
// // }



// // let getBooksByChetanBhagat = async function(req, res){
// //     let data = await AuthorSchema.find({author_name:"Chetan Bhagat"}).select("author_id")
// //     let bookData = await BookSchema.find({author_id: data[0].author_id})
// //     res.send({msg: bookData})
// // }


// // let authorOfBook = async function (req, res){
// //     let data = await BookSchema.find({name:"Two states"}).select("author_id")
// //     let authorData = await AuthorSchema.find({author_id: data[0].author_id})
// //     res.send({msg: authorData})
// // }



// const getBooksbyChetanBhagat= async function (req, res) {
//     let data= await AuthorSchema.find({author_name:"Chetan Bhagat"}).select("author_id")
//     let bookData = await BookSchema.find({author_id:data[0].author_id})
//   res.send({msg:bookData})
// }


// const authorofBook= async function (req, res){
//   let data=await BookSchema.findOneAndUpdate({name:"Two states"},{$set:{price:100}},{new:true})
//   let authorData=await AuthorSchema.find({author_id:data.author_id}.select("author_name"))
//   let prices= data.price
     
//      res.send( { msg: authorData,prices})
// }






// module.exports.createAuthor = createAuthor
// module.exports.createBook = createBook
// module.exports.getBooksbyChetanBhagat = getBooksbyChetanBhagat
// module.exports.authorofBook = authorofBook




//----------------------------------------------------->Remake<------------------------------------------------


const bookModels= require("../models/bookModels")
const authorModel= require("../models/authorModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await bookModels.create(data)
    return res.send({msg: savedData})
}


const createAuthor= async function (req, res) {
    let data= req.body

    let savedData= await authorModel.create(data)
    return res.send({msg: savedData})
}

const allBooks = async function (req, res) {
    let savedData = await authorModel.find({author_name : "chetan bhagat" })
    const id = savedData[0].author_id
    const bookName = await bookModels.find({author_id : id }).select({name : 1, _id: 0})
    return res.send({msg: bookName})
}   

const updateBookPrice = async function (req, res) {
    let bookDetail = await bookModels.find({name: "two states"})
    let id = bookDetail[0].author_id
    let authorN = await authorModel.find({author_id : id}).select({author_name:1, _id:0 })

    const bkName = bookDetail[0].name
    const updatedPrice = await bookModels.findOneAndUpdate({name:bkName}, {price:100}, {new:true}).select({price:1, _id:0})
    return res.send({msg: authorN, updatedPrice})
}

const authorsName = async function (req, res) {
    const booksId= await bookModels.find({price: {$gte:50, $lte:100}}).select({author_id:1, _id:0})
    const id = booksId.map(inp => inp.author_id)
    // console.log(id);

    let temp = []
    for (let i=0; i<id.length; i++) {
        let x = id [i]
        const author = await authorModel.find({author_id : x}).select({author_name:1, _id:0})
        temp.push(author)
    }
    // console.log(temp);
    const authorName = temp.flat()
    // console.log(authorName);
    return res.send({msg: authorName})
}


module.exports.createBook= createBook
module.exports.createAuthor= createAuthor
module.exports.allBooks= allBooks
module.exports.updateBookPrice= updateBookPrice
module.exports.authorsName= authorsName
