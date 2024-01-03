const mongoose = require("mongoose");
const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
},
{
    timestamps:true
}
);
const Todo = mongoose.model("Todo", TodoSchema);
module.exports = Todo;
