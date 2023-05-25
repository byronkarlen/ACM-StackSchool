const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
mongoose.set('strictQuery', false);

const app = express(); 
app.use(express.json());
app.use(cors());

connection = "mongodb+srv://wbkarlen:dexter@app.dalfctw.mongodb.net/?retryWrites=true&w=majority";
mongoose
    .connect(connection,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => console.log("Connected to DB"))
    .catch(console.error)

app.listen(8080, () => console.log('Server listening on port 8080')); 

//import models for the schemas
const Post = require("./models/Post"); 
const User = require("./models/User");
const { json } = require('express');

// Posts
app.get('/feed', async (req, res) => {
    const feed = await Post.find().sort({ timestamp: -1 });
    res.json(feed);
});

app.post('/feed/new', async (req, res) => {
    const post = new Post({
        content: req.body.content,
        user: req.body.user,
        num_likes: 0,
        timestamp: Date.now()
    });
    await post.save();

    res.json(post);
});

app.put('/feed/edit/:_id', async (req, res) => {
    const post = await Post.findById(req.params._id);
    post.content = req.body.content;
    post.save();
    res.json(post);
});

app.delete('/feed/delete/:_id', async (req, res) => {
    try {
        console.log('id of document to be deleted:', req.params._id);
        const result = await Post.findOneAndDelete({ _id: req.params._id });
        console.log('Deleted User:', result);
        res.json(result);
    } 
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred while deleting the document' });
    }
});


app.put('/feed/like/:_id', async (req, res) => {
    const post = await Post.findById(req.params._id);
    post.num_likes++;
    await post.save();
    res.json(post);
});


// Users
app.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

app.post('/users/new', async (req,res) =>{
    // Check for an already existing user
    const duplicateUser = await User.findOne({ username: req.body.username });
    if (duplicateUser){
        res.json({ 'error': 'Duplicate username exists '});
        return;
    }

    const user = new User({
        username: req.body.username,
        password: req.body.password
    }); 

    await user.save();
    res.json(user);
});

app.delete('/users/delete/:_id', async (req,res) =>{
    try {
        console.log('id of document to be deleted:', req.params._id);
        const result = await User.findOneAndDelete({ _id: req.params._id });
        console.log('Deleted User:', result);
        res.json(result);
    } 
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred while deleting the document' });
    }
});

app.put('/users/edit/:_id', async (req, res) => {
    const user = await User.findById(req.params._id);

    user.username = req.body.username;
    user.password = req.body.password;
    
    await user.save();
    res.json(user);
});

app.post('/login', async (req, res) => {
    const user = await User.findOne({ username: req.body.username });
    if(!user){
        res.json({ 'error': 'Username does not exist' });
        return;
    }
    if(user.password === req.body.password){
        res.json(user);
    }
    else {
        res.json({ 'error': 'Incorrect passwrord'});
    }
});