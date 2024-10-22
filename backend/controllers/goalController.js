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
  console.log(req.body.text);

  if (!req.body.text) {
    const error = new Error("Please add a text field");
    error.status = 400;
    return next(error);
  }
  const goal = await goalModel.create({
    text: req.body.text,
  });
  res.status(200).json(goal);
});

// @desc  Update goal
// @route  PUT /api/goals/:id
// access Private
export const updateGoal = expressAsyncHandler(async (req, res, next) => {
  // res.status(200).json({ message: `Update goal ${req.params.id}` });

  const id = req.params.id;

  const goal = await goalModel.findById(id);
  if (!goal) {
    const err = new Error(`Goal with the id: ${id} was not found`);
    err.status = 404;
    return next(err);
  }
  const updatedGoal = await goalModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.status(200).json(updatedGoal);
});

// @desc  Delete goal
// @route  DELETE /api/goals/:id
// access Private
export const deleteGoal = expressAsyncHandler(async (req, res, next) => {
  // res.status(200).json({ message: `Delete goal ${req.params.id}` });

  const id = req.params.id;
  const goal = await goalModel.findById(id);
  if (!goal) {
    const err = new Error(`Goal with the id: ${id} can not be found`);
    err.status = 404;
    return next(err);
  }
  await goalModel.findOneAndDelete({ _id: id });

  res
    .status(200)
    .json({ message: `Delete of goal with id - ${id} successful` });
});
