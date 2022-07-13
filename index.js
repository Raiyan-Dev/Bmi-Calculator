const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})
app.post("/", function(req, res){
    var number1 = Number(req.body.num1);
    var number2 = Number(req.body.num2);
    var result = number1 + number2;
    res.send("The result of these two numbers is: " +result);
})

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
})
app.post("/bmicalculator", function(req, res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var result = weight/(height*height);
    res.send("The BMI is: " +result + " kg/m^2");
})

app.listen(3000, function(){
    console.log("Server started at PORT: 3000");
})