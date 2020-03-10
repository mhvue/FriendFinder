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
    // var surveyAns= req.body;
    //make an empty array to put the suvey answers into this empty array and compared to the rest to do the math 
    var surveyAns= {
        name: req.body.name,
        photo: req.body.photo,
        scores: req.body.scores
    }

    //loop to parse all the scores
    for(var i = 0; i < surveyAns.scores.length; i++){
       surveyAns.scores[i]= parseInt(surveyAns.scores[i]);
    //    console.log(surveyAns.scores[i]);
    }
    

    // loop to get the scores one at a time from FriendsData
    for(var j = 0; j < friendsDataJS.length; j++){
        console.log(friendsDataJS[j].scores);
        for(var k = 0; k < friendsDataJS[j].scores.length; k++){
           var diff =  Math.abs(surveyAns.scores[k] - friendsDataJS[j].scores[k]);
           console.log(diff);
        }

    }

    
    // This route will also be used to handle the compatibility logic.
    friendsDataJS.push(surveyAns);
    // console.log(surveyAns);
    res.json(surveyAns);

});

};
