const CONSTANT = require('../config/constant')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const useRegisterController = (req,res)=>{
console.log("Registering User");
const userDetails = req.body
console.log('UserDetails =>',userDetails)
const password = userDetails.password
bcrypt.genSalt(10,(err,salt)=>{
    if(err){
        console.log(err);
    }
    else{
        bcrypt.hash(password,salt,(err,hashedPassword)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log("User Sucessfully Registered");
                res.send({"HashedPassWord":hashedPassword})
            }
        })
    }
})
}

module.exports = {useRegisterController}