"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
require("express-async-errors");
const cors_1 = __importDefault(require("cors"));
const path = require('path');
const http = require('http');
const app = (0, express_1.default)();
const bodyParser = require('body-parser');
const port = 8090;
const host = '192.168.30.26';
app.use(express_1.default.urlencoded());
app.use(bodyParser.json());
app.use(express_1.default.json());
app.use(routes_1.router);
app.use((0, cors_1.default)());
app.use('files', express_1.default.static(path.resolve(__dirname, '..', 'tmp')));
app.use((err, req, res, next) => {
    if (err instanceof Error) {
        return res.status(400).json({
            error: err.message
        });
    }
    return res.status(500).json({
        status: "error",
        message: "Internal server error..."
    });
});
var server = http.createServer(app);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
