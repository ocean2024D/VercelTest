// Server.js
const express = require("express");
const app = express();

// CORS'ı aktif hale getiriyoruz
const cors = require("cors");
app.use(cors());

// .env dosyasındaki PORT değerini alıyoruz
require("dotenv").config();

// API endpoint
app.get("/api", (req, res) => {
  res.json({ message: "Merhaba Vercel API!" });
});

// API'nin hangi portta çalışacağını belirliyoruz
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor.`);
});

