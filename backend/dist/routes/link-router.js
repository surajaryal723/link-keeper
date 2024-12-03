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
const link_model_1 = require("../db/models/link-model");
const user_middleware_1 = require("../middlewares/user-middleware");
const generate_hash_1 = require("../utils/generate-hash");
const content_model_1 = require("../db/models/content-model");
const linkRouter = (0, express_1.Router)();
linkRouter.post("/", user_middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let share = req.body.share;
    let userId = req.userId;
    if (share) {
        let checkLink = yield link_model_1.linkModel.findOne({ userId });
        if (checkLink) {
            res.json({
                link: checkLink.hash,
                message: "Link already exist!",
            });
            return;
        }
        let newLink = yield link_model_1.linkModel.create({
            userId,
            hash: (0, generate_hash_1.randomHash)(15),
        });
        res.json({
            link: newLink.hash,
        });
    }
    else {
        let checkLink = yield link_model_1.linkModel.findOneAndDelete({ userId });
        res.json({
            message: "Sharing is disabled!",
        });
    }
}));
linkRouter.get("/:shareLink", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let hash = req.params.shareLink;
    let findUser = yield link_model_1.linkModel.findOne({
        hash,
    });
    if (!findUser) {
        res.json({
            message: "Link is not valid",
        });
        return;
    }
    let findContent = yield content_model_1.contentModel.find({
        userId: findUser.userId,
    }).populate('userId', 'firstname lastname email');
    res.json({
        message: findContent
    });
}));
exports.default = linkRouter;
