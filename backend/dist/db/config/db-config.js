"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
if (!process.env.MONGODB_URL) {
    throw new Error('MONGODB_URL environment variable is not defined');
}
exports.config = mongoose_1.default.connect(process.env.MONGODB_URL)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));
