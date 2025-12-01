import { useEffect } from "react";
import "./App.css";
// import {
//   Card,
//   CardAction,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/Components/ui/card";
import { getAllTodo } from "./lib/api/getAllTodos";
import { useGlobal } from "./hooks/global";
// import { getAllTodo } from "./lib/api/baseApi";
// todo alias

function App() {
  const { allTodos, setAllTodos, onSubmit, register, handleSubmit } =
    useGlobal();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllTodo();
      setAllTodos(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className=" rounded-lg overflow-hidden shadow-sm flex flex-col">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>title</label>
          <input className="border" {...register("task")} />
          <label>user name</label>
          <input className="border" {...register("assignedTo")} />
          <label>due date</label>
          <input className="border" {...register("dueDate")} />
          <label>priority</label>
          <input className="border" {...register("priority")} />

          <span>status</span>

          <select id="" {...register("completed")}>
            <option value="1">done</option>
            <option value="0">failed</option>
          </select>

          <button type="submit">add todos</button>
        </form>
      </div>
      <div>
        {allTodos.map((todo) => (
          <div key={todo.id}>
            <span>{todo.task}</span>
            <span>{todo.assignedTo}</span>
            <span>{todo.dueDate}</span>
            <span>{todo.priority}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-4 flex-wrap">
        <div className=" rounded-lg overflow-hidden shadow-sm flex flex-col">
          <div className="px-6 py-4 w-[200px] flex flex-col justify-start">
            <div className="font-bold text-xl mb-2 text-blue-400 text-start ">
              All Tasks
            </div>
            <span className="text-sm text-gray-800 text-start ">
              {allTodos.length}
            </span>
          </div>
        </div>

        <div className=" w-[200px] rounded-lg overflow-hidden shadow-sm flex flex-col">
          <div className="px-6 py-4  flex flex-col justify-start">
            <div className=" text-xl mb-2 text-green-400 text-start font-bold">
              Done
            </div>
            <span className="text-sm text-gray-800 text-start">
              {allTodos.filter((todo) => todo.completed).length}
            </span>
          </div>
        </div>

        <div className="  w-[200px] rounded-lg overflow-hidden shadow-sm flex flex-col">
          <div className="px-6 py-4  flex flex-col justify-start">
            <div className="font-bold text-xl mb-2 text-yellow-400 text-start ">
              Pending
            </div>
            <span className="text-sm text-gray-800 text-start">
              {allTodos.filter((todo) => !todo.completed).length}
            </span>
          </div>
        </div>

        <div className=" w-[200px] rounded-lg overflow-hidden shadow-sm flex flex-col">
          <div className="px-6 py-4  flex flex-col justify-start">
            <div className="font-bold text-xl mb-2 text-red-400 text-start">
              Failed
            </div>
            <span className="text-sm text-gray-800 text-start ">
              {allTodos.filter((todo) => !todo.completed).length}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
