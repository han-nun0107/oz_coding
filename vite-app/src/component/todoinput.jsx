import { useRef } from "react";

const TodoInput = ({ setTodo }) => {
  const inputRef = useRef(null);

  const addTodo = () => {
    const newTodo = {
      id: Number(new Date()),
      content: inputRef.current.value,
    };
    setTodo((prev) => [...prev, newTodo]);
  };

  return (
    <>
      <input className="border" ref={inputRef} />
      <button className="bg-gray-400 mt-1" onClick={addTodo}>
        추가
      </button>
    </>
  );
};

export default TodoInput;
