const router = require("express").Router();
const Task = require("../models/Task");
const auth = require("../middleware/auth");

// ADD TASK
router.post("/", auth, async (req, res) => {
  const task = await Task.create({
    userId: req.userId,
    title: req.body.title
  });

  res.json(task);
});

// GET TASKS
router.get("/", auth, async (req, res) => {
  const tasks = await Task.find({ userId: req.userId });
  res.json(tasks);
});

// DELETE TASK
router.delete("/:id", auth, async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

// TOGGLE TASK
router.put("/:id", auth, async (req, res) => {
  const task = await Task.findById(req.params.id);
  task.completed = !task.completed;
  await task.save();
  res.json(task);
});

module.exports = router;