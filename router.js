var express = require("express")
var router = express.Router();

const credential =  {
    email : "admin@gamil.com",
    password : "123"
}

router.post("/login",(req,res)=>{
    if(req.body.email == credential.email  && req.body.password == credential.password){
        req.session.user  = req.body.email
        res.redirect("/route/dashbord")
        //res.end("Ok")
    }else{
        res.end("invalid user")
    }
})

router.get("/logout",(req,res)=>{
    req.session.destroy(function(err){
        if (err) {
            console.log("error")
        }else{
            res.render("base",{title:"Express",logout:"logout Successfully"})
        }
    })
})

module.exports = router;