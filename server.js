

const express = require("express");
const path = require("path")
const bodyparser = require("body-parser");
const session = require("express-session")
const {v4:uuidv4}  = require("uuid")

const app = express();

const router= require("./router")


const port = process.env.PORT||3000;

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

app.set("view engine","ejs");

app.use("/static",express.static(path.join(__dirname,"public")));
app.use("/assets",express.static(path.join(__dirname,"public/assets")))

app.use(session({
    secret : uuidv4(),
    resave : false,
    saveUninitialized : true
}));

app.use("/route",router)

app.get("/", (req,res)=>{
    res.render("base",{title:"Login"});
})

router.get("/dashbord",(req,res)=>{
    if (req.session.user) {
        res.render("dashbord",{user:req.session.user})
    }else{
        res.send("Unauthorize User")
    }
})

app.listen(port,()=>{console.log("lostening to the server on http://localhost:3000")})