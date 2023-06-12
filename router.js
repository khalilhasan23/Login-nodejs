var express = require("express")
var router = express.Router();

const credential =  {
    email : "admin@gamil.com",
    password : "123"
}

router.post("/login",(req,res)=>{
    if(req.body.email == credential.email  && req.body.password == credential.password){
        req.session.user  = req.body.email
        //res.redirect("/dashbord")
        res.end("Ok")
    }else{
        res.end("invalid user")
    }
})

module.exports = router;