"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contentRouter = (0, express_1.Router)();
contentRouter.get('/', (req, res) => {
    res.json({
        message: 'content router'
    });
});
exports.default = contentRouter;
