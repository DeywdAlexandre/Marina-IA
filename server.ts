import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 5000;

  app.use(express.json());

  // API Routes for Expo EAS Integration
  // This is where EXPO_TOKEN will be used securely
  app.get("/api/expo/builds", async (req, res) => {
    const { projectId } = req.query;
    const token = process.env.EXPO_TOKEN;

    if (!token) {
      return res.status(500).json({ error: "EXPO_TOKEN não configurado no servidor." });
    }

    try {
      // Aqui faremos a chamada real para https://api.expo.dev/v2/projects/${projectId}/builds
      // Por enquanto, retornamos um placeholder alinhado com o que você pediu
      res.json({ builds: [] });
    } catch (error) {
      res.status(500).json({ error: "Falha ao buscar builds no Expo EAS." });
    }
  });

  app.post("/api/expo/update", async (req, res) => {
    const { projectId, message } = req.body;
    const token = process.env.EXPO_TOKEN;

    if (!token) {
      return res.status(500).json({ error: "EXPO_TOKEN não configurado no servidor." });
    }

    try {
      // Trigger OTA Update via EAS CLI ou API
      console.log(`Triggering OTA for ${projectId}: ${message}`);
      res.json({ status: "success", message: "OTA Update iniciado (simulação)." });
    } catch (error) {
      res.status(500).json({ error: "Erro ao disparar OTA Update." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
