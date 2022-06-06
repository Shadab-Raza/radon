// const express = require('express');
// const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// module.exports = router;


/* -------------------------> Revision <--------------------------------------*/

// const express = require ('express');
// const router = express.Router();
// const UserModel = require ("../models/userModel.js");
// const UserController= require("../controllers/userController")


// router.get("/test-me", function(req, res){
//     res.send("My first ever api!")
// })

// router.post("/createUser", async function (req, res){
//     let data = req.body
//     let saveData = await UserModel.create(data)
//     res.send({msg : saveData})
// })

// router.get("/getUserData", async function(req, res){
//     let allUsers = await UserModel.find()
//     res.send({msg: allUsers})
// })


// router.post("/createUser", UserController.createUser  )
// router.get("/getUsersData", UserController.getUsersData)


// module.exports = router;




/* ------------------------------------------> ASSIGNMENT <-----------------------------------------------*/

const express = require('express');
const router = express.Router();

const UserModel = require ("../models/userModel.js");
const UserController= require("../controllers/userController")

router.post("/createBooks", UserController.createBook)
router.get("/getBookData", UserController.getBookData)

module.exports = router;