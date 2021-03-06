var friendsDataJS = require("../data/friends.js");

// Your `apiRoutes.js` file should contain two routes:
module.exports = function (app){
//    * A GET route with the url `/api/friends`. 
app.get("/api/friends", function(req, res){
    return res.json(friendsDataJS);
});

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });

//  * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
app.post("/api/friends", function(req, res) {  
    var surveyAns= {
        name: req.body.name,
        photo: req.body.photo,
        scores: req.body.scores
    }

    //loop to parse all the scores so need to set it equal to surveyAns.scores[i] 
    for(var i = 0; i < surveyAns.scores.length; i++){
       surveyAns.scores[i]= parseInt(surveyAns.scores[i]);
    }
    
    var lowestIndex = -1; 
    var lowestScore = 51;
     
    // loop to get the scores array from FriendsData  
    for(var j = 0; j < friendsDataJS.length; j++){
       var friendsScore = 0;
        // console.log(friendsDataJS[j].scores);
        //need this loop b/c we need to access each individual friendsData.scores value from their array 
        for(var k = 0; k < friendsDataJS[j].scores.length; k++){ 
            // console.log(friendsDataJS[j].scores[k]); 
            //then  will take our survey scores and subtract it from the friendsData scores array, one at a time, use Math.abs to make it an absolute val
           var diff =  Math.abs(surveyAns.scores[k] - friendsDataJS[j].scores[k]);
        //    console.log(diff);
            friendsScore = friendsScore + diff;
        }

        if(friendsScore < lowestScore) {
            lowestIndex = j;
            lowestScore = friendsScore;
        }
        // console.log(friendsDataJS[j].name + "=" + friendsScore)
    }

    friendsDataJS.push(surveyAns);
    res.json(friendsDataJS[lowestIndex])

});

};
