import { useState } from "react";
import TodoList from "./TodoList";

const AddListItem = () => {
  const [listItem, setListItem] = useState("");
  const [todos, setTodos] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  const addOrEdit = () => {
    if (editMode) {
      const updatedListItem = todos.map((todo) => {
        if (todo.id === editId) {
          return {
            ...todo,
            text: listItem,
          };
        }
        return todo;
      });

      setTodos(updatedListItem);
      setListItem("");
      setEditMode(false);
    } else {
      setTodos([
        ...todos,
        {
          text: listItem,
          id: Math.floor(Math.random() * 1000 + 1),
          completed: false,
        },
      ]);
      setListItem("");
    }
  };
  return (
    <div>
      <input
        type="text"
        value={listItem}
        onChange={(e) => {
          setListItem(e.target.value);
        }}
      />
      <button
        onClick={() => {
          addOrEdit();
        }}
      >
        {editMode ? "Edit" : "Add"}
      </button>

      {/* List Items Array */}
      <TodoList
        todos={todos}
        setTodos={setTodos}
        listItem={listItem}
        setListItem={setListItem}
        setEditId={setEditId}
        setEditMode={setEditMode}
      />
    </div>
  );
};

export default AddListItem;
