
const { object } = require("webidl-conversions")
const moment=require('moment')



const logger=async function(req,res){
    res.send({msg: "Hey!! Middle Ware Runs Successfully"})
   
}

const myMid1=async function (req,res,next){
    const today=moment();
    console.log(today.format());
    next()
}

const myMid2=async function (req, res, next) {
    console.log(req.ip)
    next();
}

const myMid3=async function (req,res,next){
    console.log(req.path)
    next();
}



module.exports.logger = logger

module.exports.myMid1 = myMid1
module.exports.myMid2 = myMid2
module.exports.myMid3 = myMid3