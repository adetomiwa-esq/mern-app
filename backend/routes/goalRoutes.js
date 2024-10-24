import express from "express";
import {
  deleteGoal,
  getGoals,
  setGoal,
  updateGoal,
} from "../controllers/goalController.js";

const router = express.Router();

router.route("/").get(getGoals).post(setGoal);
router.route("/:id").put(updateGoal).delete(deleteGoal);

// router.get("/", getGoals);

// router.post("/", setGoal);

// router.put("/:id", updateGoal);

// router.delete("/:id", deleteGoal);

export default router;
