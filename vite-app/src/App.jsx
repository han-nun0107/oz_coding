import { useState } from "react";
import Clock from "./component/Clock";
import TodoInput from "./component/todoinput";
import TodoList from "./component/todolist";
import StopWatch from "./component/stopwatch";
import Timer from "./component/timer";
import Advice from "./component/advice";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([
    {
      id: Number(new Date()),
      content: "안녕하세요",
    },
  ]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 ">
      <div className="grid w-full max-w-4xl grid-rows-[.1fr_.1fr_.1fr_.4fr_.4fr_.2fr] gap-4">
        <Advice />
        <Clock />
        <StopWatch />
        <Timer />
        <TodoInput setTodo={setTodo} />
        <TodoList todo={todo} setTodo={setTodo} />
      </div>
    </div>
  );
}
export default App;
