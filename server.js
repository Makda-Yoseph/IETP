require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const garbageRoutes = require("./routes/garbageRoute.js");

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
mongoose
  .connect(
    "mongodb+srv://hayle_hb:HHBW1234@nodejs.b3kc1wk.mongodb.net/?retryWrites=true&w=majority&appName=NodeJS"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(5000, () => {
      console.log(`Server is running`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
