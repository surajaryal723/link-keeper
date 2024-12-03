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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const content_model_1 = require("../db/models/content-model");
const user_middleware_1 = require("../middlewares/user-middleware");
const contentRouter = (0, express_1.Router)();
contentRouter.get('/', user_middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let userId = req.userId;
    let contents = yield content_model_1.contentModel.find({ userId }).populate('userId', 'firstname lastname email');
    res.json({
        message: contents
    });
}));
contentRouter.post("/upload", user_middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let userId = req.userId;
    let { type, link } = req.body;
    let checkLink = yield content_model_1.contentModel.findOne({ link: link });
    if (checkLink) {
        res.json({
            message: "Link is already present!",
        });
        return;
    }
    let createdLink = yield content_model_1.contentModel.create({
        userId,
        type,
        link,
    });
    res.json({
        message: "Added successfully!",
    });
}));
exports.default = contentRouter;
