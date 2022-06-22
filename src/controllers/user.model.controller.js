const express=require("express")
const router=express.Router()
const User= require("../models/user.model")
router.get("",async(req,res)=>{
    try {
         const users= await User.find().lean().exec();
         return res.status(200).send(users)
    } catch (error) {
       return  res.status(500).send({message:error.message})
    }
})



router.post("",async(req,res)=>{
    try {
         const user= await User.create(req.body);
         const users= await User.find().lean().exec();
        
         const flattened= myFlatten(users[0])
            
        return res.status(201).send(flattened)
    } catch (error) {
       return  res.status(500).send({message:error.message})
    }
})

// custome function to flatten json object
const myFlatten = (obj = {}, res = {}, extraKey = '') => {
    for(key in obj){
       if(typeof obj[key] !== 'object'){
          res[extraKey + key] = capitalize(typeof obj[key]);
       }else{
        myFlatten(obj[key], res, `${extraKey}${key}.`);
       };
    };
    return res;
 };
 // function to capitalize first letter
 const capitalize = str => str.split(' ').map(sub => sub.charAt(0).toUpperCase() + sub.slice(1)).join(' ');





module.exports=router