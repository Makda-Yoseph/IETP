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
router.post("/garbage", createGarbage);
router.get("/garbage", getAllGarbage);
router.get("/garbage/:id", getGarbageById);
router.put("/garbage/:id", updateGarbage);
router.delete("/garbage/:id", deleteGarbage);

module.exports = router;
