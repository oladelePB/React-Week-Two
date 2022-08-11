import React from "react";
import Todo from "./Todo";

const TodoList = ({
  todos,
  setTodos,
  listItem,
  setListItem,
  setEditId,
  setEditMode,
}) => {

    return (
    <div>
      <ul>
        {todos.map((todo) => {
          return <Todo
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
            text={todo.text}
            todo={todo}
            listItem={listItem}
            setListItem={setListItem}
            setEditId={setEditId}
            setEditMode={setEditMode}
          />;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
