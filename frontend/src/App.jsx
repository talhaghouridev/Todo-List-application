import React, { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      // const editTodo = todos.find((i) => i.id === editId);
      // const updatedTodos = todos.map((t) =>
      //   t.id === editTodo.id
      //     ? (t = { id: t.id, todo })
      //     : { id: t.id, todo: t.todo }
      // );

      const { data } = await api.post("/todos/create", { title: todo });
      console.log(data);

      // setTodos(data);
      setEditId(0);
      setTodo("");
      await getAlltodos();
    }

    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
      setTodo("");
    }
  };

  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
  };

  const handleEdit = (id) => {
    const editTodo = todos.find((i) => i.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
  };

  const getAlltodos = async () => {
    // const { data } = await api.post("/todos/create");
    const { data } = await api.get("/todos");

    console.log(data);
    setTodos([data.todos]);
  };

  useEffect(() => {
    getAlltodos();
  }, [todos]);

  return (
    <div className="App">
      <div className="container">
        <h1>Todo List App</h1>
        <TodoForm
          handleSubmit={handleSubmit}
          todo={todo}
          editId={editId}
          setTodo={setTodo}
        />

        <TodoList
          todos={todos}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default App;
