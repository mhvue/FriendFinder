// Your `apiRoutes.js` file should contain two routes:
module.exports = function (app){
//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
app.get("/api/friends", function(req, res){
    console.log("hello. I work")
    // return res.json(friendsData);
});

//  * A POST routes `/api/friends`. This will be used to handle incoming survey results. 
app.post("/api/friends", function(req, res) {
    var newData = req.body;
    console.log(newData);
    res.json(newData)
    // return res.json(survResults);
});

};
// This route will also be used to handle the compatibility logic.
