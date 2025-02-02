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
}

connectDB();

async function connectUser(){
    dbtl = await client.db("reactdb").collection("tblusers");
}

async function connectProd(){
    dbtl = await client.db("reactdb").collection("tblproducts");
    //console.log(dbtl);
}

async function connectCategories(){
    dbtl = await client.db("reactdb").collection("tblcategories");
}

app.get("/getusers", async (req, res) => {
    await connectUser();

    var data = await dbtl.find({}).toArray();
    console.log(data);
    
    res.send(data);
});


app.post("/registeruser", async (req,res)=>{
    connectUser();
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

app.get("/getproducts", async (req, res) => {
    await connectProd();

    let productData = await dbtl.find({}).toArray();
    console.log(productData);

    res.send(productData);
});


app.get("/getproduct/:id", async (req, res) => {
    await connectProd();

    let productId = parseInt(req.params.id)
    let productData = await dbtl.find({id:productId}).toArray();
    console.log(productData);

    res.send(productData);
});

app.get("/getcategories", async (req, res)=>{
    await connectCategories();
    let categoryData = await dbtl.find({}).toArray();

    res.send(categoryData)
});



app.listen(5000, () => {
    console.log("Server started : http://127.0.0.1:5000");
});
