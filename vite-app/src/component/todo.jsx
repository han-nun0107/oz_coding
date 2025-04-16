import { useState } from "react";

const Todo = ({ todo, setTodo }) => {
  const [inputValue, setInputValue] = useState(todo.content);
  const [edit, setEdit] = useState(false);
  return (
    <li className="todo-list">
      <div className="todo">
        <span>{todo.content}</span>
        {edit && (
          <input
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
        )}
      </div>
      <div>
        <button
          className="bg-gray-400 mr-1.5"
          onClick={() => {
            setTodo((prev) =>
              prev.map((el) =>
                el.id === todo.id ? { ...el, content: inputValue } : el
              )
            );
            setEdit(!edit);
          }}
        >
          {edit ? "저장" : "수정"}
        </button>
        <button
          className="bg-gray-400"
          onClick={() => {
            setTodo((prev) => {
              return prev.filter((el) => el.id !== todo.id);
            });
          }}
        >
          삭제
        </button>
      </div>
    </li>
  );
};

export default Todo;
