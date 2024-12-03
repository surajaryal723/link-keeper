"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contentModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const contentSchema = new mongoose_1.default.Schema({
    userId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User'
    },
    type: {
        type: String,
        required: true
    },
    link: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});
exports.contentModel = mongoose_1.default.model('Content', contentSchema);
