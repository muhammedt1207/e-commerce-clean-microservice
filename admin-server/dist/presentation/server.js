"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const adminRoutes_1 = require("../infrastructure/routes/adminRoutes");
const depencies_1 = require("../config/depencies");
const morgan = require("morgan");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = Number(process.env.port) | 3002;
app.use(express_1.default.json);
app.use((0, cookie_parser_1.default)());
app.use(morgan('short'));
app.use((0, adminRoutes_1.adminRoutes)(depencies_1.dependancies));
app.use((err, req, res, next) => {
    const errorResonse = {
        errors: [{ message: err.message }]
    };
    return res.status(500).json(errorResonse);
});
app.listen(port, () => {
    console.log('admin server running port', port);
});
exports.default = app;
