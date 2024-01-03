const { Router } = require("express");
const {
  createTodo,
  getAllTodos,
  updateTodo,
  deleteTodo,
} = require("../contrlollers/todoController");

const router = Router();

router.route("/").get(getAllTodos);

router.route("/create").post(createTodo);
router.route("/update").put(updateTodo);

router.route("/delete").delete(deleteTodo);

module.exports = router;