"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const linkRouter = (0, express_1.Router)();
linkRouter.get('/', (req, res) => {
    res.json({
        message: 'link router'
    });
});
exports.default = linkRouter;
