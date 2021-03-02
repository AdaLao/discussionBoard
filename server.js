const express = require("express");
const MongoClient = require("mongodb").MongoClient;
var {ObjectID} = require("mongodb").ObjectID;
const app = express();

app.use(express.static('style'));
app.set('views',__dirname+'/views'); 
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));

var message_db = null;
var connect_mongo = function(){
    MongoClient.connect("mongodb://localhost:27017/msg_db", (err, db) => 
    {
        if (err)
        { 
            console.error("connect mongo error:" + err);
            setTimeout(()=>
            {
                connect_mongo();
            }, 
            10000);
        }
        message_db = db.db("msg_db");
    });
}
connect_mongo();

var display_nothing = function(res)
{
    res.render(`index`);
}

var display_msg = function(res)
{
    message_db.collection("msgs").find().sort({_id: -1}).toArray((err, result) => 
    {
        if (err)
        {
            display_nothing(res);
            connect_mongo();
            return;
        }
        res.render(`index`,
        {
            msgs: result
        });
    });
}

app.get("/",(req,res)=>
{
    display_msg(res);
});

app.post("/msg", (req,res) => 
{
 /* if (req.body.name.length < 3)     //in ejs, use required, so not need to use this.
    {
        display_msg(res);
        return;
    }
    if (/^[a-zA-Z]+$/.test(req.body.name)=== false) 
    {
        display_msg(res);
        return;
    } */
    let obj =
    {
        name: req.body.name,
        message: req.body.message,
        comments: []
    };
    message_db.collection("msgs").insertOne(obj, function(err, mongo_res) 
    {
        if (err)
        {
            connect_mongo();
            display_msg(res);
            return;
        }
        display_msg(res);
    });
});

app.post("/comment", (req,res) => 
{
 /* if (req.body.name.length < 3)    //in ejs, use required, so not need to use this.
    {
        display_msg(res);
        return;
   }
    if (/^[a-zA-Z]+$/.test(req.body.name)=== false) 
    {
        display_msg(res);
        return;
    } */
    let query_obj = 
    {
        "_id": ObjectID(req.body.ident)
    }
    message_db.collection("msgs").findOne(query_obj, (err, result)=>
    {
        if (err)
        {
            connect_mongo();
            display_msg(res);
            return;
        }
        if (null === result)
        {
            display_msg(res);
            return;
        }
        let comment = 
        {
            name: req.body.name,
            comment: req.body.comment
        };
        result.comments.push(comment);
        var newvalues = { $set: {comments: result.comments}};
        message_db.collection("msgs").updateOne(query_obj, newvalues, (err, mongo_res) => 
        {
            if (err)
            {
                connect_mongo();
                display_msg(res);
                return;
            }
            display_msg(res);
        });
    });
});

app.listen(8000,()=>console.log("listening on port 8000"))




