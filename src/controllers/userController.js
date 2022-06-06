// const UserModel= require("../models/userModel")

// const createUser= async function (req, res) {
//     let data= req.body
//     let savedData= await UserModel.create(data)
//     res.send({msg: savedData})
// }

// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
// }

// module.exports.createUser= createUser
// module.exports.getUsersData= getUsersData





/* -------------------------> Revision <--------------------------------------*/

// const UserModel = require("../models/userModel")

// const createUser= async function (req, res) {
//         let data= req.body
//         let savedData= await UserModel.create(data)
//         res.send({msg: savedData})
//     }
    
//     const getUsersData= async function (req, res) {
//         let allUsers= await UserModel.find()
//         res.send({msg: allUsers})
//     }
    
//     module.exports.createUser= createUser
//     module.exports.getUsersData= getUsersData



/* ------------------------------------------> ASSIGNMENT <-----------------------------------------------*/

const UserModel = require("../models/userModel")

const createBook = async function (req, res){
    let data= req.body
    let saveData= await UserModel.create(data)
    res.send({msg: saveData})
}

const getBookData = async function (req, res){
    let allUserBook = await UserModel.find()
    res.send({msg: allUserBook})
}

module.exports.createBook = createBook
module.exports.getBookData = getBookData