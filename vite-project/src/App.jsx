import { useState } from "react";
import { twMerge } from "tailwind-merge";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="flex flex-col justify-center items-center h-[100%]">
        <div
          className={twMerge(
            "text-amber-900",
            "bg-gray-500",
            "w-[100px]",
            "h-[30px]",
            "text-center",
            "text-2xl",
            "mb-1",

            count >= 5 && "text-blue-400",
            count >= 50 && "text-cyan-950",
            count >= 500 && "text-emerald-600",

            count <= -5 && "text-red-500",
            count <= -50 && "text-pink-500",
            count <= -500 && "text-amber-600"
          )}
        >
          {count}
        </div>
        <div>
          <div className="flex gap-1.5 mb-1">
            <button
              className={btnStyle}
              onClick={() => setCount((count) => count + 1)}
            >
              1 증가
            </button>
            <button
              className={btnStyle}
              onClick={() => setCount((count) => count + 10)}
            >
              10 증가
            </button>
            <button
              className={btnStyle}
              onClick={() => setCount((count) => count + 100)}
            >
              100 증가
            </button>
          </div>
          <div className="flex gap-1.5">
            <button
              className={btnStyle}
              onClick={() => setCount((count) => count - 1)}
            >
              1 감소
            </button>
            <button
              className={btnStyle}
              onClick={() => setCount((count) => count - 10)}
            >
              10 감소
            </button>
            <button
              className={btnStyle}
              onClick={() => setCount((count) => count - 100)}
            >
              100 감소
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

const btnStyle = "bg-gray-500 text-white cursor-pointer";

export default App;
