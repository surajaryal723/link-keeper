"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: '../.env' });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// Import routes
const user_router_1 = __importDefault(require("./routes/user-router"));
// Import database configuration
require("./db/config/db-config");
const content_router_1 = __importDefault(require("./routes/content-router"));
const link_router_1 = __importDefault(require("./routes/link-router"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api/v1/user', user_router_1.default);
app.use('/api/v1/content', content_router_1.default);
app.use('/api/v1/link', link_router_1.default);
app.listen(process.env.PORT || 3000);
