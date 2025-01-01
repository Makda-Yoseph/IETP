const express = require("express");
const {
  createGarbage,
  getAllGarbage,
  getGarbageById,
  updateGarbage,
  deleteGarbage,
} = require("../controllers/GarbageController");

const router = express.Router();

// API Endpoints
router.post("/garbage", createGarbage); // Create a new garbage entry
router.get("/garbage", getAllGarbage); // Get all garbage entries
router.get("/garbage/:id", getGarbageById); // Get a single garbage entry by ID
router.put("/garbage/:id", updateGarbage); // Update a garbage entry by ID
router.delete("/garbage/:id", deleteGarbage); // Delete a garbage entry by ID

module.exports = router;
