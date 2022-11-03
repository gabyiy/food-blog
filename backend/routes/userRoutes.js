import express, { Router } from "express";
import bcrypt from "bcryptjs";
import expressAsyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import { generateToken, isAuth } from "../utils.js";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import e from "express";

const userRouter = express.Router();

const sec = "ec";
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

userRouter.post(
  "/forgot-password",
  expressAsyncHandler(async (req, res) => {
    const email = req.body.email;

    const oldUser = await User.findOne({ email });

    if (oldUser == null) {
      res.status(500).send({ message: "User dont exist" });
    } else {
      const secret = process.env.JWT_SECRET + oldUser.password;
      const token = jwt.sign(
        { email: oldUser.email, id: oldUser._id },
        secret,
        { expiresIn: "5m" }
      );
         const link = `https://food-blog-gabi.herokuapp.com/reset-password/${oldUser._id}/${token}`;

    //  const link = `http://localhost:3000/reset-password/${oldUser._id}/${token}`;
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "gabyiy200@gmail.com",
          pass: "lbffpmexeqbjlvyg",
        },
      });

      var mailOptions = {
        from: "food@blog.com",
        to: oldUser.email,
        subject: "Password Reset",
        text: link,
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
      res.send({ oldUser, token });
    }
  })
);

userRouter.get(
  "/reset-password/:id/:token",
  expressAsyncHandler(async (req, res) => {
    const { id, token } = req.params;
    const oldUser = await User.findOne({ _id: id });
    if (!oldUser) {
      return res.json({ status: "User Not Exists!!" });
    }
    const secret = process.env.JWT_SECRET + oldUser.password;
    try {
      const verify = jwt.verify(token, secret);
      //  res.render("index", { email: verify.email, status: "Not Verified" });
    } catch (error) {
      console.log(error);
      res.send("Not Verified");
    }
  })
);

userRouter.post(
  "/reset-password/:id/:token",
  expressAsyncHandler(async (req, res) => {
    const { id, token } = req.params;
    const password = req.body.newPassword;
    const confirmPassword = req.body.confirmNewPassword;

    console.log( req.body.newPassword);
    const oldUser = await User.findOne({ _id: id });
    if (!oldUser) {
      return res.json({ status: "User Not Exists!!" });
    }
    const secret = process.env.JWT_SECRET + oldUser.password;
    const verify = jwt.verify(token, secret);
    if (password == confirmPassword) {
      await User.updateOne(
        {
          _id: id,
        },
        {
          $set: {
            password: bcrypt.hashSync(req.body.newPassword),
          },
        }
      );
    } else {
      res.status(404).send({ message: "Password dont match" });
    }
  })
);

userRouter.put(
  "/replaceProfile",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    console.log(req.user._id);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      if (req.body.password === req.body.passwordConfirmation) {
        user.password = bcrypt.hashSync(req.body.password, 8);
      }
      if (req.body.password !== req.body.passwordConfirmation) {
        res
          .status(400)
          .send({ message: "Password and ConfirmPassword dident mach" });
      }
      const updatedUser = await user.save();

      res.send({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        token: generateToken(updatedUser),
      });
    } else {
      res.status(400).send({ message: "User not found" });
    }
  })
);

export default userRouter;
