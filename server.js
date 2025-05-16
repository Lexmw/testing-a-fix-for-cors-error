// server.js
import express from "express";
import fetch from "node-fetch"; // If using Node 18+, you can omit this and just use global fetch
import dotenv from "dotenv";
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors())

app.get("/api/data", async (req, res) => {
  try {
    const apiUrl = "https://api.genius.com/songs/4"; // Replace with your actual API
    const token = process.env.BEARER_TOKEN;

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("Error fetching API data:", err);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
