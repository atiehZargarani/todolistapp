import { useEffect } from "react";
import "./App.css";

import { useGlobal } from "@/hooks/global";
import { ItemDemo } from "./components/ui/ItemDemo";
import Card from "./components/ui/Atom/Card";
import Badage from "./components/ui/Atom/Badage";
import { getAllTodo } from "./lib/api/getAllTodos";
// import { getAllTodo } from "./lib/api/baseApi";
// todo alias

function App() {
  const { todos, setTodos, onSubmit, register, handleSubmit, errors, deleteTask, setValue } =
    useGlobal();
    

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllTodo();
      setTodos(prev => {
        const existingIds = new Set(prev.map(t => t.id));
        const onlyNew = data.filter(item => !existingIds.has(item.id));
        return [...onlyNew, ...prev];
      });
    };
    fetchData();
  }, []);

  return (
    <main>
      <section className="flex justify-center items-center gap-4 flex-wrap">
        <Card
          data={[
            { title: "All Tasks", value: todos.length },
            { title: "All Tasks", value: todos.length },
            { title: "All Tasks", value: todos.length },
            { title: "All Tasks", value: todos.length },
          ]}
        />

      </section>

      <section className=" rounded-lg overflow-hidden shadow-sm flex flex-col">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>title</label>
          <input className="border" {...register("task")} />
          {errors.task && (
            <p className="text-red-500 text-sm">{errors.task.message}</p>
          )}
          <label>user name</label>
          <input className="border" {...register("assignedTo")} />
          {errors.assignedTo && (
            <p className="text-red-500 text-sm">{errors.assignedTo.message}</p>
          )}
          <label>due date</label>
          <input className="border" {...register("dueDate")} />
     
        <Badage title="Medium" type="Medium" action={()=>{setValue("priority","Medium")}} />

          <span>status</span>

          <select id="" {...register("completed", {
            setValueAs: (value: string) => value === "1" || value === "true"
          })}>
            <option value="true">done</option>
            <option value="false">failed</option>
          </select>

          <button type="submit">add todos</button>
        </form>
      </section>
      <section className="my-2">
        {todos.map((todo) => (
          <div key={todo.id} className="flex justify-center pb-3">

            <ItemDemo title={todo.task} subtitle={todo.assignedTo} endContent1={<span>{todo.completed}</span>
            }

              cardAction={<button onClick={() => deleteTask(todo.id)}>delete</button>}
              endContent2={<Badage title={todo.priority ?? "Low"} type={todo.priority ?? "Low"} />



              }

            />

          </div>
        ))}
      </section>

    </main>
  );
}

export default App;
