"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_model_1 = require("../db/models/user-model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userRouter = (0, express_1.Router)();
userRouter.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { firstname, lastname, email, password } = req.body;
    let hashedPassword = yield bcrypt_1.default.hash(password, 10);
    let findExistingUser = yield user_model_1.UserModel.findOne({ email });
    if (findExistingUser) {
        res.json({
            message: "User with the email already exists",
        });
        return;
    }
    let createdUser = yield user_model_1.UserModel.create({
        firstname,
        lastname,
        email,
        password: hashedPassword, // Using hashed password instead of plain password for security
    });
    res.json({
        message: "User created!",
    });
}));
userRouter.post("/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { email, password } = req.body;
    let checkEmail = yield user_model_1.UserModel.findOne({
        email,
    });
    if (!checkEmail) {
        res.json("Email is not registered!");
        return;
    }
    let checkPassword = yield bcrypt_1.default.compare(password, checkEmail.password);
    if (!checkPassword) {
        res.json({
            message: "Incorrect password!",
        });
        return;
    }
    const token = jsonwebtoken_1.default.sign({ _id: checkEmail._id }, process.env.JWT_SECRET);
    res.json({
        message: "Signed In",
        token: token
    });
}));
exports.default = userRouter;
