var express = require("express");
var cors = require("cors");
var mongoClient = require("mongodb").MongoClient;
var connectionString = "mongodb://127.0.0.1:27017/";


var app = express();
app.use(cors());
app.use(express.urlencoded({
    extended:true
}));

app.use(express.json());
var client;
var dbtl;
async function connectDB(){
    client = await mongoClient.connect(connectionString);
    
    dbtl = await client.db("reactdb").collection("tblusers");

}

connectDB();

app.get("/getusers", async (req, res) => {

    var data = await dbtl.find({}).toArray();
    console.log(data);
    
    res.send(data);
});

app.post("/registeruser", async (req,res)=>{
    var userdetails = {
        UserId: req.body.UserId,
        UserName: req.body.UserName,
        Password: req.body.Password,
        Age: parseInt(req.body.Age),
        Mobile: req.body.Mobile,
        Subscribed: (req.body.Subscribed == "true")? true:false
    }

    await dbtl.insertOne(userdetails, (err, result)=>{
        if(!err){
            console.log("Record Inserted");
            res.redirect("/getusers");
            res.statusMessage("Inserted successfully");
            res.statusCode(200);
        }
    })
})

app.listen(5000, () => {
    console.log("Server started : http://127.0.0.1:5000");
});
