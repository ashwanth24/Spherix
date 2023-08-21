const router = require("express").Router();
const User = require("../models/User")
const  bcrypt = require("bcrypt");
const req = require("express/lib/request");
//register
router.post("/register",async (req,res)=>{
    try{
        //hashing
        const salt = await bcrypt.genSalt();
        const hashedpassword = await bcrypt.hash(req.body.password, salt);
        
        //register
        const newUser = await new User({
            username :req.body.username,
            email:req.body.email,
            password:hashedpassword
        })
        //save
        const user = await newUser.save();
        res.status(200).json(user);
    }catch(err){
        console.log(err)
    }

   
})

//login
router.post('/login',async  (req,res)=>{
    try{
        const user = await User.findOne({email: req.body.email});
    !user && res.status(404).json("user not found")

    const validpassword = await bcrypt.compare(req.body.password, user.password)
    !validpassword && res.status(400).json("invalid password")

    res.status(200).json(user)
    }catch(err){
        res.status(500).json(err)
    }
})


module.exports = router;  