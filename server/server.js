import express from "express";
import cors from "cors";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

async function startServer() {
  // open sqlite db
  const db = await open({
    filename: "./db.sqlite",
    driver: sqlite3.Database,
  });

  // create tables if not exist
  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE,
      name TEXT
    );
    CREATE TABLE IF NOT EXISTS items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      done INTEGER DEFAULT 0,
      userId INTEGER,
      FOREIGN KEY(userId) REFERENCES users(id)
    );
  `);

  const app = express();
  app.use(cors());
  app.use(express.json());

  // health check
  app.get("/api/health", (req, res) => {
    res.json({ ok: true, ts: new Date().toISOString() });
  });

  // get users
  app.get("/api/users", async (req, res) => {
    const users = await db.all("SELECT * FROM users");
    res.json(users);
  });

  // add user
  app.post("/api/users", async (req, res) => {
    const { email, name } = req.body;
    try {
      const result = await db.run(
        "INSERT INTO users (email, name) VALUES (?, ?)",
        [email, name]
      );
      res.json({ id: result.lastID, email, name });
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  });

  // get items
  app.get("/api/items", async (req, res) => {
    const items = await db.all("SELECT * FROM items");
    res.json(items);
  });

  // add item
  app.post("/api/items", async (req, res) => {
    const { title, userId } = req.body;
    const result = await db.run(
      "INSERT INTO items (title, userId) VALUES (?, ?)",
      [title, userId]
    );
    res.json({ id: result.lastID, title, userId, done: 0 });
  });

  // update item
  app.patch("/api/items/:id", async (req, res) => {
    const { id } = req.params;
    const { title, done } = req.body;
    await db.run(
      "UPDATE items SET title = COALESCE(?, title), done = COALESCE(?, done) WHERE id = ?",
      [title, done, id]
    );
    const item = await db.get("SELECT * FROM items WHERE id = ?", [id]);
    res.json(item);
  });

  // delete item
  app.delete("/api/items/:id", async (req, res) => {
    const { id } = req.params;
    await db.run("DELETE FROM items WHERE id = ?", [id]);
    res.json({ deleted: true });
  });

  const PORT = 4000;
  app.listen(PORT, () => {
    console.log(`✅ API running at http://localhost:${PORT}`);
  });
}

// start the server
startServer().catch((err) => {
  console.error("Failed to start server:", err);
});
