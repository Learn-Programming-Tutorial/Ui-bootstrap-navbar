var express = require('express'),
    app = express();

// Server is redirect to index.html page
app.use(express.static(__dirname + "/public"));
// Checking sever is working correctly


app.listen(5000);
console.log("Server is listening on port 5000");
