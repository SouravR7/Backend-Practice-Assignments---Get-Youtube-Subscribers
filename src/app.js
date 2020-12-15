
const express = require('express');
const app = express();
app.use(express.json());


// Your code goes here
const youtubeSubscriber = require('./models/subscribers');

//const ObjectId = require("mongoose");


// Your code goes here
app.get('/subscribers', (req, res) => {
    youtubeSubscriber.find().then(subscribers => res.send(subscribers))
    .catch(error => res.send(error));
    return;
});


app.get('/subscribers/names', (req, res) => {
    youtubeSubscriber.find().select({name: 1, subscribedChannel: 1})
        .then(subscribers => res.send(subscribers));
    return;
});


app.get('/subscribers/:id', (req, res) => {
    const id = req.params.id;
    youtubeSubscriber.find({_id : id}).then(subscribers => subscribers.map(subscribers => res.send(subscribers)))
        .catch(error => res.status(400).send({message: error.message}));
    return;
});


module.exports = app;
