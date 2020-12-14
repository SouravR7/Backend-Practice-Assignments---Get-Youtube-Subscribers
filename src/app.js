
const express = require('express');
const app = express()


// Your code goes here
const youtubeSubscriber = require('./models/subscribers');

app.use(express.json());
app.use(bodyParser.json());

app.get("/subscribers", (req,res)=>{

    youtubeSubscriber.find({}, (err, data) => {
        if(err){
            res.status(400).json({"message": error.message});
        }
        else{
            res.json(data);
        }
    });
})

app.get("/subscribers/:id", (req,res)=>{

    youtubeSubscriber.findOne({
        _id: id,
    }).then((err,data) => {
        if (err) {
            res.status(400).json({"message": error.message});
        } else{
            res.json(data);
        }
    });
});

app.get("/subscribers/:names", (req,res)=>{

    youtubeSubscriber.findOne({
        _name: name,
    }).then((err,data) => {
        if (err) {
            res.status(400).json({"message": error.message});
        } else{
            res.json(data);
        }
    });
});



module.exports = app;
