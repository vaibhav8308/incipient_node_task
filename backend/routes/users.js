const router = require("express").Router();
const User = require("../models/User")
const bcrypt = require ("bcrypt");
// UPDATE The  user
router.put("/:id", async(req,res)=>{
    if (req.body.userId === req.params.id){
        if (req.body.password){
            const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
        }
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{
         $set: req.body,
        },{new:true});
        res.status(200).json(updatedUser);
    }catch (err){
  res.status(500).json(err);
    }
}
})

//DELETE The user
router.delete("/:id", async(req,res)=>{
    if (req.body.userId === req.params.id){
    try{

      const user = await User.findById(req.params.id);
    try{
       
       await User.findByIdAndDelete(req.params.id)
        res.status(200).json('user deleted');
    }catch (err){
  res.status(500).json(err);
    }
}catch(err){
     res.status(404).json("User not found")
}
}
})

// GET user
router.get("/:id",async(req,res)=>{
    try{
const user = await User.findById(req.params.id)
   const{password, ...others} = user._doc;
   res.status(200).json(others)
}catch(err){
       res.status(500).json(err)
    }
})

module.exports = router