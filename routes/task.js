const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// ➕ Add Task
router.post("/add", async (req, res) => {
  try {
    const { userId, title } = req.body;

    const task = new Task({ userId, title });
    await task.save();

    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 📄 Get Tasks (by user)
router.get("/:userId", async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.params.userId });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ❌ Delete Task
router.delete("/:id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Toggle Complete
router.put("/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    task.completed = !task.completed;
    await task.save();

    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;