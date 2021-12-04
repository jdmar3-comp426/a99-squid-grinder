var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");
mongoose.connect("mongodb+srv://new-user-0:testpassword@cluster0.horro.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

var HTTP_PORT = 3000;



const server = app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT))
});

app.use(
    cors({
        origin: "https://a99-squid-grinder.duncanmills1.repl.co",
        credientials: true
    })
);

app.use(express.json());
app.use(express.urlencoded({extended: false}));

let userSchema = mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true}
});

let interactionSchema = mongoose.Schema({
    username: {type: String, required: true},
    num: Number,
    loginHistory: [String]
});

let User = mongoose.model("User", userSchema);
let Inter = mongoose.model("Inter", interactionSchema);

app.post("/api/newuser", (req, res) => {
    let inputUsername = req.body.username;
    let inputPassword = req.body.password;
    let inputConfrim = req.body.confirmpass;
    User.findOne({username: inputUsername}, (err, data) => {
        if (!err && data == undefined) {
            User.findOneAndUpdate({username: inputUsername}, {password: inputPassword}, {new: true, upsert: true}, (err, data) => {
                if (!err) return
            });
        }
    })
    Inter.findOne({username: inputUsername}, (err, data) => {
        if (!err && data == undefined) {
            Inter.findOneAndUpdate({username: inputUsername}, {num: 0, loginHistory: new Date()}, {new: true, upsert: true}, (err, data) => {
                if (!err) {
                    res.redirect("/clicker");
                };
            });
        };
    });
});