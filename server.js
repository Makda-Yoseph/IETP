require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import cors
const app = express();
const PORT = process.env.PORT || 3000;
const garbageRoutes = require("./routes/router.js");

// Use CORS to allow the specific URL
const corsOptions = {
  origin: "https://ietp-yzcn.onrender.com", // Allow this domain to make requests
  methods: ["GET", "POST", "PUT", "DELETE"], // Allow specific methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allow specific headers
};

app.use(cors(corsOptions)); // Use CORS with the defined options
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
