var friendsDataJS = require("../data/friends.js");
console.log(friendsDataJS);
// Your `apiRoutes.js` file should contain two routes:
module.exports = function (app){
//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
app.get("/api/friends", function(req, res){
    // console.log("hello. I work")
    return res.json(friendsDataJS);
});

//  * A POST routes `/api/friends`. This will be used to handle incoming survey results. 
app.post("/api/friends", function(req, res) {
    var surveyRes = req.body;
    
    // This route will also be used to handle the compatibility logic.

    console.log(surveyRes);
    res.json(surveyRes);

});

};
