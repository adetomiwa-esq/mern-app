import expressAsyncHandler from "express-async-handler";
import goalModel from "../models/goalModel.js";
// @desc  Get goals
// @route  GET /api/goals
// access Private
export const getGoals = expressAsyncHandler(async (req, res, next) => {
  const goal = await goalModel.find();
  res.status(200).json(goal);
});

// @desc  Set goal
// @route  POST /api/goals/
// access Private
export const setGoal = expressAsyncHandler(async (req, res, next) => {
  if (!req.body.text) {
    const error = new Error("Please add a text field");
    error.status = 400;
    return next(error);
  }
  res.status(200).json({ message: "Set goals" });
});

// @desc  Update goal
// @route  PUT /api/goals/:id
// access Private
export const updateGoal = expressAsyncHandler(async (req, res, next) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

// @desc  Delete goal
// @route  DELETE /api/goals/:id
// access Private
export const deleteGoal = expressAsyncHandler(async (req, res, next) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});
