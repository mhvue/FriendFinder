var friendsDataJS = require("../data/friends.js");

// Your `apiRoutes.js` file should contain two routes:
module.exports = function (app){
//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
app.get("/api/friends", function(req, res){
    // console.log("hello. I work")
    return res.json(friendsDataJS);

    //this will display all possible friends 
});

//  * A POST routes `/api/friends`. This will be used to handle incoming survey results. 
app.post("/api/friends", function(req, res) {
    // var surveyAns = req.body; //when having just this, it will work and be added the api list.. (as long as we the below code too)
    
        //make an empty array to put the suvey answers into this empty array and compared to the rest to do the math 
    var surveyAns= {
        name: req.body.name,
        photo: req.body.photo,
        scores: req.body.scores
    }

    // console.log(surveyAns);

    var userAnsArr =[];
    for(var i = 0; i < surveyAns.scores.length; i++){
        userAnsArr.push(parseInt(surveyAns.scores[i]));

    }
    console.log(userAnsArr)

    // This route will also be used to handle the compatibility logic.
    friendsDataJS.push(surveyAns);
    console.log(surveyAns);
    res.json(surveyAns);

});

};
