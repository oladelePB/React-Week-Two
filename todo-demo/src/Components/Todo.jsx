import React from "react";

const Todo = ({
  todos,
  setTodos,
  text,
  todo,
  listItem,
  setListItem,
  setEditId,
  setEditMode,
}) => {

    console.log(todos)

  const editTodo = (id) => {
    let theEditMode = todos.find((theTodo) => {
      return theTodo.id === id;
    });
    if (theEditMode) {
      setEditMode(true);
      setListItem(theEditMode.text);
      setEditId(id);
    }
  };

  const deleteTodo = () => {
    setTodos(todos.filter((singleTodo) => singleTodo.id !== todo.id));
  };

  const completeTodo = (id) => {
    const updatedTodo = todos.map((theTodo) => {
      if (theTodo.id === id) {
        return {
          ...theTodo,
          completed: !theTodo.completed,
        };
      }
      return theTodo;
    });

    setTodos(updatedTodo);
    setEditId(id);
  };

  console.log("todos : " + todos);
  return (
    <div>
      <li>{text}</li>
      <button onClick={() => editTodo(todo.id)}>Edit</button>
      <button onClick={() => deleteTodo()}>Delete</button>
      <button onClick={() => completeTodo(todo.id)}>
        {todo.completed ? "Mark Not Complete" : "Mark Completed"}
      </button>
      <h5>Status: {todo.completed ? "Completed" : "Not Completed"}</h5>
    </div>
  );
};

export default Todo;
