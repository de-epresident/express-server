const express = require ("express");
const app = express();
const port = process .env.port || 5000

const path = require('path')
const friends = require('./model/friendsList');

app.use(express.json()),
app.use(express.urlencoded({extended: false}));

app.get('/friendsList', (req,res)=>{
    res.json(friends)
})

//create a new friend
app.post('/friends', (req,res) =>{
console.log(req.body)
    const newFriends ={
        id: friends.length + 1,
        name: req.body.name,
        age: req.body.age,
        phone: req.body.phone
    }
    friends.push(newFriends);
    res.json(friends)
})


app.listen(port, ()=> {
    console.log(`server listening on port http://127.0.0.1:${port}`)
})
