const express = require('express');
const router = express.Router();

const newAuthorController= require("../controllers/newAuthorController")

const newBookController= require("../controllers/newBookController")

const newPublisherController= require("../controllers/newPublisherController")



router.post("/createAuthor", newAuthorController.createAuthor)

router.post("/createPublisher", newPublisherController.createPublisher)

router.post("/createBook", newBookController.createBook)

router.get("/getAllData",newBookController.getAllData)

router.put("/update",newBookController.update)



module.exports = router;