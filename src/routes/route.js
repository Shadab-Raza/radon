const express = require('express');
 //const externalModule = require('../logger/logger')
 // const dateModule = require('../util/helper')
  const caseModule = ('../validator/formatter')

const router = express.Router();

router.get('/test-me', function (req, res) {
    
     //externalModule.welcome()
    // dateModule.printDate()
    // dateModule.printMonth()
    // dateModule.getBatchInfo()
     caseModule.trim()
     caseModule.changeToLowerCase()
     caseModule.changeToUpperCase()
     res.send('Welcome to my application. I am Md Shadab Raza and a part of FunctionUp Radon cohort')
});
module.exports = router;
// adding this comment for no reason