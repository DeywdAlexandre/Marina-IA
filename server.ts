import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { spawn } from "child_process";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECT_ID = "67dd5514-4060-4cc9-8ac6-eaaa5ee21c16";
const EXPO_API = "https://api.expo.dev";

function getToken(): string | null {
  return process.env.EXPO_TOKEN || null;
}

async function startServer() {
  const app = express();
  const PORT = 5000;

  app.use(express.json());

  // ── List builds ───────────────────────────────────────────────────────────
  app.get("/api/expo/builds", async (req, res) => {
    const token = getToken();
    if (!token) return res.status(500).json({ error: "EXPO_TOKEN não configurado." });

    const projectId = (req.query.projectId as string) || PROJECT_ID;
    try {
      const r = await fetch(
        `${EXPO_API}/v2/projects/${projectId}/builds?platform=android&limit=10`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const data = await r.json() as any;
      res.json({ builds: data.data || [] });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  // ── List OTA updates ──────────────────────────────────────────────────────
  app.get("/api/expo/updates", async (req, res) => {
    const token = getToken();
    if (!token) return res.status(500).json({ error: "EXPO_TOKEN não configurado." });

    const projectId = (req.query.projectId as string) || PROJECT_ID;
    try {
      const r = await fetch(
        `${EXPO_API}/v2/projects/${projectId}/updates?limit=10`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const data = await r.json() as any;
      res.json({ updates: data.data || [] });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  // ── Trigger EAS Build (APK) ───────────────────────────────────────────────
  app.post("/api/expo/build", (req, res) => {
    const token = getToken();
    if (!token) return res.status(500).json({ error: "EXPO_TOKEN não configurado." });

    const profile = (req.body.profile as string) || "preview";
    const platform = (req.body.platform as string) || "android";

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");
    res.flushHeaders();

    const send = (msg: string) => res.write(`data: ${JSON.stringify({ log: msg })}\n\n`);

    send(`Iniciando build EAS (perfil: ${profile}, plataforma: ${platform})...`);

    const child = spawn(
      "npx",
      ["eas-cli", "build", "--platform", platform, "--profile", profile, "--non-interactive"],
      {
        cwd: process.cwd(),
        env: { ...process.env, EXPO_TOKEN: token },
      }
    );

    child.stdout.on("data", (d) => {
      d.toString().split("\n").filter(Boolean).forEach((line: string) => send(line));
    });
    child.stderr.on("data", (d) => {
      d.toString().split("\n").filter(Boolean).forEach((line: string) => send(line));
    });
    child.on("close", (code) => {
      send(code === 0 ? "✅ Build iniciado com sucesso!" : `❌ Build finalizado com código ${code}`);
      res.write(`data: ${JSON.stringify({ done: true, code })}\n\n`);
      res.end();
    });
  });

  // ── Trigger OTA Update ────────────────────────────────────────────────────
  app.post("/api/expo/update", (req, res) => {
    const token = getToken();
    if (!token) return res.status(500).json({ error: "EXPO_TOKEN não configurado." });

    const message = (req.body.message as string) || "OTA Update";
    const branch = (req.body.branch as string) || "production";

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");
    res.flushHeaders();

    const send = (msg: string) => res.write(`data: ${JSON.stringify({ log: msg })}\n\n`);

    send(`Publicando OTA Update no branch '${branch}'...`);

    const child = spawn(
      "npx",
      ["eas-cli", "update", "--branch", branch, "--message", message, "--non-interactive"],
      {
        cwd: process.cwd(),
        env: { ...process.env, EXPO_TOKEN: token },
      }
    );

    child.stdout.on("data", (d) => {
      d.toString().split("\n").filter(Boolean).forEach((line: string) => send(line));
    });
    child.stderr.on("data", (d) => {
      d.toString().split("\n").filter(Boolean).forEach((line: string) => send(line));
    });
    child.on("close", (code) => {
      send(code === 0 ? "✅ OTA Update publicado com sucesso!" : `❌ Update finalizado com código ${code}`);
      res.write(`data: ${JSON.stringify({ done: true, code })}\n\n`);
      res.end();
    });
  });

  // ── Vite middleware ───────────────────────────────────────────────────────
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, r) => r.sendFile(path.join(distPath, "index.html")));
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
