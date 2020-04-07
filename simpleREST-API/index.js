var express = require("express");

var app = express();

app.listen(3000, () => {
    console.log("Server running on port 3000")
});

app.get("/url", (request, response, next) => {
    response.json({
        "name": "simple NodeJS API",
        "language": "javascript",
        "IDE": "VS Code"
    })
});