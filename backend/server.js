const express = require('express');
const mongoose = require('mongoose');
connection = "mongodb+srv://wbkarlen:dexter@app.dalfctw.mongodb.net/?retryWrites=true&w=majority";

mongoose.set('strictQuery', false);

mongoose
    .connect(connection,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => console.log("Connected to DB"))
    .catch(console.error)


const app = express(); 
app.use(express.json());

app.listen(8080, () => console.log('Sever listening on port 8080')); 
const Post = require("./models/Post"); //import Schema

app.get('/feed', async (req, res) => {
    const feed = await Post.find();
    res.json(feed);
});

app.post('/feed/new', (req, res) => {
    const post = new Post({
        content: req.body.content,
        user: req.body.user,
        timestamp: Date.now()
    });
});
post.save();

// const newPost = new Post({
//     content: "1st Post!!!",
//     user: "Byron",
//     timestamp: Date.now()
// });
// newPost.save(); //saves the collection with the updated value