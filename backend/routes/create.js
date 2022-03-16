const router = require("express").Router();
const User = require("../models/User")
const bcrypt = require('bcrypt');

// create new user
router.post("/register", async(req,res)=>{
    try{
        const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(req.body.password, salt)
        const newUser = newUser({
      first_name : req.body.first_name,
      Last_name : req.body.Last_name,
      age:req.body.age,
     email : req.body.email,
      password: hashedPass,
      Phone:req.body.phone

  })
    const user = await newUser.save();
    res.status(200).json(user);
    }catch (err){
  res.status(500).json(err);
    }
})





module.exports = router