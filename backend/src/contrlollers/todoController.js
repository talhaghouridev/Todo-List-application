const Todo = require("../models/TodoModel");
const catchAsyncHandler = require("../utils/catchAsyncHandler");

const createTodo = catchAsyncHandler(async (req, res, next) => {
  const { title } = req.body;

  if (!title) {
    return next(new Error("Please provide title"));
  }

  const user = new Todo({ title });
  await user.save();

  res.status(200).json({
    success: true,
    message: "Todo created Successfully",
  });
});

const updateTodo = catchAsyncHandler(async (req, res, next) => {
  const { title } = req.body;
  const { id } = req.params;
  if (!title) {
    return next(new Error("Please provide title"));
  }

  const user = await Todo.findByIdAndUpdate(id, {
    $set: title,
  });

  res.status(200).json({
    success: true,
    message: "Todo Update Successfully",
  });
});

const deleteTodo = catchAsyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const user = await Todo.findOneAndDelete(id);

  res.status(200).json({
    success: true,
    message: "Todo deleted Successfully",
  });
});

const getAllTodos = catchAsyncHandler(async (req, res, next) => {
  const todos = await Todo.find();
  res.status(200).json({
    success: true,
    todos,
  });
});


module.exports = {
    createTodo,updateTodo,deleteTodo,getAllTodos
}