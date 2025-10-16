import express, { Request, Response, NextFunction } from "express";
import { router } from "./routes";
import "express-async-errors";
import cors from "cors";
import path from "path";
import http from "http";
import bodyParser from "body-parser";

const app = express();
const port = 8090;
const host = "192.168.30.26";

// ✅ Configuração de CORS antes das rotas
app.use(
  cors({
    origin:
   
        ["http://localhost:3000", "http://192.168.30.26:3000"], // dev
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// ✅ Middleware básicos
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ✅ Arquivos estáticos
app.use("/files", express.static(path.resolve(__dirname, "..", "tmp")));

// ✅ Rotas
app.use(router);

// ✅ Preflight OPTIONS
app.options("*", cors());

// ✅ Tratamento de erros
app.use(
  (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return res.status(400).json({ error: err.message });
    }
    return res.status(500).json({
      status: "error",
      message: "Internal server error...",
    });
  }
);

// ✅ Inicialização do servidor
const server = http.createServer(app);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});