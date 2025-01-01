require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;
const garbageRoutes = require('./routes/rotuer.js');
app.use(express.json());
app.use("/api", garbageRoutes);

const MONGODB_URL = process.env.MONGODB_URL;
mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
