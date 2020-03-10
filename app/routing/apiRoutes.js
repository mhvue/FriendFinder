var friendsDataJS = require("../data/friends.js");

// Your `apiRoutes.js` file should contain two routes:
module.exports = function (app){
//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
app.get("/api/friends", function(req, res){
    // console.log("hello. I work")
    return res.json(friendsDataJS);

    //this will display all possible friends 
});

//  * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
app.post("/api/friends", function(req, res) {  
    //make an empty array to put the suvey answers into this empty array and compared to the rest to do the math 
    var surveyAns= {
        name: req.body.name,
        photo: req.body.photo,
        scores: req.body.scores
    }

    //loop to parse all the scores so need surveyAns.scores[i] 
    for(var i = 0; i < surveyAns.scores.length; i++){
       surveyAns.scores[i]= parseInt(surveyAns.scores[i]);
    //    console.log(surveyAns.scores[i]);
    }
    

    // loop to get the scores array from FriendsData  
    for(var j = 0; j < friendsDataJS.length; j++){
        // console.log(friendsDataJS[j].scores);
        //need this loop b/c we need to access each individual friendsData.scores value from their array 
        for(var k = 0; k < friendsDataJS[j].scores.length; k++){ 
            // console.log(friendsDataJS[j].scores[k]); 
            //then  will take our survey scores and subtract it from the friendsData scores array, one at a time, use Math.abs to make it an absolute val
           var diff =  Math.abs(surveyAns.scores[k] - friendsDataJS[j].scores[k]);
           console.log(diff);
        }

    }

    //need if/else statement to get the match 

    friendsDataJS.push(surveyAns);
    // console.log(surveyAns);
    res.json(surveyAns);

});

};
