// const express = require('express');
// const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
// const BookController= require("../controllers/bookController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)

// module.exports = router;



//-----------------------------------------> MONGODB ASSIGNMENT 2  <----------------------------------------------------


const express = require('express');
const router = express.Router();

const bookModel= require("../models/bookModel.js")
const bookController= require("../controllers/bookController.js")


router.post("/createBooks", bookController.createBooks)

router.get("/bookList", bookController.bookList)

router.post("/getBooksInYear", bookController. getBooksInYear)

router.post("/getParticularBooks", bookController.getParticularBooks)

router.get("/getXINRBooks", bookController.getXINRBooks)

router.get("/getRandomBooks", bookController.getRandomBooks)



module.exports= router;





