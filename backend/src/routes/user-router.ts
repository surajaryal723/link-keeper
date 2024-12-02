import { Router } from "express";
import { UserModel } from "../db/models/user-model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const userRouter = Router();

userRouter.post("/signup", async (req, res) => {
  let { firstname, lastname, email, password } = req.body;
  let hashedPassword = await bcrypt.hash(password, 10);
  let findExistingUser = await UserModel.findOne({ email });
  if (findExistingUser) {
    res.json({
      message: "User with the email already exists",
    });
    return;
  }
  let createdUser = await UserModel.create({
    firstname,
    lastname,
    email,
    password: hashedPassword, // Using hashed password instead of plain password for security
  });
  res.json({
    message: "User created!",
  });
});

userRouter.post("/signin", async (req, res) => {
  let { email, password } = req.body;

  let checkEmail = await UserModel.findOne({
    email,
  });
  if (!checkEmail) {
    res.json("Email is not registered!");
    return;
  }

  let checkPassword = await bcrypt.compare(password, checkEmail.password);

  if (!checkPassword) {
    res.json({
      message: "Incorrect password!",
    });
    return;
  }


  const token = jwt.sign({ _id: checkEmail._id }, process.env.JWT_SECRET as string);
  res.json({
    message: "Signed In",
    token: token
  });
});

export default userRouter;
