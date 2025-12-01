import { useState } from "react";
import "./App.css";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
// import { getAllTodo } from "./lib/api/baseApi";
// todo alias
function App() {
//   const [allTodos, setAllTodos] = useState([{}]);
//   const createTodo = () => {
//     fetch("https://dummyjson.com/todos/add", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         todo: "Use DummyJSON in the project",
//         completed: false,
//         userId: 5,
//       }),
//     })
//       .then((res) => res.json())
//       .then((json) => {
//         console.log("json", json);
//         allTodos.unshift({
//           completed: json.completed,
//           id: json.id,
//           todo: json.todo,
//           userId: json.userId,
//         });
//       });
//   };

//   const test =()=>{
//  const res=  getAllTodo();
//        console.log("res", getAllTodo());
       
//   }



  return (
    <>
      <div className=" rounded-lg overflow-hidden shadow-sm flex flex-col">
        <label>title</label>
        <input className="border" />
        <label>user name</label>
        <input className="border" />
        <label>category</label>

        <select name="" id="">
          <option value="work">work</option>
          <option value="hobby">hobby</option>
          <option value="necessary">necessary</option>
          <label>category</label>
        </select>
        <label>status</label>

        <select name="" id="">
          <option value="2">inprogress</option>
          <option value="1">done</option>
          <option value="0">failed</option>
        </select>
        {/* <button
          onClick={() => {
            createTodo();
          }}
        >
          create
        </button>
        <button
          onClick={() => {
         test();
          }}
        >
          get todos
        </button>
        <button
          onClick={() => {
            console.log("show all data", allTodos);
          }}
        >
          get todos
        </button> */}
      </div>

      <div className="flex justify-center items-center gap-4 flex-wrap">
        <div className=" rounded-lg overflow-hidden shadow-sm flex flex-col">
          <div className="px-6 py-4 w-[200px] flex flex-col justify-start">
            <div className="font-bold text-xl mb-2 text-blue-400 text-start font-bold">
              All Tasks
            </div>
            <span className="text-sm text-gray-800 text-start ">10</span>
          </div>
        </div>

        <div className=" w-[200px] rounded-lg overflow-hidden shadow-sm flex flex-col">
          <div className="px-6 py-4  flex flex-col justify-start">
            <div className="font-bold text-xl mb-2 text-green-400 text-start font-bold">
              Done
            </div>
            <span className="text-sm text-gray-800 text-start">10</span>
          </div>
        </div>

        <div className="  w-[200px] rounded-lg overflow-hidden shadow-sm flex flex-col">
          <div className="px-6 py-4  flex flex-col justify-start">
            <div className="font-bold text-xl mb-2 text-yellow-400 text-start font-bold">
              Pending
            </div>
            <span className="text-sm text-gray-800 text-start">10</span>
          </div>
        </div>

        <div className=" w-[200px] rounded-lg overflow-hidden shadow-sm flex flex-col">
          <div className="px-6 py-4  flex flex-col justify-start">
            <div className="font-bold text-xl mb-2 text-red-400 text-start font-bold">
              Failed
            </div>
            <span className="text-sm text-gray-800 text-start ">10</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
