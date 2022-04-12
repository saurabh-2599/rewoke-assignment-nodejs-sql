const bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken');
const userModel=require('../Models/Users');
const register=async(req,res,next) => {
    try{
      const {name,email,password}=req.body;
      const newUser=userModel.createNew(name,email,password);
      res.status(201).json({
          status:"success",
          data:{
              newUser,
              name,
              email
          }
      })
    }
    catch(e){
       console.log(e)
    }
}
const login=async(req,res,next) =>{
    try{
        const {email,password}=req.body;
        const user=await userModel.getUserByEmail(email);
        if(!user){
            throw new Error("User does not exists")
        }
        const checkPassword=await bcrypt.compare(password,user.password);
        if(!checkPassword){
            throw new Error("Please enter valid email and password")
        }
        //if both email and password are correct generate json web token
        const token=jwt.sign({id:user.id},process.env.TOKEN_SECRET,{expiresIn:process.env.EXPIRATION});
        res.status(201).json({
            user,
            token
        })
    }
    catch(e){
        console.log(e)
    }
}
const authenticate=async(req,res,next) => {
    let token=req.headers.authorization;
    console.log(token);
    if(!(token && token.startsWith('Bearer'))){
        throw new Error("Invalid token")
    }
    token=token.split(' ');
    token=token[1];
    const isValidToken=jwt.verify(token,process.env.TOKEN_SECRET);
    if(!isValidToken){
        throw new Error("Unauthorised access not allowed.Please login")
    }
    //if everything till this point is correct only then give access to protectedRoutes by moving to next middleware
    next();
}
      
exports.register=register;
exports.login=login;
exports.authenticate=authenticate;