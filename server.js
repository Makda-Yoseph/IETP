require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); 
const app = express();
const PORT = process.env.PORT || 3000;
const garbageRoutes = require("./routes/router.js");

const corsOptions = {
  origin: "https://ietp-yzcn.onrender.com",
  methods: ["GET", "POST", "PUT", "DELETE"], 
  allowedHeaders: ["Content-Type", "Authorization"], 
};

app.use(cors(corsOptions)); 
app.use(express.json());
app.use("/api", garbageRoutes);
app.get("/", (req, res) => {
  res.send({
    message: "Hello from the server!",
  });
});
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
