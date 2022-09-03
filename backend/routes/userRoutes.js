import express from "express";
import bcrypt from "bcryptjs";
import expressAsyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import {  generateToken } from "../utils.js";


const userRouter = express.Router();


userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: "Invalid email or password" });
  })
);


userRouter.post(
  "/signup",
  expressAsyncHandler(async (req, res) => {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password),
    });
    const user = await newUser.save();

    res.send({
      id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user),
    });
  })
);
userRouter.put("/emailCheck",expressAsyncHandler(async(req,res)=>{
const {email}=req.body.email
const user = await User.findOne({email})
if(!user){
  res.status(400).send({message:"This email is not register"})

  const ac_token= createToken.access({id:user._id})
}
}))


export default userRouter;
