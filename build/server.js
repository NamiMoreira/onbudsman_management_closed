"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
require("express-async-errors");
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const http_1 = __importDefault(require("http"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = 8090;
const host = "192.168.30.26";
// ✅ Configuração de CORS antes das rotas
app.use((0, cors_1.default)({
    origin: ["http://localhost:3000", "http://192.168.30.26:3000"], // dev
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
}));
// ✅ Middleware básicos
app.use(body_parser_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
// ✅ Arquivos estáticos
app.use("/files", express_1.default.static(path_1.default.resolve(__dirname, "..", "tmp")));
// ✅ Rotas
app.use(routes_1.router);
// ✅ Preflight OPTIONS
app.options("*", (0, cors_1.default)());
// ✅ Tratamento de erros
app.use((err, req, res, next) => {
    if (err instanceof Error) {
        return res.status(400).json({ error: err.message });
    }
    return res.status(500).json({
        status: "error",
        message: "Internal server error...",
    });
});
// ✅ Inicialização do servidor
const server = http_1.default.createServer(app);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
