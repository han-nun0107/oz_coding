import Todo from "./todo";

const TodoList = ({ todo, setTodo }) => {
  return (
    <>
      <ul className="text-center">
        {todo.map((el) => (
          <Todo key={el.id} todo={el} setTodo={setTodo} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
