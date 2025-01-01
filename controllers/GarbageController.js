const Garbage = require("../models/Garbage");

// Create a new garbage entry
const createGarbage = async (req, res) => {
  try {
    const { locationID, level1, level2, location } = req.body;
    const newGarbage = new Garbage({ locationID, level1, level2, location });
    const savedGarbage = await newGarbage.save();
    res.status(201).json(savedGarbage);
  } catch (error) {
    res.status(500).json({ message: "Error creating garbage entry", error });
  }
};

// Get all garbage entries
const getAllGarbage = async (req, res) => {
  try {
    const garbageList = await Garbage.find();
    res.status(200).json(garbageList);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving garbage entries", error });
  }
};

// Get a single garbage entry by ID
const getGarbageById = async (req, res) => {
  try {
    const { id } = req.params;
    const garbage = await Garbage.findById(id);
    if (!garbage) {
      return res.status(404).json({ message: "Garbage entry not found" });
    }
    res.status(200).json(garbage);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving garbage entry", error });
  }
};

// Update a garbage entry by ID
const updateGarbage = async (req, res) => {
  try {
    const { id } = req.params;
    const { locationID, level1, level2, location } = req.body;
    const updatedGarbage = await Garbage.findByIdAndUpdate(
      id,
      { locationID, level1, level2, location },
      { new: true }
    );
    if (!updatedGarbage) {
      return res.status(404).json({ message: "Garbage entry not found" });
    }
    res.status(200).json(updatedGarbage);
  } catch (error) {
    res.status(500).json({ message: "Error updating garbage entry", error });
  }
};

// Delete a garbage entry by ID
const deleteGarbage = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedGarbage = await Garbage.findByIdAndDelete(id);
    if (!deletedGarbage) {
      return res.status(404).json({ message: "Garbage entry not found" });
    }
    res.status(200).json({ message: "Garbage entry deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting garbage entry", error });
  }
};

module.exports = {
  createGarbage,
  getAllGarbage,
  getGarbageById,
  updateGarbage,
  deleteGarbage,
};
