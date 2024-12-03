"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userMiddleware = (req, res, next) => {
    if (!req.headers['authorization']) {
        res.json({
            message: 'Invalid request!'
        });
    }
    let user = jsonwebtoken_1.default.verify(req.headers['authorization'], process.env.JWT_SECRET);
    req.userId = user._id;
    next();
};
exports.userMiddleware = userMiddleware;
