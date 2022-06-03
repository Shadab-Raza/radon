const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')
const lodash = require('lodash')

const router = express.Router();

// router.get('/test-me', function (req, res) {
//     myHelper.printDate()
//     myHelper.getCurrentMonth()
//     myHelper.getCohortData()
//     let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
//     console.log('The first element received from underscope function is '+firstElement)
//     res.send('My first ever api!')
// });

// router.get('/hello', function (req, res) {
   
//     res.send('Hello there!')
// });

// router.get('/candidates', function(req, res){
//     console.log('Query paramters for this request are '+JSON.stringify(req.query))
//     let gender = req.query.gender
//     let state = req.query.state
//     let district = req.query.district
//     console.log('State is '+state)
//     console.log('Gender is '+gender)
//     console.log('District is '+district)
//     let candidates = ['Akash','Suman']
//     res.send(candidates)
// })

// router.get('/candidates/:canidatesName', function(req, res){
//     console.log('The request objects is '+ JSON.stringify(req.params))
//     console.log('Candidates name is '+req.params.canidatesName)
//     res.send('Done')
// })


// NODE MODULE ASSIGNMENT NO-4

router.get('/hello1',function (req, res){
    let a = lodash.chunk(["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"],3);
    console.log(a);
    res.send('Month')
});

router.get('/hello12',function (req, res){
    let b = lodash.tail([1,2,5,7,9,11,13,15,17,19])
    console.log(b);
    res.send('Odd Number')
});

router.get('/hello123',function (req, res){
    let c = lodash.union([1,2],[2,3],[3,4],[4,5,6],[6,7,8,9]);
    console.log(c);
    res.send('Merged Array')
});

router.get('/hello1234',function (req, res){
    let d = lodash.fromPairs([["horror","The Shining"],["drama","Titanic"],["thrillar","Shutter Island"],["fantasy","pans Labyrinth"]])
    console.log(d);
    res.send('Key Value Pair')
});



// Pritesh Sir API Building

router.get('/sol1',function (req, res){
    let a = [1,2,3,5,6,7], count = a[a.length - 1];
    let missing = [];
    for (let i = 1; i<= count; i++){
        if (a.indexOf(i) == -1){
            missing.push(i);;
        }
    }
    console.log("The Missing Number is: ",missing.toString());
    res.send('Missing No. Finded')
});

router.get('/sol2',function (req, res){
    let a = [33,34,35,37,38], count = a[a.length - 1];
    let missing = [];
    for (let i = 33; i<= count; i++){
        if (a.indexOf(i) == -1){
            missing.push(i);;
        }
    }
    console.log("The Missing Number is: ",missing.toString());
    res.send('Missing No. Finded')
});



// QUERY AND PARA (API BUILDING) ASSIGNMENT

//Q.No- 1
router.get('/movies', function(req, res){
    let movies = ["'Rang de basanti','The shining','Lord of the ring','Batman begins'"]
    console.log(movies)
    res.send('List of movies')
})

//Q.No- 2
router.get('/movies/:index', function (req, res) {
    let movies = ["Rang de basant", "The shining", "Lord of the rings", "Batman begins"]
    console.log("Movie name is " + movies[req.params.index])
    res.send(movies[req.params.index])
})

//Q.No- 3
router.get('/video/:index', function (req, res) {
    let video = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]

    if (req.params.index < video.length) {
        console.log("Movie name is " + video[req.params.index])
    } else {
        console.log("Please enter the valid index value " + (video[req.params.index] = " "))
    }

    res.send(video[req.params.index])
})

// Q.No- 4
router.get('/films', function(req, res){
    let a= [ 
        {id: 1, name: "The Shining"},
        {id: 2, name: "Incendies"},
        {id: 3, name: "Rang De Basanti"},
        {id: 4, name: "Finding Nemo"}]

        console.log(a)
        res.send(a)
})

// Q.No- 5
router.get('/films/:indexNumber', function (req, res) {
    
    let films = [{ "id": 1, "name": "The Shining" }, { "id": 2, "name": "Incendies" }, { "id": 3, "name": "Rang de Basanti" }, { "id": 4, "name": "Finding Nemo" }]
   
    let movieIndex = req.params.indexNumber;
    let finalMovie = " ";
    if (movieIndex < films.length){
        finalMovie = films[movieIndex];
    } else {
        finalMovie = ("The movie with indexno. doesnot exist")
    }
    console.log(films.length)
    console.log('The request object is' + JSON.stringify(req.params))
    console.log('Movies name is' + req.params.moviesName)
    res.send(finalMovie)

})


// Q.N0- 5 (with id)
router.get('/films/:filmId', function (req, res) {
    
    let films = [{ "id": 1, "name": "The Shining" }, { "id": 2, "name": "Incendies" }, { "id": 3, "name": "Rang de Basanti" }, { "id": 4, "name": "Finding Nemo" }]
    if (req.params.filmId <= films.length){
        console.log("The Movie is: " + films[req.params.filmId])
    }else{
        console.log("No movie exist with this id")
    }
    res.send(films[req.params.filmId])

})


module.exports = router;
// adding this comment for no reason