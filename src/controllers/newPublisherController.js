const newPublisherModel = require("../models/newPublisherModel")

const createPublisher= async function (req, res) {
    let publisher = req.body
    let publisherCreated = await newPublisherModel.create(publisher)
    res.send({data: publisherCreated})
}



module.exports.createPublisher= createPublisher
